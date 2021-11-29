<template>
    <div class="top-nav-normal">
        <div class="inner">
            <ul>
                <li v-for="(item,index) in topNavConfig">
                    <a :href="item.link" target="_blank"><i>{{item.sub}}</i><span>{{item.title}}</span></a>
                </li>
            </ul>
        </div>
        <a :href="indexLink" target="_blank" class="logo"></a>
    </div>
</template>
<script>
export default {
    data(){
        return {
            indexLink: './',
            topNavConfig: [
                {
                    title: '官网首页',
                    sub: 'HOME',
                    link: './'
                },
                {
                    title: '资讯中心',
                    sub: 'NEWS',
                    link: './list.html?cate=xinwen&page=1'
                },
                {
                    title: '游戏攻略',
                    sub: 'GUIDE',
                    link: './list.html?cate=gonglue&page=1'
                },
                {
                    title: '客服中心',
                    sub: 'SERVICE',
                    link: '//kf.37.com/'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .top-nav-normal{
        position: absolute;
        left: 50%;
        margin-left: -600px;
        top: 0px;
        width: 1200px;
        overflow: hidden;
        // height: 97px;
        // z-index: 999;
        .inner{
            position: relative;
            padding: 38px 210px 0;
        }
        li{
            float: left;
            width: 100px;
            a{
                display: block;
                text-align: center;
                text-decoration: none;
                line-height: 97px;
                font-size: 26px;
                color: #3c82fc;
                i{
                    display: block;
                    height: 18px;
                    line-height: 18px;
                    text-align: center;
                    font-style: normal;
                    font-size: 10px;
                    color: #8f8f8f;
                }
                span{
                    display: block;
                    height: 28px;
                    line-height: 28px;
                    text-align: center;
                    font-size: 18px;
                    color: #d4d6d6;
                }
                &:hover{
                    i{
                        color: #b38d61;
                    }
                    span{
                        color: #b38d61;
                    }
                }
            }
            &.current{
                a{
                    background: #e57942;
                    color: #fff;
                    i{
                        display: block;
                    }
                }
            }
        }
        .logo{
            display: block;
            position: absolute;
            left: 14px;
            top: 24px;
            width: 182px;
            height: 87px;
            background: url('./img/logo​​​.png') no-repeat;
        }
    }
</style>

