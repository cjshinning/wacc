class SvnWebpackPlugin {
    constructor(options = {}){
        console.log(options);
    }
    apply(compiler) {
        compiler.hooks.done.tap('SvnWebpackPlugin',(stats) => {
            console.log('可以准备上传了!');
        });
    }
}

module.exports = SvnWebpackPlugin;