<template>
    <header class="nav-head">
        <div class="left">
            <a href="javascript:;" class="icon">
                <img :src="config.iconSrc" width="100%" alt="">
            </a>
            <div class="info">
                <h2>{{ config.title }}</h2>
                <p>{{ config.desc }}</p>
            </div>
        </div>
        <div class="right">
            <a href="javascript:;" class="btn-subscribe" @click.prevent="showPublic"></a>
            <a href="javascript:;" class="btn-nav" @click="showMenu"></a>
        </div>
    </header>
</template>
<script>
export default {
    props: ['config'],
    methods: {
        showPublic(){
            let content = `
                <div class="qr-code">
                    <img src="${this.config.publicSrc}" width="225"/>
                    <p>扫一扫关注公众号</p>
                </div>
            `;
            this.$modal({
                width: 460,
                title: '关注公众号',
                content
            })
        },
        showMenu(){
            this.$store.commit('toggleMenu');
            fullpage_api && fullpage_api.setAllowScrolling(false);
        }
    }
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
@import '../../../assets/wap/css/mixin.scss';
.nav-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 750px;
    height: 95px;
    padding: 0 10px 0 158px;
    background: rgba(21,22,24,0.9);
    z-index: 999;
    .left{
        display: flex;
        .icon{
            position: absolute;
            left: 19px;
            top: 10px;
            width: 128px;
            height: 128px;
        }
        .info{
            h2{
                height: 40px;
                line-height: 40px;
                font-size: 32px;
                color: #fff;
            }
            p{
                height: 32px;
                line-height: 32px;
                font-size: 24px;
                color: #fff;
            }
        }
    }
    .right{
        display: flex;
        align-items: center;
        .btn-subscribe{
            display: block;
            width: 171px;
            height: 71px;
            margin-right: 6px;
            @include sprite($btn-subscribe);
        }
        .btn-nav{
            display: block;
            width: 62px;
            height: 43px;
            margin-right: 6px;
            @include sprite($btn-nav);
        }
    }
}
</style>

