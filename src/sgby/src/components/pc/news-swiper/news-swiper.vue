<template>
  <div class="news-wrap">
    <swiper class="swiper" ref="newsSwiper" :options="swiperOptions" @slideChange="slideChange">
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.zonghe" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <a :href="articleLink(item.ID)" target="_blank">{{item.TITLE}}</a>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.xinwen" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <a :href="articleLink(item.ID)" target="_blank">{{item.TITLE}}</a>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.huodong" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <a :href="articleLink(item.ID)" target="_blank">{{item.TITLE}}</a>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.gonglue" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <a :href="articleLink(item.ID)" target="_blank">{{item.TITLE}}</a>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <a :href="listLink" target="_blank" class="news-more">更多+</a>
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
      listLink(){
        return `./list.html?cate=${this.cate}&page=1`;
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
  .news-wrap{
    position: absolute;
    right: 0px;
    top: 396px;
    width: 660px;
    height: 264px;
    padding: 18px 20px 26px 32px;
    background: rgba(0,0,0,0.3);
    .news-more{
      position: absolute;
      right: 0;
      bottom: 416px;
      width: 110px;
      height: 40px;
      line-height: 40px;
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
    width: 660px;
    height: 264px;
    overflow: visible;
    .swiper-wrapper{
      overflow: hidden;
    }
    .swiper-slide{
      width: 660px;
      height: 264px;
    }
  }
  .swiper{
    li{
      height: 43px;
      line-height: 43px;
      border-bottom: 1px solid #000;
      overflow: hidden;
      font-size: 16px;
      color: #dfdfdf;
      &:last-child{
        border-bottom: 0px;
      }
      span{
        float: right;
      }
      a{
        color: #dfdfdf;
        text-decoration: none;
        &:hover{
          color: #eaca85;
        }
      }
    }
    /deep/ .swiper-pagination-bullets{
      width: 712px;
      height: 50px;
      border-bottom: 1px solid #a89371;
      background: rgba(0,0,0,.25);
      left: 50%;
      bottom: 308px;
      transform: translateX(-50%);
      text-align: left;
    }
    /deep/ .swiper-pagination-bullet-custom {
      width: 108px;
      height: 50px;
      line-height: 50px;
      margin: 0;
      border-radius: 0;
      opacity: 1;
      background: none;
      color: #a8a8a8;
      text-align: center;
      user-select: none;
      font-size: 16px;
      &:focus{
        outline: none;
      }
      &.swiper-pagination-bullet-active {
        opacity: 1;
        width: 108px;
        height: 50px;
        margin: 0 0px;
        background: #4085fa;
        color: #eabc85;
      }
    }
  }
</style>
