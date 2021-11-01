<template>
    <div class="container">
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section section1">
                <download-left :download="downloadConfig"></download-left>
            </div>
            <div class="section section2">
                <div class="main">
                    <h2 class="title">游戏资讯</h2>
                    <div class="kv-wrap">
                        <kv-swiper :kv="kvConfig"></kv-swiper>
                    </div>
                    <news-swiper :news="indexNews"></news-swiper>
                </div>
            </div>
            <div class="section">
                third section ...
            </div>
            <div class="section">
                forth section ...
            </div>
            <div class="section">
                fifth section ...
            </div>
        </full-page>
        <menu-right :ifshow="showMenu"></menu-right>
        <a href="javascript:;" class="arrow"></a>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../../assets/pc/js/apiUrl.js';

import '../../../assets/pc/css/main.scss';
// import '../../../assets/pc/js/initLogin.js';

import MenuRight from '../../../components/pc/menu-right/menu-right';
import DownloadLeft from '../../../components/pc/download-left/download-left';


// import CommonFooter from '../../../components/pc/common-footer/common-footer';
import KvSwiper from '../../../components/pc/kv-swiper/kv-swiper';
import NewsSwiper from '../../../components/pc/news-swiper/news-swiper';
// import RoleTab from '../../../components/pc/role-tab/role-tab';
// import FunnySwiper from '../../../components/pc/funny-swiper/funny-swiper';
// import FeatureSwiper from '../../../components/pc/feature-swiper/feature-swiper';
// import QrCodes from '../../../components/pc/qr-codes/qr-codes';

import role1 from '../../../../extras/pc/img/role-1.png';
import role2 from '../../../../extras/pc/img/role-2.png';
import role3 from '../../../../extras/pc/img/role-3.png';
import role4 from '../../../../extras/pc/img/role-4.png';
export default {
    data(){
        return{
            options: {
                licenseKey: '',
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#ccc', '#999'],
                // scrollingSpeed: 1000,
                onLeave: (origin, destination, direction) => {
                    // console.log(origin.anchor, destination.anchor);
                    if(destination.anchor !== 'page1'){
                        // console.log('不是第一页');
                        this.showMenu = true;
                    }else{
                        // console.log('第一页');
                        this.showMenu = false;
                    }
                }
            },
            showMenu: false,
            topImg: {
                img: '',
                link: ''
            },
            downloadConfig: {
                qrcodeDownload: '',
                qrcodeOfficial: '',
                androidLink: '',
                appLink: '',
                deskLink: ''
            },
            reserveLink: '',
            kvConfig: {
                imgs: [],
                links: []
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
            fetureConfig: {
                imgs: [],
                text: []
            },
            qrcodeConfig: {
                names: [],
                imgs: [],
                infos: []
            },
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
            gcPic: ''
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
                            case 'funny_img':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.funnyConfig.imgs = data.imgs;
                                    this.funnyConfig.text = data.text;
                                    this.funnyConfig.thumb = data.thumbnails;
                                }else{
                                    console.log('funny_img未填写内容');
                                }
                                break;
                            case 'feature_img':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.fetureConfig.imgs = data.imgs;
                                }else{
                                    console.log('feature_img未填写内容');
                                }
                                break;
                            case 'footer_qr':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.qrcodeConfig.names = data.links;
                                    this.qrcodeConfig.imgs = data.imgs;
                                    this.qrcodeConfig.infos = data.text;
                                }else{
                                    console.log('footer_qr未填写内容');
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
                            case 'top_video':
                                this.topVideo = data.links[0];
                                break;
                            case 'gc_pic': 
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.gcPic = data.imgs[0];
                                }else{
                                    console.log('gc_pic未填写内容');
                                }
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
                width: 508,
                title: '适龄提示',
                content
            });
        },
        showVideo(){
            this.$video({
                videoSrc: this.topVideo
            })
        }
    },
    components: {
        MenuRight,
        DownloadLeft,
        // CommonFooter,
        KvSwiper,
        NewsSwiper,
        // RoleTab,
        // FunnySwiper,
        // FeatureSwiper,
        // QrCodes
    },
    mounted(){
        this.getIndexNews(0,6);
        this.getIndexNews(1,6);
        this.getIndexNews(2,6);
        this.getIndexNews(4,6);
        this.getContent('top_img,pc_qrcode_download,pc_qrcode_official,pc_download_and_link,pc_download_app_link,pc_desk_download,index_focus,funny_img,feature_img,footer_qr,reserve_link,gamesite_fcm_content_tips,gamesite_fcm_tips,top_video,gc_pic');
    }
}
</script>
<style lang="scss" scoped>

</style>

