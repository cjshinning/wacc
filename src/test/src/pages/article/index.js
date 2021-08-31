import Vue from 'vue';
import Article from '../../views/pc/article';
import '@babel/polyfill';

new Vue({
    el:'#app',
    render: h=> h(Article)
})