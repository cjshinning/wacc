<template>
    <div class="right-menu" :class="{hiddenAni: !ifshow}">
        <div class="menu-inner">
            <ul id="menu">
                <li data-menuanchor="page2">
                    <a href="#page2">
                        <i></i>
                        <p>新闻资讯</p>
                    </a>
                </li>
                <li data-menuanchor="page3">
                    <a href="#page3">
                        <i></i>
                        <p>游戏攻略</p>
                    </a>
                </li>
                <li data-menuanchor="page4">
                    <a href="#page4">
                        <i></i>
                        <p>武将库</p>
                    </a>
                </li>
                <li data-menuanchor="page5">
                    <a href="#page5">
                        <i></i>
                        <p>游戏特色</p>
                    </a>
                </li>
            </ul>
            <div class="back-to">
                <span class="line"></span>
                <a href="#page1" class="to-top">
                    <i></i>
                    <p>返回顶部</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['ifshow'],
    mounted(){
        // console.log(this.ifshow);
    }
}
</script>
<style lang="scss" scoped>
    @import './css/sprite.scss';
    .right-menu{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100px;
        height: 100%;
        transition: all ease 0.5s;
        background: #000;
        .menu-inner{
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100px;
            height: 100%;
        }
        ul{
            position: absolute;
            right: 0;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
        }
        li{
            cursor: pointer;
            a{
                display: block;
            }
            i{
                display: block;
                width: 27px;
                height: 27px;
                margin: 0 auto;
                @include sprite($dot);
                // transition: all ease 0.3s;
            }
            p{
                opacity: 0;
                margin: 6px 0 40px 0;
                font-size: 14px;
                text-align: center;
                color: #b2b3b3;
                transition: all ease 0.3s;
            }
            &.active, a:hover{
                i{
                    @include sprite($dot-h);
                }
                p{
                    opacity: 1;
                }
            }
        }
        .back-to{
            position: absolute;
            right: 0;
            bottom: 3.1152648%;
            width: 100%;
            .line{
                display: block;
                width: 73px;
                height: 1px;
                background: #424242;
                margin: 0 auto 26px;
            }
            .to-top{
                display: block;
                &:hover{
                    i{
                        transform: translateY(-10px);
                    }
                }
                i{
                    display: block;
                    width: 37px;
                    height: 34px;
                    margin: 0 auto;
                    @include sprite($to-top);
                    transition: all ease 0.3s;
                }
                p{
                    margin-top: 16px;
                    text-align: center;
                    font-size: 14px;
                    color: #b2b3b3;
                }
            }
        }
    }
    // 媒体查询
    @media (max-width: 1680px) {
        
    }

    @media (max-width: 1550px) {
        .right-menu{
            transform: scaleX(0.83);
            transform-origin: right;
        }
        .menu-inner{
            transform: scaleY(0.83);
            transform-origin: right;
        }
    }

    @media (max-width: 1500px) {
        .right-menu{
            transform: scaleX(0.83);
            transform-origin: right;
        }
        .menu-inner{
            transform: scaleY(0.83);
            transform-origin: right;
        }
    }

    @media (max-width: 1440px) {
        .right-menu{
            transform: scaleX(0.8);
            transform-origin: right;
        }
        .menu-inner{
            transform: scaleY(0.8);
            transform-origin: right;
        }
    }

    @media (max-width: 1280px) {
        .right-menu{
            transform: scaleX(0.72);
            transform-origin: right;
        }
        .menu-inner{
            transform: scaleY(0.72);
            transform-origin: right;
        }
    }
    .hiddenAni{
        transform: translateX(100%);
    }
</style>
