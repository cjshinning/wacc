const path = require('path');
const fs = require('fs-extra');
const {
    spawn
} = require('child_process');
const inquirer = require('inquirer');
const SvnUploading = require("svn-uploading");
const Webpack = require('webpack');
const webpackConfig = require('../build/webpack.deploy');
const settings = require('../config/settings');
const {
    log
} = require('../lib/util');
// const SvnWebpackPlugin = require('../plugins/svn-webpack-plugin');

// 上传到svn
function uploadToSvn(svnPath, dist, msg) {
    return new Promise((resolve, reject) => {
        //初始化svn
        let svn1 = new SvnUploading({
            cwd: dist
        });
        svn1.check().then(status1 => {
            if (status1.unknownList.includes(svnPath)) { //如果是新增的game目录
                svn1.upload({
                    name: svnPath,
                    msg
                }).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            } else {
                //初始化game目录的svn
                let svn2 = new SvnUploading({
                    cwd: svnPath
                })
                svn2.upload({
                    msg
                }).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            }
        }).catch(err => {
            reject(err);
        });
    })
}

async function uploadAssets(src, dist, msg) {
    return new Promise(async (resolve, reject) => {
        const svnPath = path.resolve(dist, settings.appId);
        const devPath = path.resolve(src, settings.appId);

        // console.log(svnPath, devPath);

        fs.readdir(devPath, async (err, files) => {
            if (err) {
                reject(err)
            };
            for (let i = 0; i < files.length; i++) {
                const filedir = path.join(devPath, files[i]);
                const stats = fs.statSync(filedir);

                const isFile = stats.isFile();
                if (!isFile) {
                    let assetsDir = filedir.split(devPath)[1];
                    await fs.copy(path.join(devPath, assetsDir), path.join(svnPath, assetsDir));
                }
            }
            await uploadToSvn(svnPath, dist, msg);
            resolve();
        })
    })
}

async function uploadTpl(src, dist, msg) {
    return new Promise(async (resolve, reject) => {
        const svnPath = path.resolve(dist, settings.appId);
        const devPath = path.resolve(src, settings.appId);

        fs.readdir(devPath, async (err, files) => {
            if (err) throw err;
            for (let i = 0; i < files.length; i++) {
                const filedir = path.join(devPath, files[i]);
                const stats = fs.statSync(filedir);

                const isFile = stats.isFile();
                if (isFile) {
                    let assetsFile = filedir.split(devPath)[1];
                    await fs.copy(path.join(devPath, assetsFile), path.join(svnPath, assetsFile));
                }
            }
            await uploadToSvn(svnPath, dist, msg);
            resolve();
        })
    })
}

async function uploadSrc(src, dist, msg) {
    return new Promise(async (resolve, reject) => {
        const svnPath = path.resolve(dist, settings.appId);
        const devPath = path.resolve(src, settings.appId);

        await fs.copy(devPath, svnPath);

        await uploadToSvn(svnPath, dist, msg);
        resolve();
    })
}

function getTitle() {
    return new Promise((resolve, reject) => {
        const index = path.resolve(settings.basePath, 'src', settings.appId, 'templates/pc/index.html');
        fs.readFile(index, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            };
            let title = data.match(/<title>(.*)<\/title>/)[1];
            resolve(title);
        });
    })
}

Webpack(webpackConfig, async (err, stats) => {
    if (err || stats.hasErrors()) {
        log(err, 'red');
        return;
    }
    try {
        const title = await getTitle();

        const answers = await inquirer
            .prompt([{
                name: 'msg',
                default: title,
                type: 'input',
                message: '请输入您本次提交的说明信息(输入要多于5个字，否则将使用默认的提交信息)：'
            }])

        if (answers.msg.length <= 5) {
            answers.msg = title;
        }
        log('-----正准备提交线上代码到svn-----', 'blue');

        const localDist = path.resolve(settings.basePath, 'dist');
        const remoteImgDist = path.resolve(settings.basePath, '../img1.37wanimg.com');
        const remoteTplDist = path.resolve(settings.basePath, '../common.tpl.37.com');

        // 上传静态资源
        await uploadAssets(localDist, remoteImgDist, answers.msg)
        log('静态资源上传成功，请去上线发布系统发单！', 'green');

        // 上传模板
        await uploadTpl(localDist, remoteTplDist, answers.msg)
        log('模板上传成功，请去上线发布系统发单！', 'green');

        const answers2 = await inquirer
            .prompt([{
                name: 'flag',
                default: title,
                type: 'confirm',
                message: '您是否需要提交开发源码到svn'
            }])

        if (answers2.flag) {
            const localSrc = path.resolve(settings.basePath, 'src');
            const remoteSrc = path.resolve(settings.basePath, '../src');

            // 上传源码
            await uploadSrc(localSrc, remoteSrc, answers2.msg);
            log('源码上传成功！', 'green');
        }
    } catch (error) {
        log(error, 'red');
    }
})