<template>
    <div class="role-pop">
        <header class="role-nav">
            <h3>{{config.title}}</h3>
            <a href="javascript:;" class="back" @click="close">返回</a>
        </header>
        <div class="role-main">
            <img :src="config.roleImg" width="100%" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props: ['config'],
    methods: {
        close(){
            this.$emit('hide');
        }
    }
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
@import '../../../assets/wap/css/mixin.scss';
.role-pop{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 9999;
    .role-nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 750px;
        height: 95px;
        padding: 0 32px;
        background: #171819;
        z-index: 2;
        h3{
            position: relative;
            padding-left: 38px;
            font-size: 30px;
            color: #eabc85;
            &::before{
                display: block;
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                @include sprite($ico-calendar);
            }
        }
        .back{
            position: relative;
            padding-left: 48px;
            font-size: 24px;
            color: #eabc85;
            &::before{
                display: block;
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                @include sprite($ico-back);
            }
        }
    }
    .role-main{
        position: absolute;
        left: 0;
        height: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
}
</style>
