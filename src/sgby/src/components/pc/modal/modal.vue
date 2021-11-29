<template>
    <div :class="['modal', className]">
        <div class="modal-mask"></div>
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title" v-html="title"></div>
                <a href="javascript:;" class="modal-close" @click.prevent="closeCb()"></a>
            </div>
            <div class="modal-body" v-html="content" :style="{ width: width + 'px', height: height === 'auto' ? height : height + 'px'}"></div>
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
    name: 'modal'
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
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
    background: rgba(0,0,0,0.8);
}
.modal-content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.modal-header{
    position: relative;
    width: 100%;
    height: 62px;
    @include sprite($modal-header);
    .modal-title{
        padding: 6px 100px 0;
        line-height: 56px;
        text-align: center;
        font-size: 24px;
        color: #d0a96c;
    }
    .modal-close{
        display: block;
        position: absolute;
        right: 24px;
        top: 19px;
        width: 32px;
        height: 32px;
        @include sprite($modal-close);
        &:hover{
            // @include sprite($modal-close-hover);
        }
    }
}
.modal-body{
    position: relative;
    width: 360px;
    background: url('./img/modal-body.png') top center repeat-y;
    padding: 12px 45px;
    margin: -2px 0;
    font-size: 14px;
    text-align: center;
    line-height: 22px;
    color: #8c8c8c;
    // &::before{
    //     content: '';
    //     display: block;
    //     position: absolute;
    //     left: 0;
    //     top: -10px;
    //     width: 628px;
    //     height: 20px;
    //     background: url('./img/modal-body.png') no-repeat;
    // }
    // &::after{
    //     content: '';
    //     display: block;
    //     position: absolute;
    //     left: 0;
    //     bottom: -10px;
    //     width: 628px;
    //     height: 20px;
    //     background: url('./img/modal-body.png') no-repeat;
    // }
}
.modal-footer{
    width: 100%;
    height: 176px;
    @include sprite($modal-footer);
    text-align: center;
    a{
        display: inline-block;
        width: 186px;
        height: 50px;
        margin: 10px;
        @include sprite($modal-btn);
        text-decoration: none;
        font-size: 24px;
        text-align: center;
        line-height: 46px;
        color: #fff8ae;
    }
}
</style>

