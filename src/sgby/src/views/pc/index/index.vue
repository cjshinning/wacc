<template>
    <div class="container">
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section section1">
                <div class="top-video">
                    <video ref="indexVideo" autoplay="autoplay" preload="auto" loop="loop" muted="muted" :src="topVideo"></video>
                </div>
                <download-left :config="downloadConfig"></download-left>
                <a href="javascript:;" class="tip16" @click="showTip16"></a>
            </div>
            <div class="section section2">
                <div class="main">
                    <h2 class="title">游戏资讯</h2>
                    <news-pic :config="picConfig"></news-pic>
                    <div class="kv-wrap">
                        <kv-swiper :config="kvConfig"></kv-swiper>
                    </div>
                    <news-swiper :config="indexNews"></news-swiper>
                </div>
            </div>
            <div class="section section3">
                <div class="main">
                    <h2 class="title">游戏资讯</h2>
                    <div class="raiders">
                        <ul>
                            <li>
                                <a class="pic" :href="raidersPic.links[0]" target="_blank">
                                    <img v-lazy="raidersPic.imgs[0]" width="250" height="232" alt="">
                                    <span>{{raidersPic.text[0]}}<i></i></span>
                                </a>
                            </li>
                            <li>
                                <dl class="txt">
                                    <dt>技能搭配</dt>
                                    <dd v-for="(item,index) in raidersList1.links" v-if="index < 7">
                                        <a :href="item" target="_blank">{{raidersList1.text[index]}}</a>
                                    </dd>
                                    <dd v-if="raidersList1.links.length >= 7">
                                        <a href="#" target="_blank">更多<i></i></a>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <a class="pic" :href="raidersPic.links[1]" target="_blank">
                                    <img v-lazy="raidersPic.imgs[1]" width="250" height="232" alt="">
                                    <span>{{raidersPic.text[1]}}<i></i></span>
                                </a>
                            </li>
                            <li>
                                <dl class="txt">
                                    <dt>萌新科普</dt>
                                    <dd v-for="(item,index) in raidersList2.links" v-if="index < 7">
                                        <a :href="item" target="_blank">{{raidersList2.text[index]}}</a>
                                    </dd>
                                    <dd v-if="raidersList2.links.length >= 7">
                                        <a href="#" target="_blank">更多<i></i></a>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <a class="pic" :href="raidersPic.links[2]" target="_blank">
                                    <img v-lazy="raidersPic.imgs[2]" width="250" height="232" alt="">
                                    <span>{{raidersPic.text[2]}}<i></i></span>
                                </a>
                            </li>
                            <li>
                                <dl class="txt">
                                    <dt>更多攻略</dt>
                                    <dd v-for="(item,index) in raidersList3.links" v-if="index < 7">
                                        <a :href="item" target="_blank">{{raidersList3.text[index]}}</a>
                                    </dd>
                                    <dd v-if="raidersList3.links.length >= 7">
                                        <a href="#" target="_blank">更多<i></i></a>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                        <a :href="radersLink" target="_blank" class="btn-raders"></a>
                    </div>
                </div>
            </div>
            <div class="section section4">
                <div class="main">
                    <h2 class="title">特色游戏</h2>
                    <div class="role-box" v-show="roleCur==0">
                        <img :src="roleImg" width="1200" height="1000" alt="">
                    </div>
                    <div class="skill-box" v-show="roleCur==1">
                        <img :src="skillImg" width="1200" height="1000" alt="">
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
                                <div class="military-pan" @mouseover="handleScroll(true)" @mouseout="handleScroll(false)">
                                    <div class="pan" v-bind:class="{ scroll: ifScroll }" v-for="(item,index) in militaryTab" :key="index" v-show="militaryCur==index">
                                        <ul v-if="index==0">
                                            <li v-for="(item,index) in militaryWeiConfig.thumbnails">
                                                <div class="pic" @click="showRole(militaryWeiConfig.imgs[index])">
                                                    <img v-lazy="item" width="100%" alt="">
                                                </div>
                                                <p class="txt">{{militaryWeiConfig.text[index]}}</p>
                                            </li>
                                        </ul>
                                        <ul v-if="index==1">
                                            <li v-for="(item,index) in militaryShuConfig.thumbnails">
                                                <div class="pic" @click="showRole(militaryShuConfig.imgs[index])">
                                                    <img v-lazy="item" width="100%" alt="">
                                                </div>
                                                <p class="txt">{{militaryShuConfig.text[index]}}</p>
                                            </li>
                                        </ul>
                                        <ul v-if="index==2">
                                            <li v-for="(item,index) in militaryWuConfig.thumbnails">
                                                <div class="pic" @click="showRole(militaryWuConfig.imgs[index])">
                                                    <img v-lazy="item" width="100%" alt="">
                                                </div>
                                                <p class="txt">{{militaryWuConfig.text[index]}}</p>
                                            </li>
                                        </ul>
                                        <ul v-if="index==3">
                                            <li v-for="(item,index) in militaryQunConfig.thumbnails">
                                                <div class="pic" @click="showRole(militaryQunConfig.imgs[index])">
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
                                                <div class="pic" @click="showSkill(skillYingxiongConfig.imgs[index])">
                                                    <img v-lazy="item" width="100%" alt="">
                                                </div>
                                                <p class="txt">{{skillYingxiongConfig.text[index]}}</p>
                                            </li>
                                        </ul>
                                        <ul v-if="index==1">
                                            <li v-for="(item,index) in skillBubingConfig.thumbnails">
                                                <div class="pic" @click="showSkill(skillBubingConfig.imgs[index])">
                                                    <img v-lazy="item" width="100%" alt="">
                                                </div>
                                                <p class="txt">{{skillBubingConfig.text[index]}}</p>
                                            </li>
                                        </ul>
                                        <ul v-if="index==2">
                                            <li v-for="(item,index) in skillShushiConfig.thumbnails">
                                                <div class="pic" @click="showSkill(skillShushiConfig.imgs[index])">
                                                    <img v-lazy="item" width="100%" alt="">
                                                </div>
                                                <p class="txt">{{skillShushiConfig.text[index]}}</p>
                                            </li>
                                        </ul>
                                        <ul v-if="index==3">
                                            <li v-for="(item,index) in skillQibingConfig.thumbnails">
                                                <div class="pic" @click="showSkill(skillQibingConfig.imgs[index])">
                                                    <img v-lazy="item" width="100%" alt="">
                                                </div>
                                                <p class="txt">{{skillQibingConfig.text[index]}}</p>
                                            </li>
                                        </ul>
                                        <ul v-if="index==4">
                                            <li v-for="(item,index) in skillGongbingConfig.thumbnails">
                                                <div class="pic" @click="showSkill(skillGongbingConfig.imgs[index])">
                                                    <img v-lazy="item" width="100%" alt="">
                                                </div>
                                                <p class="txt">{{skillGongbingConfig.text[index]}}</p>
                                            </li>
                                        </ul>
                                        <ul v-if="index==5">
                                            <li v-for="(item,index) in skillFuzhuConfig.thumbnails">
                                                <div class="pic" @click="showSkill(skillFuzhuConfig.imgs[index])">
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
            </div>
            <div class="section section5">
                <div class="main">
                    <h2 class="title">特色游戏</h2>
                    <div class="feature-container">
                        <div class="feature-tab">
                            <a href="javascript:;" :class="{active: featureCur==index}" v-for="(item,index) in featureTab" @click="featureCur=index">{{item}}</a>
                        </div>
                        <div class="feature-pannel">
                            <div class="pannel" v-if="featureCur==0">
                                <feature-swiper :config="feturePicConfig"></feature-swiper>
                            </div>
                            <div class="pannel" v-if="featureCur==1">
                                <video-swiper :config="fetureVideoConfig"></video-swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <a href="javascript:;" class="copyright" @click="showFooter=!showFooter"></a>
                    <common-footer :class="{active: showFooter}"></common-footer>
                </div>
            </div>
        </full-page>
        <menu-right :ifshow="showMenu"></menu-right>
        <a href="javascript:;" class="arrow" v-show="showArrow"><span></span></a>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../../assets/pc/js/apiUrl.js';

import '../../../assets/pc/css/main.scss';
// import '../../../assets/pc/js/initLogin.js';

import MenuRight from '../../../components/pc/menu-right/menu-right';
import DownloadLeft from '../../../components/pc/download-left/download-left';


import CommonFooter from '../../../components/pc/common-footer/common-footer';
import KvSwiper from '../../../components/pc/kv-swiper/kv-swiper';
import NewsSwiper from '../../../components/pc/news-swiper/news-swiper';
import NewsPic from '../../../components/pc/news-pic/news-pic';
// import RoleTab from '../../../components/pc/role-tab/role-tab';
// import FunnySwiper from '../../../components/pc/funny-swiper/funny-swiper';
import FeatureSwiper from '../../../components/pc/feature-swiper/feature-swiper';
import VideoSwiper from '../../../components/pc/video-swiper/video-swiper';
// import QrCodes from '../../../components/pc/qr-codes/qr-codes';
export default {
    data(){
        return{
            options: {
                licenseKey: '',
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                onLeave: (origin, destination, direction) => {
                    if(origin.anchor !== destination.anchor && destination.anchor === 'page1'){
                        // 重启视频
                        this.$refs.indexVideo.play();
                    }
                    if(destination.anchor !== 'page1'){
                        this.showMenu = true;
                    }else{
                        this.showMenu = false;
                    }
                    if(destination.anchor === 'page5'){
                        this.showArrow = false;
                    }else{
                        this.showArrow = true;
                    }
                }
            },
            showMenu: false,
            showArrow: true,
            topImg: {
                img: '',
                link: ''
            },
            downloadConfig: {
                qrcodeDownload: '',
                qrcodeOfficial: '',
                androidLink: '',
                appLink: '',
                deskLink: '',
                qrcodeDouyin: '',
                qrcodeKuaishou: '',
                qrcodeWeibo: ''
            },
            reserveLink: '',
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
            roleConfig: {
                current: 0,
                tabs: ['战士', '法师', '祭师', '小丑'],
                pannels: [
                    role1,
                    role2,
                    role3,
                    role4
                ]
            },
            funnyConfig: {
                imgs: [],
                text: [],
                thumb: []
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
            roleImg: '',
            skillImg: '',
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
            radersLink: './list.html?cate=gonglue&page=1',
            indexNews: {
                'zonghe': [],
                'xinwen': [],
                'huodong': [],
                'gonglue': []
            },
            tip16Content: '',
            tip16Config: {
                mob_index_img: '',
                mob_index_left: '',
                mob_index_top: ''
            },
            topVideo: '',
            showFooter: false,
            ifScroll: false
        }
    },
    computed: {
        
    },
    methods: {
        getContent(keys){
            jsonp(apiUrl.get_cont,{
                params:{
                    key: keys
                }
            }).then(res=>{
                if(res.code === 1){
                    for(let key in res.data){
                        let data = res.data[key];
                        switch(key){
                            case 'top_img':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.topImg.img = data.imgs[0];
                                    this.topImg.link = data.links[0];
                                }else{
                                    console.log('top_img未填写内容');
                                }
                                break;
                            case 'pc_qrcode_download':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.qrcodeDownload = data.imgs[0];
                                }else{
                                    console.log('pc_qrcode_download未填写内容');
                                }
                                break;
                            case 'pc_qrcode_official':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.qrcodeOfficial = data.imgs[0];
                                }else{
                                    console.log('pc_qrcode_official未填写内容');
                                }
                                break;
                            case 'pc_douyin_qr':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.qrcodeDouyin = data.imgs[0];
                                }else{
                                    console.log('pc_douyin_qr未填写内容');
                                }
                                break;
                            case 'pc_kuaishou_qr':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.qrcodeKuaishou = data.imgs[0];
                                }else{
                                    console.log('pc_kuaishou_qr未填写内容');
                                }
                                break;
                            case 'pc_weibo_qr':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.qrcodeWeibo = data.imgs[0];
                                }else{
                                    console.log('pc_weibo_qr未填写内容');
                                }
                                break;
                            case 'pc_download_and_link':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.androidLink = data.text[0];
                                }else{
                                    console.log('pc_download_and_link未填写内容');
                                }
                                break;
                            case 'pc_download_app_link':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.appLink = data.text[0];
                                }else{
                                    console.log('pc_download_app_link未填写内容');
                                }
                                break;
                            case 'pc_desk_download':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.deskLink = data.text[0];
                                }else{
                                    console.log('pc_desk_download未填写内容');
                                }
                                break;
                            case 'index_focus':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.kvConfig.imgs = data.imgs;
                                    this.kvConfig.links = data.links;
                                }else{
                                    console.log('index_focus未填写内容');
                                }
                                break;
                            case 'pc_news_pic':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.picConfig.imgs = data.imgs;
                                    this.picConfig.links = data.links;
                                    this.picConfig.text = data.text;
                                }else{
                                    console.log('pc_news_pic未填写内容');
                                }
                                break;
                            case 'pc_raiders_pic':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.raidersPic.imgs = data.imgs;
                                    this.raidersPic.links = data.links;
                                    this.raidersPic.text = data.text;
                                }else{
                                    console.log('pc_raiders_pic未填写内容');
                                }
                                break;
                            case 'pc_raiders_list_1':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.raidersList1.links = data.links;
                                    this.raidersList1.text = data.text;
                                }else{
                                    console.log('pc_raiders_list_1未填写内容');
                                }
                                break;
                            case 'pc_raiders_list_2':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.raidersList2.links = data.links;
                                    this.raidersList2.text = data.text;
                                }else{
                                    console.log('pc_raiders_list_2未填写内容');
                                }
                                break;
                            case 'pc_raiders_list_3':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.raidersList3.links = data.links;
                                    this.raidersList3.text = data.text;
                                }else{
                                    console.log('pc_raiders_list_3未填写内容');
                                }
                                break;
                            case 'pc_wujiang_wei':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.militaryWeiConfig.imgs = data.imgs;
                                    this.militaryWeiConfig.text = data.text;
                                    this.militaryWeiConfig.thumbnails = data.thumbnails;
                                    if(data.imgs.length){
                                        this.roleImg = data.imgs[0];
                                    }
                                }else{
                                    console.log('pc_wujiang_wei未填写内容');
                                }
                                break;
                            case 'pc_wujiang_shu':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.militaryShuConfig.imgs = data.imgs;
                                    this.militaryShuConfig.text = data.text;
                                    this.militaryShuConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('pc_wujiang_shu未填写内容');
                                }
                                break;
                            case 'pc_wujiang_wu':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.militaryWuConfig.imgs = data.imgs;
                                    this.militaryWuConfig.text = data.text;
                                    this.militaryWuConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('pc_wujiang_wu未填写内容');
                                }
                                break;
                            case 'pc_wujiang_qun':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.militaryQunConfig.imgs = data.imgs;
                                    this.militaryQunConfig.text = data.text;
                                    this.militaryQunConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('pc_wujiang_qun未填写内容');
                                }
                                break;
                            case 'pc_jineng_yingxiong':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillYingxiongConfig.imgs = data.imgs;
                                    this.skillYingxiongConfig.text = data.text;
                                    this.skillYingxiongConfig.thumbnails = data.thumbnails;
                                    if(data.imgs.length){
                                        this.skillImg = data.imgs[0];
                                    }
                                }else{
                                    console.log('pc_jineng_yingxiong未填写内容');
                                }
                                break;
                            case 'pc_jineng_bubing':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillBubingConfig.imgs = data.imgs;
                                    this.skillBubingConfig.text = data.text;
                                    this.skillBubingConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('pc_jineng_bubing未填写内容');
                                }
                                break;
                            case 'pc_jineng_shushi':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillShushiConfig.imgs = data.imgs;
                                    this.skillShushiConfig.text = data.text;
                                    this.skillShushiConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('pc_jineng_shushi未填写内容');
                                }
                                break;
                            case 'pc_jineng_qibing':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillQibingConfig.imgs = data.imgs;
                                    this.skillQibingConfig.text = data.text;
                                    this.skillQibingConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('pc_jineng_qibing未填写内容');
                                }
                                break;
                            case 'pc_jineng_gongbing':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillGongbingConfig.imgs = data.imgs;
                                    this.skillGongbingConfig.text = data.text;
                                    this.skillGongbingConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('pc_jineng_gongbing未填写内容');
                                }
                                break;
                            case 'pc_jineng_fuzhu':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.skillFuzhuConfig.imgs = data.imgs;
                                    this.skillFuzhuConfig.text = data.text;
                                    this.skillFuzhuConfig.thumbnails = data.thumbnails;
                                }else{
                                    console.log('pc_jineng_fuzhu未填写内容');
                                }
                                break;
                            case 'pc_feature_pic':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.feturePicConfig.imgs = data.imgs;
                                }else{
                                    console.log('pc_feature_pic未填写内容');
                                }
                                break;
                            case 'pc_feature_video':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.fetureVideoConfig.imgs = data.imgs;
                                    this.fetureVideoConfig.links = data.links;
                                }else{
                                    console.log('pc_feature_video未填写内容');
                                }
                                break;
                            case 'reserve_link':
                                this.reserveLink = data.text;
                                break;
                            case 'gamesite_fcm_content_tips':
                                this.tip16Content = data.content;
                                break;
                            case 'gamesite_fcm_tips':
                                this.tip16Config.mob_index_img = data.data[0].mob_index_img;
                                this.tip16Config.mob_index_left = data.data[0].mob_index_left;
                                this.tip16Config.mob_index_top = data.data[0].mob_index_top;
                                break;
                            case 'pc_top_video':
                                this.topVideo = data.text[0];
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
                width: 360,
                title: '适龄提示',
                scroll: false,
                content
            });
        },
        showRole(roleImg){
            this.roleImg = roleImg;
        },
        showSkill(skillImg){
            this.skillImg = skillImg;
        },
        handleScroll(flag){
            // if(flag){
            //     fullpage_api && fullpage_api.setAllowScrolling(false);
            //     this.ifScroll = true;
            // }else{
            //     fullpage_api && fullpage_api.setAllowScrolling(true);
            //     this.ifScroll = false;
            // }
            
        }
    },
    components: {
        MenuRight,
        DownloadLeft,
        CommonFooter,
        KvSwiper,
        NewsSwiper,
        NewsPic,
        // RoleTab,
        // FunnySwiper,
        FeatureSwiper,
        VideoSwiper,
        // QrCodes
    },
    mounted(){
        this.getIndexNews(0,6);
        this.getIndexNews(1,6);
        this.getIndexNews(2,6);
        this.getIndexNews(4,6);
        this.getContent('top_img,pc_top_video,pc_qrcode_download,pc_qrcode_official,pc_douyin_qr,pc_kuaishou_qr,pc_weibo_qr,pc_download_and_link,pc_download_app_link,pc_desk_download,index_focus,pc_news_pic,pc_raiders_pic,pc_raiders_list_1,pc_raiders_list_2,pc_raiders_list_3,pc_wujiang_wei,pc_wujiang_shu,pc_wujiang_wu,pc_wujiang_qun,pc_jineng_yingxiong,pc_jineng_bubing,pc_jineng_shushi,pc_jineng_qibing,pc_jineng_gongbing,pc_jineng_fuzhu,pc_feature_pic,pc_feature_video,reserve_link,gamesite_fcm_content_tips,gamesite_fcm_tips');

        document.querySelector('.pan').addEventListener('DOMMouseScroll', function(e){
            e.stopPropagation();
            fullpage_api && fullpage_api.setAllowScrolling(false);
        })
    }
}
</script>
