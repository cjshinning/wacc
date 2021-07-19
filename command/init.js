const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const settings = require('../config/settings');
const { log } = require('../lib/util');

async function chooseComponents(baseDist){
    const baseSrc = path.resolve(settings.basePath, 'template/baseTpl');
    const componentsSrc = path.resolve(settings.basePath, 'template/components');
    let fileFilter = [".idea",".vscode",".DS_Store"];
    fs.removeSync(baseDist);
    try {
        await fs.copy(baseSrc, baseDist)
        fs.readdir(componentsSrc, async (err,files) => {
            if (err) throw err;

            fileFilter = files.filter(file => !fileFilter.includes(file));
            const answers = await inquirer
                .prompt([
                    {
                        name: 'component',
                        default: fileFilter,
                        type: 'checkbox',
                        choices: fileFilter,
                        message: '请选择您需要使用到的组件(默认全选)：'
                    }
                ])

            if(answers.component.length === 0){
                log('项目初始化成功！', 'green');
                return;
            }
            answers.component.forEach(file => {
                const src = path.resolve(componentsSrc, file);
                const dist = path.resolve(baseDist, 'src/components/', file);
                fs.copySync(src,dist);
            })
            log('项目初始化成功！', 'green');
        })
    }catch(error){
        log(error, 'red');
    }
}

async function init(){
    const baseDist = path.resolve(settings.basePath, 'src', settings.appId);
    
    if(fs.existsSync(baseDist)){
        const answers = await inquirer
            .prompt([
                {
                    name: 'ifCopy',
                    default: false,
                    type: 'confirm',
                    message: '您当前初始化的目录已存在，是否重新覆盖(默认no)：'
                }
            ])

        if(!answers.ifCopy){
            log('项目初始化失败', 'red');
            return;
        }
        chooseComponents(baseDist);
    }else{
        chooseComponents(baseDist);
    }
}

module.exports = () => {
    return init();
}