import Vue from 'vue';
import List from '../../views/pc/list';
import '@babel/polyfill';
import VueLazyload from "vue-lazyload";
import Modal from '../../components/pc/modal/modal';
import VideoPlay from '../../components/pc/video-play/video-play';

Vue.use(VueLazyload);
Vue.use(Modal);
Vue.use(VideoPlay);

new Vue({
    el:'#app',
    render: h=> h(List)
})