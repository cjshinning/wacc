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
    <a href="./list.html" class="news-more"></a>
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
  @import './css/sprite.scss';
  @import '../../../assets/wap/css/mixin.scss';
  .news-wrap{
    position: relative;
    margin: 84px auto 0;
    width: 708px;
    height: 272px;
    .news-more{
      position: absolute;
      right: 0;
      bottom: 296px;
      width: 48px;
      height: 48px;
      @include sprite($news-more);
      z-index: 2;
      &:hover{
        color: #4085fa;
      }
    }
  }
  .swiper-container{
    width: 708px;
    height: 272px;
    overflow: visible;
    .swiper-wrapper{
      overflow: hidden;
    }
    .swiper-slide{
    width: 708px;
    height: 272px;
    }
  }
  .swiper{
    li{
      height: 68px;
      line-height: 68px;
      padding: 0 14px 0 24px;
      overflow: hidden;
      font-size: 22px;
      color: #afafaf;
      span{
        float: right;
        color: #747474;
      }
      a{
        color: #afafaf;
        text-decoration: none;
      }
    }
    /deep/ .swiper-pagination-bullets{
      width: 708px;
      height: 68px;
      border-bottom: 1px solid #a89371;
      left: 50%;
      bottom: 285px;
      transform: translateX(-50%);
      text-align: left;
    }
    /deep/ .swiper-pagination-bullet-custom {
      width: 132px;
      height: 68px;
      line-height: 68px;
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
        height: 68px;
        margin: 0 0px;
        @include sprite($news-cur);
        color: #fff;
      }
    }
  }
</style>
