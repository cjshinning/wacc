<template>
    <div class="menu-pop">
        <ul id="menu">
            <li v-for="(item,index) in menus" :data-menuanchor="menuanchor(index)">
                <a :href="page(index)" @click="hideMenu">{{item}}</a>
            </li>
        </ul>
        <a href="javascript:;" class="btn-close" @click="hideMenu"></a>
    </div>
</template>
<script>
export default {
    data(){
        return{
            menus: [
                '官网·首页',
                '游戏·资讯',
                '游戏·攻略',
                '武将·库',
                '游戏·特色',
                '关注·我们'
            ]
        }
    },
    computed: {
        menuanchor(){
            return function(index){
                return `page${index+1}`;
            }
        },
        page(index){
            return function(index){
                return `#page${index+1}`;
            }
        }
    },
    methods: {
        hideMenu(){
            this.$store.commit('toggleMenu');
            fullpage_api && fullpage_api.setAllowScrolling(true);
        }
    }
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
@import '../../../assets/wap/css/mixin.scss';
.menu-pop{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('./img/menu-pop-bg.png') no-repeat top center;
    background-size: cover;
    z-index: 9999;
    ul{
        padding-top: 224px;
        li{
            width: 186px;
            height: 76px;
            margin: 0 auto 100px;
            &:nth-child(1){
                @include sprite($menu-1);
            }
            &:nth-child(2){
                @include sprite($menu-2);
            }
            &:nth-child(3){
                @include sprite($menu-3);
            }
            &:nth-child(4){
                @include sprite($menu-4);
            }
            &:nth-child(5){
                @include sprite($menu-5);
            }
            &:nth-child(6){
                @include sprite($menu-6);
            }
            a{
                display: block;
                width: 186px;
                height: 76px;
                text-indent: -99999px;
            }
        }
    }
    .btn-close{
        display: block;
        position: absolute;
        left: 50%;
        top: 22px;
        transform: translateX(-50%);
        width: 114px;
        height: 114px;
        @include sprite($btn-close);
    }
}
</style>

