import Vue from 'vue';
import Index from '../../../views/wap/index';
// import 'lib-flexible/flexible.js';
import store from '../../../vuex/wap/store';

import VueLazyload from "vue-lazyload";
import ModalM from '../../../components/wap/modal-m/modal-m';
import VueFullPage from 'vue-fullpage.js';
import VideoPlay from '../../../components/wap/video-play-m/video-play-m';

Vue.use(VueLazyload);
Vue.use(ModalM);
Vue.use(VueFullPage);
Vue.use(VideoPlay);

new Vue({
    el:'#app',
    store,
    render: h=> h(Index)
})