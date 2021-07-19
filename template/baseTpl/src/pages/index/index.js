import Vue from 'vue';
import Index from '../../views/index';
import '@babel/polyfill';

new Vue({
    el:'#app',
    render: h=> h(Index)
})