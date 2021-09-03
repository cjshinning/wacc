import Vue from 'vue';
import Index from '../../../views/wap/index';
// import 'lib-flexible/flexible.js';

import VueLazyload from "vue-lazyload";
import ModalM from '../../../components/wap/modal-m/modal-m';

Vue.use(VueLazyload);
Vue.use(ModalM);

new Vue({
    el:'#app',
    render: h=> h(Index)
})