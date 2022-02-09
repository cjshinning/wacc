# wacc

a web client

## 命令行

- 初始化  
  wacc init **gamekey**（必传）

- 开发模式  
  wacc dev **gamekey**（必传）

- 测试环境  
  wacc prod **gamekey**（必传）

- 产出环境  
  wacc deploy **gamekey**（必传）

## 配置

- settings  
  找到项目 config/settins，配置 pages，传入数组  
  pc 端直接按页面名称命名，比如首页 index.html  
  wap 端需要在前面加上 wap 目录，比如首页 wap/index.html
- pages  
  找到 src 目录，对应的 gamekey 下的 src 里的 pages，这里是入口配置  
  pc 端按页面名称直接加目录，比如首页 index/index.js  
  wap 端需要在前面加上 wap 目录，比如首页 wap/index/index.js

## 项目目录介绍

- bin 脚手架主入口
  wacc.js 主文件
- build webpack 配置
  webpack.common.js 基础配置
  webpack.dev.js 开发环境配置
  webpack.prod.js 测试环境配置
  webpack.deploy.js 产出环境配置
- command
  init.js 初始化命令的主逻辑
  server.js 本地开发命令主逻辑
  build.js 测试环境命令主逻辑
  deploy.js 产出环境主逻辑
- config
  settings.js 脚手架的基础配置
- lib
  util.js 工具库
- src 源码存放目录，按 gamekey 命名
- template 模板存放位置
  baseTpl 项目开发整体架构
  components 各种组件存放，按 pc 和 wap 区分
- babel.config.js
  babel 的配置
- package.json
  包安装的配置
- postcss.config.js
  postcss 配置
