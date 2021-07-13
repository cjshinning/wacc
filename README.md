# wacc
a web client

##命令行
* 初始化
wacc init **gamekey**  gamekey为必传

* 开发模式
wacc dev **gamekey**  gamekey为必传

* 测试环境
wacc prod **gamekey**  gamekey为必传

* 产出环境
wacc deploy **gamekey**  gamekey为必传

##配置
* settins
找到项目config/settins，配置pages，传入数组
pc端直接按页面名称命名，比如首页index.html
wap端需要在前面加上wap目录，比如首页wap/index.html
* pages
找到src目录，对应的gamekey下的src里的pages，这里是入口配置
pc端按页面名称直接加目录，比如首页index/index.js
wap端需要在前面加上wap目录，比如首页wap/index/index.js