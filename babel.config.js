module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",   // 让 @babel/polyfill 按需引入
                corejs: 2               // 新版本 polyfill 需要声明 core-js 版本，否则打包会 wanning
            }
        ]
    ]
}