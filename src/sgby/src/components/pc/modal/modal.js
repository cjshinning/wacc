/**
 * 弹窗
 */
import Vue from 'vue';
import modalComponent from './modal.vue';
const modalConstructor = Vue.extend(modalComponent);

class Modal {
    constructor(obj) {
        // debugger;
        let that = this;
        const defaultObj = {
            width: 508,
            height: 'auto',
            className: '',
            title: '温馨提示',
            content: '',
            scroll: true,
            buttons: [{
                text: '确定',
                callback() {
                    that.hide();
                }
            }]
        }
        const paramObj = Object.assign(defaultObj, obj);
        this.modal = new modalConstructor({
            el: document.createElement('div'),
            data() {
                return paramObj;
            },
            methods: {
                closeCb() {
                    that.hide();
                }
            },
            computed: {
                buttonCb() {
                    return this.buttons.map(button => {
                        return button.callback && button.callback.bind(that);
                    })
                }
            }
        })
    }
    show() {
        if (!this.modal.scroll) {
            fullpage_api && fullpage_api.setAllowScrolling(false);
        }
        document.body.appendChild(this.modal.$el);
    }
    hide() {
        if (!this.modal.scroll) {
            fullpage_api && fullpage_api.setAllowScrolling(true);
        }
        document.body.removeChild(this.modal.$el);
    }
}

function $modal(obj = {}) {
    new Modal(obj).show();
}

export default {
    install() {
        Vue.prototype.$modal = $modal;
    }
};