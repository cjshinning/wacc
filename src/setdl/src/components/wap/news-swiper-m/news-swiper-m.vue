<template>
  <div class="news-wrap">
    <swiper class="swiper" ref="newsSwiper" :options="swiperOptions" @slideChange="slideChange">
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.zonghe" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <a :href="articleLink(item.ID)">{{item.TITLE}}</a>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.xinwen" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <a :href="articleLink(item.ID)">{{item.TITLE}}</a>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.huodong" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <a :href="articleLink(item.ID)">{{item.TITLE}}</a>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.gonglue" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <a :href="articleLink(item.ID)">{{item.TITLE}}</a>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <a href="./list.html" class="news-more">更多+</a>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css';
  export default {
    name: 'newsSwiper',
    props: ['news'],
    data() {
      return {
        cate: 'xinwen',
        swiperOptions: {
          effect : 'fade',
          fadeEffect: {
            crossFade: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              var tabs = ['综合', '新闻', '活动', '攻略'];
              return `<span class='${className} swiper-pagination-bullet-custom'>${tabs[index]}</span>`
            }
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.newsSwiper.swiper;
      },
      articleLink(){
        return function(id){
          return `./article.html?cate=${this.cate}&id=${id}`
        }
      }
    },
    methods: {
      slideChange(){
        let activeIndex = this.swiper.activeIndex;
        switch(activeIndex){
          case 2:
            this.cate = 'huodong';
            break;
          case 3:
            this.cate = 'gonglue';
            break;
          default:
            this.cate = 'xinwen';
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../assets/wap/css/mixin.scss';
  .news-wrap{
    position: relative;
    margin: 104px auto 0;
    width: 654px;
    height: 420px;
    .news-more{
      position: absolute;
      right: 0;
      bottom: 428px;
      width: 120px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      text-decoration: none;
      font-size: 22px;
      color: #676767;
      z-index: 2;
      &:hover{
        color: #4085fa;
      }
    }
  }
  .swiper-container{
    width: 654px;
    height: 420px;
    overflow: visible;
    .swiper-wrapper{
      overflow: hidden;
    }
    .swiper-slide{
      width: 654px;
      height: 420px;
    }
  }
  .swiper{
    li{
      height: 83px;
      line-height: 83px;
      border-bottom: 1px dashed #676767;
      overflow: hidden;
      font-size: 24px;
      color: #676767;
      &:last-child{
        border-bottom: 0px;
      }
      span{
        float: right;
      }
      a{
        color: #676767;
        text-decoration: none;
        &:hover{
          color: #3272f8;
        }
      }
    }
    /deep/ .swiper-pagination-bullets{
      width: 654px;
      height: 48px;
      border-bottom: 1px solid #4085fa;
      left: 50%;
      bottom: 428px;
      transform: translateX(-50%);
      text-align: left;
    }
    /deep/ .swiper-pagination-bullet-custom {
      width: 132px;
      height: 48px;
      line-height: 48px;
      margin: 0;
      border-radius: 0;
      opacity: 1;
      background: none;
      color: #676767;
      text-align: center;
      user-select: none;
      font-size: 26px;
      &:focus{
        outline: none;
      }
      &.swiper-pagination-bullet-active {
        opacity: 1;
        width: 110px;
        height: 48px;
        margin: 0 0px;
        background: #4085fa;
        color: #fff;
      }
    }
  }
</style>
