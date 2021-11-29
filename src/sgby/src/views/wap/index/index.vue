<template>
    <div class="container">
         <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section section1">
                <!-- <div class="kv">
                    <a v-if="topImg.links && topImg.links!=='javascript:;'" :href="topImg.link">
                        <img :src="topImg.img" width="100%" alt="">
                    </a>
                    <a v-else href="javascript:;">
                        <img :src="topImg.img" width="100%" alt="">
                    </a>
                </div> -->
                <canvas id="video" v-show="videoShow"></canvas>
                <download-m :config="downloadConfig"></download-m>
                <a href="javascript:;" class="gamesite-tip16" @click="showTip16()" :style="{top: tip16Config.index_top&&tip16Config.index_top+'px', left: tip16Config.index_left&&tip16Config.index_left+'px', backgroundImage: `url(${tip16Config.index_img}`}"></a>
            </div>
            <div class="section section2">
                <div class="title">
                    <h2>游戏资讯</h2>
                </div>
                <div class="kv-wrap">
                    <kv-swiper-m :config="kvConfig"></kv-swiper-m>
                </div>
                <news-pic-m :config="picConfig"></news-pic-m>
                <div class="new-cont">
                    <news-swiper-m :news="indexNews"></news-swiper-m>
                </div>
            </div>
            <div class="section section3">
                <div class="title">
                    <h2>游戏攻略</h2>
                </div>
                <div class="raiders">
                    <ul>
                        <li>
                            <a class="pic" :href="raidersPic.links[0]" target="_blank">
                                <img v-lazy="raidersPic.imgs[0]" width="100%" alt="">
                                <span>{{raidersPic.text[0]}}<i></i></span>
                            </a>
                        </li>
                        <li>
                            <dl class="txt">
                                <dt>技能搭配</dt>
                                <dd v-for="(item,index) in raidersList1.links" v-if="index < 5">
                                    <a :href="item" target="_blank">{{raidersList1.text[index]}}</a>
                                </dd>
                                <dd v-if="raidersList1.links.length >= 5">
                                    <a href="#" target="_blank">更多<i></i></a>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl class="txt">
                                <dt>萌新科普</dt>
                                <dd v-for="(item,index) in raidersList2.links" v-if="index < 5">
                                    <a :href="item" target="_blank">{{raidersList2.text[index]}}</a>
                                </dd>
                                <dd v-if="raidersList2.links.length >= 5">
                                    <a href="#" target="_blank">更多<i></i></a>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <a class="pic" :href="raidersPic.links[1]" target="_blank">
                                <img v-lazy="raidersPic.imgs[1]" width="100%" alt="">
                                <span>{{raidersPic.text[1]}}<i></i></span>
                            </a>
                        </li>
                        <li>
                            <a class="pic" :href="raidersPic.links[2]" target="_blank">
                                <img v-lazy="raidersPic.imgs[2]" width="100%" alt="">
                                <span>{{raidersPic.text[2]}}<i></i></span>
                            </a>
                        </li>
                        <li>
                            <dl class="txt">
                                <dt>更多攻略</dt>
                                <dd v-for="(item,index) in raidersList3.links" v-if="index < 5">
                                    <a :href="item" target="_blank">{{raidersList3.text[index]}}</a>
                                </dd>
                                <dd v-if="raidersList3.links.length >= 5">
                                    <a href="#" target="_blank">更多<i></i></a>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                    <a :href="radersLink" target="_blank" class="btn-raders"></a>
                </div>
            </div>
            <div class="section section4">
                <div class="title">
                    <h2>武将库</h2>
                </div>
                <div class="role-container">
                    <div class="role-tab">
                        <a href="javascript:;" :class="{active: roleCur==index}" v-for="(item,index) in roleTab" :key="index" @click="roleCur=index">{{item}}</a>
                    </div>
                    <div class="role-pannel">
                        <div class="pannel" v-show="roleCur==0">
                            <div class="military-tab">
                                <a href="javascript:;" :class="{active: militaryCur==index}" v-for="(item,index) in militaryTab" :key="index" @click="militaryCur=index">{{item}}</a>
                            </div>
                            <div class="military-pan">
                                <div class="pan" v-for="(item,index) in militaryTab" :key="index" v-show="militaryCur==index">
                                    <ul v-if="index==0">
                                        <li v-for="(item,index) in militaryWeiConfig.thumbnails">
                                            <div class="pic" @click="showRole('武将详情', militaryWeiConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{militaryWeiConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                    <ul v-if="index==1">
                                        <li v-for="(item,index) in militaryShuConfig.thumbnails">
                                            <div class="pic" @click="showRole('武将详情', militaryShuConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{militaryShuConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                    <ul v-if="index==2">
                                        <li v-for="(item,index) in militaryWuConfig.thumbnails">
                                            <div class="pic" @click="showRole('武将详情', militaryWuConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{militaryWuConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                    <ul v-if="index==3">
                                        <li v-for="(item,index) in militaryQunConfig.thumbnails">
                                            <div class="pic" @click="showRole('武将详情', militaryQunConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{militaryQunConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="pannel" v-show="roleCur==1">
                            <div class="military-tab">
                                <a href="javascript:;" :class="{active: skillCur==index}" v-for="(item,index) in skillTab" :key="index" @click="skillCur=index">{{item}}</a>
                            </div>
                            <div class="military-pan">
                                <div class="pan" v-for="(item,index) in skillTab" :key="index" v-show="skillCur==index">
                                    <ul v-if="index==0">
                                        <li v-for="(item,index) in skillYingxiongConfig.thumbnails">
                                            <div class="pic" @click="showRole('技能详情', skillYingxiongConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{skillYingxiongConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                    <ul v-if="index==1">
                                        <li v-for="(item,index) in skillBubingConfig.thumbnails">
                                            <div class="pic" @click="showRole('技能详情', skillBubingConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{skillBubingConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                    <ul v-if="index==2">
                                        <li v-for="(item,index) in skillShushiConfig.thumbnails">
                                            <div class="pic" @click="showRole('技能详情', skillShushiConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{skillShushiConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                    <ul v-if="index==3">
                                        <li v-for="(item,index) in skillQibingConfig.thumbnails">
                                            <div class="pic" @click="showRole('技能详情', skillQibingConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{skillQibingConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                    <ul v-if="index==4">
                                        <li v-for="(item,index) in skillGongbingConfig.thumbnails">
                                            <div class="pic" @click="showRole('技能详情', skillGongbingConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{skillGongbingConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                    <ul v-if="index==5">
                                        <li v-for="(item,index) in skillFuzhuConfig.thumbnails">
                                            <div class="pic" @click="showRole('技能详情', skillFuzhuConfig.imgs[index])">
                                                <img v-lazy="item" width="100%" alt="">
                                            </div>
                                            <p class="txt">{{skillFuzhuConfig.text[index]}}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section section5">
                <div class="title">
                    <h2>游戏特色</h2>
                </div>
                <div class="feature-container">
                    <div class="feature-tab">
                        <a href="javascript:;" :class="{active: featureCur==index}" v-for="(item,index) in featureTab" :key="index" @click="featureCur=index">{{item}}</a>
                    </div>
                    <div class="feature-pannel">
                        <div class="pannel" v-if="featureCur==0">
                            <feature-swiper-m :config="feturePicConfig"></feature-swiper-m>
                        </div>
                        <div class="pannel" v-if="featureCur==1">
                            <video-swiper-m :config="fetureVideoConfig"></video-swiper-m>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section section6">
                <div class="title">
                    <h2>联系我们</h2>
                </div>
                <div class="qrs">
                    <ul>
                        <li v-for="(item, index) in wapQrs.imgs" :key="index">
                            <div class="pic">
                                <img v-lazy="item" width="100%" alt="">
                            </div>
                            <div class="txt">{{wapQrs.text[index]}}</div>
                        </li>
                    </ul>
                </div>
                <div class="copy-right">
                    <p>三七互娱旗下-安徽尚趣玩网络科技有限公司丨闽ICP备19018245号</p>
                    <p>国新出审[2020]3011 号丨着作权人：厦门延趣网络科技有限公司丨</p>
                    <p>2019SR1128140丨ISBN 978-7-498-08592-4丨</p>
                    <p>出版单位： 上海电子出版有限公司 |</p>
                    <p>查看《开发者信息》,《用户隐私协议》</p>
                </div>
            </div>
        </full-page>
        <nav-head-m :config="navConfig"></nav-head-m>
        <a href="javascript:;" class="arrow" v-show="arrowShow"></a>
        <menu-pop-m v-show="ifMenu"></menu-pop-m>
        <role-pop-m :config="rolePopConfig" v-show="ifRole" @hide="hideRole"></role-pop-m>
        <mobile-tip-m></mobile-tip-m>
    </div>
</template>
<script>
import '../../../assets/wap/css/main.scss';
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../../assets/wap/js/apiUrl.js';

import MobileTipM from '../../../components/wap/mobile-tip-m/mobile-tip-m';
import NavHeadM from '../../../components/wap/nav-head-m/nav-head-m';
import DownloadM from '../../../components/wap/download-m/download-m';
import MenuPopM from '../../../components/wap/menu-pop-m/menu-pop-m';
import KvSwiperM from '../../../components/wap/kv-swiper-m/kv-swiper-m';
import newsPicM from '../../../components/wap/news-pic-m/news-pic-m';
import NewsSwiperM from '../../../components/wap/news-swiper-m/news-swiper-m';
import FeatureSwiperM from '../../../components/wap/feature-swiper-m/feature-swiper-m';
import VideoSwiperM from '../../../components/wap/video-swiper-m/video-swiper-m';
import RolePopM from '../../../components/wap/role-pop-m/role-pop-m';
// import RoleSwiperM from '../../../components/wap/role-swiper-m/role-swiper-m';
// import QrCodesM from '../../../components/wap/qr-codes-m/qr-codes-m';

import role1 from '../../../../extras/wap/img/m-role-1.png';
import role2 from '../../../../extras/wap/img/m-role-2.png';
import role3 from '../../../../extras/wap/img/m-role-3.png';
import role4 from '../../../../extras/wap/img/m-role-4.png';
export default {
    data(){
        return{
            options: {
                licenseKey: '',
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
                onLeave: (origin, destination, direction) => {
                    if(origin.anchor !== destination.anchor && destination.anchor === 'page1'){
                        // 重启视频
                        // this.$refs.indexVideo.play();
                    }
                    if(destination.anchor === 'page6'){
                        // console.log('最后一页');
                        this.arrowShow = false;
                    }else{
                        // console.log('其他页面');
                        this.arrowShow = true;
                    }
                }
            },
            videoShow: false,
            arrowShow: true,
            topImg: {
                img: '',
                link: ''
            },
            navConfig: {
                title: "霸业",
                desc: '谋大事，布大局',
                iconSrc: '',
                publicSrc: ''
            },
            downloadConfig: {
                wap_download: ''
            },
            kvConfig: {
                imgs: [],
                links: []
            },
            picConfig: {
                imgs: [],
                links: [],
                text: []
            },
            raidersPic: {
                imgs: [],
                links: [],
                text: []
            },
            raidersList1: {
                links: [],
                text: []
            },
            raidersList2: {
                links: [],
                text: []
            },
            raidersList3: {
                links: [],
                text: []
            },
            radersLink: './list.html',
            indexNews: {
                'zonghe': [],
                'xinwen': [],
                'huodong': [],
                'gonglue': []
            },
            wapQrs: {
                imgs: [],
                text: []
            },
            roleCur: 0,
            roleTab: [
                '武将库',
                '技能库'
            ],
            militaryCur: 0,
            militaryTab: [
                '魏国',
                '蜀国',
                '吴国',
                '群雄'
            ],
            militaryWeiConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            militaryShuConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            militaryWuConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            militaryQunConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            skillCur: 0,
            skillTab: [
                '英雄',
                '步兵',
                '术士',
                '骑兵',
                '弓兵',
                '辅助'
            ],
            skillYingxiongConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            skillBubingConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            skillShushiConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            skillQibingConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            skillGongbingConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            skillFuzhuConfig: {
                imgs: [],
                text: [],
                thumbnails: []
            },
            ifRole: false,
            rolePopConfig: {
                title: '',
                roleImg: ''
            },
            featureCur: 0,
            featureTab: [
                '原画欣赏',
                '视听中心'
            ],
            feturePicConfig: {
                imgs: []
            },
            fetureVideoConfig: {
                imgs: [],
                links: []
            },
            tip16Content: '',
            tip16Config: {
                index_img: '',
                index_left: '',
                index_top: ''
            }
        }
    },
    computed: {
        ifMenu(){
            return this.$store.state.ifMenu;
        }
    },
    methods: {
        getContent(keys){
            let _this = this;
            jsonp(apiUrl.get_cont,{
                params:{
                    key: keys
                }
            }).then(res=>{
                if(res.code === 1){
                    for(let key in res.data){
                        let data = res.data[key];
                        switch(key){
                            case 'wap_top_img':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.topImg.img = data.imgs[0];
                                    this.topImg.link = data.links[0];
                                }else{
                                    console.log('wap_top_img未填写内容');
                                }
                                break;
                            case 'wap_icon':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.navConfig.iconSrc = data.imgs[0];
                                }else{
                                    console.log('wap_icon未填写内容');
                                }
                                break;
                            case 'wap_qrcode_official':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.navConfig.publicSrc = data.imgs[0];
                                }else{
                                    console.log('wap_qrcode_official未填写内容');
                                }
                                break;
                            case 'wap_download':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.downloadLink = data.links[0];
                                }else{
                                    console.log('wap_download未填写内容');
                                }
                                break;
                            case 'wap_kv':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.kvConfig.imgs = data.imgs;
                                    this.kvConfig.links = data.links;
                                }else{
                                    console.log('wap_kv未填写内容');
                                }
                                break;
                            case 'wap_news_pic':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.picConfig.imgs = data.imgs;
                                    this.picConfig.links = data.links;
                                    this.picConfig.text = data.text;
                                }else{
                                    console.log('wap_news_pic未填写内容');
                                }
                                break;
                            case 'wap_raiders_pic':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.raidersPic.imgs = data.imgs;
                                    this.raidersPic.links = data.links;
                                    this.raidersPic.text = data.text;
                                }else{
                                    console.log('wap_raiders_pic未填写内容');
                                }
                                break;
                            case 'wap_raiders_list_1':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.raidersList1.links = data.links;
                                    this.raidersList1.text = data.text;
                                }else{
                                    console.log('wap_raiders_list_1未填写内容');
                                }
                                break;
                            case 'wap_raiders_list_2':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.raidersList2.links = data.links;
                                    this.raidersList2.text = data.text;
                                }else{
                                    console.log('wap_raiders_list_2未填写内容');
                                }
                                break;
                            case 'wap_raiders_list_3':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.raidersList3.links = data.links;
                                    this.raidersList3.text = data.text;
                                }else{
                                    console.log('wap_raiders_list_3未填写内容');
                                }
                                break;
                            case 'wap_qrs':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.wapQrs.imgs = data.imgs;
                                    this.wapQrs.text = data.text;
                                }else{
                                    console.log('wap_qrs未填写内容');
                                }
                                break;
                            case 'wap_wujiang_wei':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.militaryWeiConfig.imgs = data.imgs;
                                    this.militaryWeiConfig.text = data.text;
                                    this.militaryWeiConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_wujiang_wei未填写内容');
                                }
                                break;
                            case 'wap_wujiang_shu':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.militaryShuConfig.imgs = data.imgs;
                                    this.militaryShuConfig.text = data.text;
                                    this.militaryShuConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_wujiang_shu未填写内容');
                                }
                                break;
                            case 'wap_wujiang_wu':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.militaryWuConfig.imgs = data.imgs;
                                    this.militaryWuConfig.text = data.text;
                                    this.militaryWuConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_wujiang_wu未填写内容');
                                }
                                break;
                            case 'wap_wujiang_qun':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.militaryQunConfig.imgs = data.imgs;
                                    this.militaryQunConfig.text = data.text;
                                    this.militaryQunConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_wujiang_qun未填写内容');
                                }
                                break;
                            case 'wap_jineng_yingxiong':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillYingxiongConfig.imgs = data.imgs;
                                    this.skillYingxiongConfig.text = data.text;
                                    this.skillYingxiongConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_jineng_yingxiong未填写内容');
                                }
                                break;
                            case 'wap_jineng_bubing':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillBubingConfig.imgs = data.imgs;
                                    this.skillBubingConfig.text = data.text;
                                    this.skillBubingConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_jineng_bubing未填写内容');
                                }
                                break;
                            case 'wap_jineng_shushi':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillShushiConfig.imgs = data.imgs;
                                    this.skillShushiConfig.text = data.text;
                                    this.skillShushiConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_jineng_shushi未填写内容');
                                }
                                break;
                            case 'wap_jineng_qibing':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillQibingConfig.imgs = data.imgs;
                                    this.skillQibingConfig.text = data.text;
                                    this.skillQibingConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_jineng_qibing未填写内容');
                                }
                                break;
                            case 'wap_jineng_gongbing':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillGongbingConfig.imgs = data.imgs;
                                    this.skillGongbingConfig.text = data.text;
                                    this.skillGongbingConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_jineng_gongbing未填写内容');
                                }
                                break;
                            case 'wap_jineng_fuzhu':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillFuzhuConfig.imgs = data.imgs;
                                    this.skillFuzhuConfig.text = data.text;
                                    this.skillFuzhuConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('wap_jineng_fuzhu未填写内容');
                                }
                                break;
                            case 'wap_feature_pic':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.feturePicConfig.imgs = data.imgs;
                                }else{
                                    console.log('wap_feature_pic未填写内容');
                                }
                                break;
                            case 'wap_feature_video':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.fetureVideoConfig.imgs = data.imgs;
                                    this.fetureVideoConfig.links = data.links;
                                }else{
                                    console.log('wap_feature_video未填写内容');
                                }
                                break;
                            case 'gamesite_fcm_content_tips':
                                this.tip16Content = data.content;
                                break;
                            case 'gamesite_fcm_tips':
                                this.tip16Config.index_img = data.data[0].index_img;
                                this.tip16Config.index_left = data.data[0].index_left;
                                this.tip16Config.index_top = data.data[0].index_top;
                                break;
                        }
                    }
                }
            })
        },
        getIndexNews(cateId, size){
            jsonp(apiUrl.index_news,{
                params:{
                    cate_id: cateId,
                    size
                }
            }).then(res=>{
                if(res.code === 1){
                    switch(cateId){
                        case 0: 
                            this.indexNews.zonghe = res.data;
                            break;
                        case 1:
                            this.indexNews.xinwen = res.data;
                            break;
                        case 2:
                            this.indexNews.huodong = res.data;
                            break;
                        case 4:
                            this.indexNews.gonglue = res.data;
                            break;
                    }
                }
                
            })
        },
        showTip16(){
            let content = `
                <div class="rule-box">
                    ${this.tip16Content}
                </div>
            `;
            this.$modal({
                width: 460,
                title: '适龄提示',
                content
            });
        },
        showRole(title, roleImg){
            this.ifRole = true;
            this.rolePopConfig.title = title;
            this.rolePopConfig.roleImg = roleImg;
            fullpage_api && fullpage_api.setAllowScrolling(false);
        },
        hideRole(){
            this.ifRole = false;
            fullpage_api && fullpage_api.setAllowScrolling(true);
        }
    },
    components: {
        MobileTipM,
        NavHeadM,
        DownloadM,
        MenuPopM,
        KvSwiperM,
        newsPicM,
        NewsSwiperM,
        FeatureSwiperM,
        VideoSwiperM,
        RolePopM,
        // RoleSwiperM,
        // FunnySwiperM,
        // QrCodesM
    },
    mounted(){
        this.getIndexNews(0,4);
        this.getIndexNews(1,4);
        this.getIndexNews(2,4);
        this.getIndexNews(4,4);
        this.getContent('wap_top_img,wap_icon,wap_qrcode_official,wap_download,wap_kv,wap_news_pic,wap_raiders_pic,wap_raiders_list_1,wap_raiders_list_2,wap_raiders_list_3,wap_qrs,wap_wujiang_wei,wap_wujiang_shu,wap_wujiang_wu,wap_wujiang_qun,wap_jineng_yingxiong,wap_jineng_bubing,wap_jineng_shushi,wap_jineng_qibing,wap_jineng_gongbing,wap_jineng_fuzhu,wap_feature_pic,wap_feature_video,gamesite_fcm_content_tips,gamesite_fcm_tips');

        const player = new JSMpeg.Player('//video.37wanimg.com/baye/202111/wap-top-video.ts', {
            canvas: document.getElementById('video'),
            autoplay: true,
            progressive: false,
            loop: true,
            onPlay:()=>{
                this.videoShow = true;
            }
        })
    }
}
</script>
<style lang="scss" scoped>
</style>

