const fs = require('fs');
const path = require('path');
function htmlTohtmWebpackPlugin(patterns) {
    this.patterns = patterns;
}

htmlTohtmWebpackPlugin.prototype.apply = function (compiler) {
    const _this = this;
    compiler.plugin("emit", function (compilation, callback) {
        _this.patterns.forEach(pattern => {
            const htmlCode = compilation.assets[pattern].source();
            compilation.assets[pattern.substring(0, pattern.length-1)] = {
                source: function () {
                    return htmlCode;
                },
                size: function () {
                    return Buffer.byteLength(htmlCode, 'utf8');
                }
            }
        })
        callback();
    });
    compiler.plugin('done', (stats) => {
        _this.patterns.forEach(pattern => {
            const htmlPath = path.join(stats.compilation.compiler.outputPath, pattern);
            fs.stat(htmlPath, (err, stats) => {
                if (err) throw err;
                if(stats.isFile()){
                    fs.unlinkSync(htmlPath);
                }
            });
        })
    });
};

module.exports = htmlTohtmWebpackPlugin;