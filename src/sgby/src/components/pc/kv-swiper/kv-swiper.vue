<template>
    <swiper class="swiper" ref="kvwiper" :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="(item,index) in config.imgs" :key="index">
            <a v-if="config.links[index] && config.links!=='javascript:;'" :href="config.links[index]" target="_blank">
                <img v-lazy="item" width="476" height="536" alt="">
            </a>
            <a v-else href="javascript:;" style="cursor:default;">
                <img v-lazy="item" width="476" height="536" alt="">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    export default {
        name: 'kvSwiper',
        props: ['config'],
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            showSwiper(){
                return this.config.imgs;
            },
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    @import './css/sprite.scss';
    .swiper-container{
        width: 476px;
        height: 536px;
        overflow: hidden;
        .swiper-slide{
            width: 476px;
            height: 536px;
            a{
                display: block;
            }
        }
    }
    .swiper {
        /deep/ .swiper-pagination-bullets{
            right: 15px;
            left: auto;
            bottom: 24px;
            text-align: right;
        }
        /deep/ .swiper-pagination-bullet{
            width: 25px;
            height: 25px;
            border-radius: 0;
            // background: url('./img/kv-bullet.png') no-repeat;
            background: none;
            @include sprite($kv-bullet);
            margin: 0 16px;
            opacity: 1;
        }
        /deep/ .swiper-pagination-bullet-active{
            // background: url('./img/kv-bullet-h.png') no-repeat;
            background: none;
            @include sprite($kv-bullet-h);
        }
  }
</style>
