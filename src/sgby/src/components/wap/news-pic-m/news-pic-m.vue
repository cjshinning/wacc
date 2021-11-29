<template>
    <div class="new-pic">
        <ul>
            <li v-for="(item, index) in config.imgs" :key="index">
                <a v-if="config.links[index] && config.links!=='javascript:;'" :href="config.links[index]">
                    <img v-lazy="item" width="100%" alt="">
                </a>
                <a v-else href="javascript:;" style="cursor:default;">
                    <img v-lazy="item" width="100%" alt="">
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
    margin: 30px auto 0;
    width: 706px;
    height: 147px;
    overflow: hidden;
    ul{
        display: flex;
        justify-content: space-between;
    }
    li{
        position: relative;
        width: 351px;
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
            font-size: 20px;
            color: #eaca85;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>

