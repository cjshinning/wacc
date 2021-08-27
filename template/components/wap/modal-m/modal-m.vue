<template>
    <div :class="['modal', className]">
        <div class="modal-mask"></div>
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title" v-html="title"></div>
                <a href="javascript:;" class="modal-close" @click.prevent="closeCb()"></a>
            </div>
            <div class="modal-body" v-html="content" :style="{ width: width/75 + 'rem', height: height === 'auto' ? height : height/75 + 'rem'}"></div>
            <div class="modal-footer">
                <template v-for="(item,index) in buttons">
                    <a href="javascript:;" class="modal-btn" :key="index" @click.prevent="buttonCb[index]()">{{item.text}}</a>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modal-m'
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
@import '../../../assets/wap/css/mixin.scss';
.modal{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    box-sizing: border-box;
}
.modal-mask{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
}
.modal-content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    // width: 628*$ppr;
}
.modal-header{
    position: relative;
    width: 100%;
    height: 117*$ppr;
    @include sprite($modal-header);
    .modal-title{
        padding: 71*$ppr 93*$ppr 0;
        line-height: 36*$ppr;
        text-align: center;
        font-size: 30*$ppr;
        font-weight: bold;
        color: #fff;
    }
    .modal-close{
        display: block;
        position: absolute;
        right: 22*$ppr;
        top: 21*$ppr;
        width: 55*$ppr;
        height: 55*$ppr;
        @include sprite($modal-close);
        &:hover{
            @include sprite($modal-close-hover);
        }
    }
}
.modal-body{
    position: relative;
    width: 508*$ppr;
    background: url('./img/modal-body.png') top center repeat-y;
    background-size: 100% auto;
    padding: 12*$ppr 60*$ppr;
    margin: -2*$ppr 0;
    font-size: 18*$ppr;
    text-align: center;
    line-height: 36*$ppr;
    color: #594f48;
    // &::before{
    //     content: '';
    //     display: block;
    //     position: absolute;
    //     left: 0;
    //     top: -10*$ppr;
    //     width: 628*$ppr;
    //     height: 20*$ppr;
    //     background: url('./img/modal-body.png') no-repeat;
    //     background-size: cover;
    // }
    // &::after{
    //     content: '';
    //     display: block;
    //     position: absolute;
    //     left: 0;
    //     bottom: -10*$ppr;
    //     width: 628*$ppr;
    //     height: 20*$ppr;
    //     background: url('./img/modal-body.png') no-repeat;
    //     background-size: cover;
    // }
}
.modal-footer{
    width: 100%;
    height: 176*$ppr;
    @include sprite($modal-footer);
    text-align: center;
    a{
        display: inline-block;
        width: 255*$ppr;
        height: 73*$ppr;
        margin: 10*$ppr;
        @include sprite($modal-btn);
        text-decoration: none;
        font-size: 30*$ppr;
        text-align: center;
        line-height: 73*$ppr;
        color: #fff;
    }
}
</style>

