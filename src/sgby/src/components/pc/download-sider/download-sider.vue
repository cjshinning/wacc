<template>
    <div class="download-sider">
        <div class="qr-code">
            <img v-lazy="download.qrcode" width="100%" alt="">
        </div>
        <div class="qr-tip">扫一扫 下载游戏</div>
        <div class="download-btns">
            <a href="javascript:;" class="btn-android" @click="showWaiting(download.androidLink)">安卓下载</a>
            <a href="javascript:;" class="btn-ios" @click="showWaiting(download.appLink)">ios下载</a>
        </div>
    </div>
</template>
<script>
import mixin from '../../../assets/pc/js/mixin.js';
export default {
    props: ['download'],
    mixins: [mixin],
    data(){
        return{
        }
    }
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
.download-sider{
    float: left;
    width: 292px;
    height: 469px;
    @include sprite($sider-bg);
    margin-right: 10px;
    .qr-code{
        width: 160px;
        height: 160px;
        margin: 30px auto 0;
    }
    .qr-tip{
        margin-top: 10px;
        text-align: center;
        line-height: 24px;
        font-size: 16px;
        color: #6c6c6c;
    }
    .download-btns{
        width: 238px;
        margin: 40px auto 0;
        a{
            display: block;
            width: 241px;
            height: 73px;
            margin-top: 14px;
            text-indent: -9999px;
        }
        .btn-android{
            @include sprite($btn-android);
            &:hover{
                @include sprite($btn-android-h);
            }
        }
        .btn-ios{
            @include sprite($btn-ios);
            &:hover{
                @include sprite($btn-ios-h);
            }
        }
    }
}
</style>

