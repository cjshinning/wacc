<template>
    <div class="download-left">
        <div class="download-inner">
            <a href="javascript:;" class="logo"></a>
            <div class="line-1"></div>
            <div class="tit tit1">
                <p>扫一扫下载游戏</p>
            </div>
            <div class="qrcode qrcode1">
                <div class="code-line"></div>
                <img v-lazy="config.qrcodeDownload" alt="">
            </div>
            <a href="javascript:;" class="btn-ios" @click="showWaiting(config.appLink, false)">ios下载</a>
            <a href="javascript:;" class="btn-android" @click="showWaiting(config.androidLink, false)">安卓下载</a>
            <a href="javascript:;" class="btn-desk" @click="showWaiting(config.deskLink, false)"></a>
            <div class="line-2"></div>
            <div class="tit tit2">
                <p>关注微信公众号</p>
            </div>
            <div class="qrcode qrcode2">
                <div class="code-line"></div>
                <img v-lazy="config.qrcodeOfficial" alt="">
            </div>
            <div class="qr">
                <a href="javascript:;" class="qr-douyin" @click="showQr('抖音', config.qrcodeDouyin)"></a>
                <a href="javascript:;" class="qr-kuaishou" @click="showQr('快手', config.qrcodeKuaishou)"></a>
                <a href="javascript:;" class="qr-weibo" @click="showQr('微博', config.qrcodeWeibo)"></a>
            </div>
        </div>
    </div>
</template>
<script>
import mixin from '../../../assets/pc/js/mixin.js';
export default {
    props: ['config'],
    mixins: [mixin],
    data(){
        return {
        }
    },
    methods: {
        showQr(title, src){
            let content = `
                <div class="qr-code">
                    <img src="${src}" width="134"/>
                    <p>扫一扫关注${title}官方帐号</p>
                </div>
            `;
            this.$modal({
                width: 360,
                title: `关注${title}`,
                scroll: false,
                content
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './css/sprite.scss';
    @mixin center{
        position: absolute;
        left: 50%;
        top: 50%;
    }
    // 动画
    @keyframes swing{
        0%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(120px);
        }
        100%{
            transform: translateY(0);
        }
    }
    .download-left{
        position: absolute;
        left: 0;
        top: 0px;
        bottom: 0px;
        width: 202px;
        height: 100%;
        background: url('./img/sider-bg.png') center repeat-y;
        .download-inner{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .logo{
            @include center;
            margin-top: -435px;
            margin-left: -81px;
            display: block;
            width: 162px;
            height: 78px;
            @include sprite($logo);
        }
        .line-1, .line-2{
            @include center();
            margin-left: -78px;
            width: 157px;
            height: 5px;
            @include sprite($split-line);
        }
        .line-1{
            margin-top: -344px;
        }
        .line-2{
            margin-top: 148px;
        }
        .tit{
            @include center();
            margin-left: -80px;
            width: 160px;
            height: 15px;
            @include sprite($download-tit);
            p{
                position: relative;
                top: -1px;
                line-height: 16px;
                font-size: 16px;
                text-align: center;
                color: #caa264;
            }
        }
        .tit1{
            margin-top: -313px;
        }
        .tit2{
            margin-top: 179px;
        }
        .qrcode{
            @include center();
            margin-left: -78px;
            width: 156px;
            height: 153px;
            @include sprite($download-qrcode);
            img{
                width: 134px;
                height: 134px;
                margin: 10px 11px 9px;
            }
        }
        .qrcode1{
            margin-top: -284px;
        }
        .qrcode2{
            margin-top: 212px;
        }
        .code-line{
            position: absolute;
            left: 10px;
            top: 11px;
            width: 138px;
            height: 13px;
            @include sprite($code-line);
            animation: swing linear 4s infinite;
        }
        .btn-ios, .btn-android{
            display: block;
            @include center();
            margin-left: -78px;
            width: 156px;
            height: 48px;
            text-indent: -99999px;
        }
        .btn-ios{
            margin-top: -113px;
            @include sprite($btn-ios);
            &:hover{
                @include sprite($btn-ios-h);
            }
        }
        .btn-android{
            margin-top: -56px;
            @include sprite($btn-android);
            &:hover{
                @include sprite($btn-android-h);
            }
        }
        .btn-desk{
            display: block;
            @include center();
            margin-top: 2px;
            margin-left: -78px;
            width: 156px;
            height: 123px;
            @include sprite($btn-desk);
            &:hover{
                @include sprite($btn-desk-h);
            }
        }
        .qr{
            @include center();
            margin: 386px;
            margin-left: -75px;
            width: 150px;
            a{
                display: inline-block;
                width: 44px;
                height: 44px;
                // margin: 0 3px;
                &.qr-douyin{
                    @include sprite($qr-douyin);
                }
                &.qr-kuaishou{
                    @include sprite($qr-kuaishou);
                }
                &.qr-weibo{
                    @include sprite($qr-weibo);
                }
            }
        }
    }

    // 媒体查询
    @media (max-width: 1680px) {
        
    }

    @media (max-width: 1550px) {
        .download-left{
            transform: scaleX(0.83);
            transform-origin: left;
        }
        .download-inner{
            transform: scaleY(0.83);
            transform-origin: left;
        }
    }

    @media (max-width: 1500px) {
        .download-left{
            transform: scaleX(0.83);
            transform-origin: left;
        }
        .download-inner{
            transform: scaleY(0.83);
            transform-origin: left;
        }
    }

    @media (max-width: 1440px) {
        .download-left{
            transform: scaleX(0.83);
            transform-origin: left;
        }
        .download-inner{
            transform: scaleY(0.8);
            transform-origin: left;
        }
    }

    @media (max-width: 1280px) {
        .download-left{
            transform: scaleX(0.72);
            transform-origin: left;
        }
        .download-inner{
            transform: scaleY(0.72);
            transform-origin: left;
        }
    }
</style>
