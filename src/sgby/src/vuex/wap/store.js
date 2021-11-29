import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        ifMenu: false,
        count: 0
    },
    mutations: {
        toggleMenu(state){
            state.ifMenu = !state.ifMenu;
        },
        increment (state) {
            state.count++;
        }
    },
    actions: {
        incrementAsync({commit}){
            setTimeout(() => {
                commit('increment');
            }, 1000)
        }
    }
})

export default store;