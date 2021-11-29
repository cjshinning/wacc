
const mixin = {
    methods: {
        showWaiting(link, scroll){
            if(!link){
                this.$modal({
                    width: 360,
                    height: 100,
                    scroll,
                    content: '敬请期待'
                });
            }else{
                window.open(link);
            }
        }
    }
}

export default mixin;