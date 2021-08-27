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
            <a href="javascript:;" class="btn-subscribe" @click.prevent="showPublic">关注我们</a>
            <a :href="config.reserveLink" class="btn-reserve">{{config.reserveText}}</a>
        </div>
    </header>
</template>
<script>
export default {
    props: ['config'],
    methods: {
        showPublic(){
            let content = `
                <div class="public-code">
                    <img src="${this.config.publicSrc}" width="100%"/>
                </div>
            `;
            this.$modal({
                width: 508,
                title: '公众号',
                content
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/wap/css/mixin.scss';
.nav-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 750*$ppr;
    height: 95*$ppr;
    padding: 0 10*$ppr 0 136*$ppr;
    background: rgba(255,255,255,0.9);
    z-index: 999;
    .left{
        display: flex;
        .icon{
            position: absolute;
            left: 7*$ppr;
            top: 9*$ppr;
            width: 114*$ppr;
            height: 114*$ppr;
        }
        .info{
            h2{
                height: 40*$ppr;
                line-height: 40*$ppr;
                font-size: 32*$ppr;
                color: #141414;
            }
            p{
                height: 32*$ppr;
                line-height: 32*$ppr;
                font-size: 24*$ppr;
                color: #626161;
            }
        }
    }
    .right{
        display: flex;
        a{
            display: block;
            width: 149*$ppr;
            height: 63*$ppr;
            line-height: 63*$ppr;
            margin-right: 10*$ppr;
            border-radius: 10*$ppr;
            text-align: center;
            font-size: 22*$ppr;
            color: #f5f5f5;
            &.btn-subscribe{
                background: #cc5e36;
            }
            &.btn-reserve{
                background: #3970c6;
            }
        }
    }
}
</style>

