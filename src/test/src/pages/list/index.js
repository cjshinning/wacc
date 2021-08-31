import Vue from 'vue';
import List from '../../views/pc/list';
import '@babel/polyfill';

new Vue({
    el:'#app',
    render: h=> h(List)
})