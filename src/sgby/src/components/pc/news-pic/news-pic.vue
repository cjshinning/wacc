<template>
    <div class="new-pic">
        <ul>
            <li v-for="(item, index) in config.imgs" :key="index">
                <a v-if="config.links[index] && config.links!=='javascript:;'" :href="config.links[index]" target="_blank">
                    <img v-lazy="item" width="237" height="147" alt="">
                </a>
                <a v-else href="javascript:;" style="cursor:default;">
                    <img v-lazy="item" width="237" height="147" alt="">
                </a>
                <span>{{config.text[index]}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['config'],
    computed: {
        showNewsPic(){
            return this.config.imgs;
        }
    }
}
</script>
<style lang="scss" scoped>
.new-pic{
    position: absolute;
    right: 1px;
    top: 168px;
    width: 711px;
    overflow: hidden;
    li{
        position: relative;
        float: left;
        width: 237px;
        height: 147px;
        span{
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 33px;
            line-height: 33px;
            background: rgba(0,0,0,0.7);
            text-align: center;
            font-size: 14px;
            color: #eaca85;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>

