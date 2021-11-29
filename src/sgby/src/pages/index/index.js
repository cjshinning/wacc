import Vue from 'vue';
import Index from '../../views/pc/index';
import '@babel/polyfill';
import VueFullPage from 'vue-fullpage.js';
import VueLazyload from "vue-lazyload";
import Modal from '../../components/pc/modal/modal.js';
import VideoPlay from '../../components/pc/video-play/video-play';

Vue.use(VueFullPage);
Vue.use(VueLazyload);
Vue.use(Modal);
Vue.use(VideoPlay);

new Vue({
    el:'#app',
    render: h=> h(Index)
})