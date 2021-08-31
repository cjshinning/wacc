import Vue from 'vue';
import Index from '../../views/pc/index';
import '@babel/polyfill';
import VueLazyload from "vue-lazyload";
import Modal from '../../components/pc/modal/modal';

Vue.use(VueLazyload);
Vue.use(Modal);

new Vue({
    el:'#app',
    render: h=> h(Index)
})