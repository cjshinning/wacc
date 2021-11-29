<template>
    <div class="download">
        <a href="javascript:;" class="btn-download" @click="showWaiting(config.downloadLink)">立即下载</a>
    </div>
</template>
<script>
import mixin from '../../../assets/wap/js/mixin.js';
export default {
    props: ['config'],
    mixins: [mixin],
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
.download{
    position: absolute;
    left: 50%;
    margin-left: -165.5px;
    top: 1082px;
    width: 339px;
    height: 126px;
    .btn-download{
        display: block;
        width: 339px;
        height: 126px;
        text-indent: -9999px;
        background: url('./img/btn-download.png') no-repeat;
        background-size: cover;
    }
}
</style>

