<template>
    <div class="container">
        <div class="article">
            <div class="c-kv"></div>
            <top-nav></top-nav>
            <div class="c-wrap">
                <sider-download :download="downloadConfig"></sider-download>
                <div class="c-main">
                    <div class="article-hd">
                        <h3>{{cateMap[cate]}}</h3>
                        <p>
                            您的位置：
                            <a href="./" target="_blank">赛尔特大陆</a> >
                            <a :href="listLink" target="_blank">{{cateMap[cate]}}</a> >
                            <span>{{content.TITLE}}</span>
                        </p>
                    </div>
                    <div class="article-content">
                        <h4>{{content.TITLE}}</h4>
                        <div class="detail">
                            <!-- <span>作者：37网游</span> -->
                            <span>{{content.PUB_DATE}}</span>
                        </div>
                        <div class="cont" v-html="content.CONTENT">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <common-footer></common-footer>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../../assets/pc/js/apiUrl.js';
import util from '../../../assets/pc/js/util.js';

import '../../../assets/pc/css/main.scss';
import '../../../assets/pc/js/initLogin.js';

import CommonFooter from '../../../components/pc/common-footer/common-footer';
import TopNav from '../../../components/pc/top-nav/top-nav';
import SiderDownload from '../../../components/pc/sider-download/sider-download';

export default {
    data(){
        return{
            downloadConfig: {
                qrcode: '',
                androidLink: '',
                appLink: ''
            },
            content: [],
            cateMap: {
                'xinwen': '公告资讯',
                'huodong': '活动资讯',
                'gonglue': '游戏攻略'
            },
            cate: 'xinwen'
        }
    },
    computed: {
      listLink(){
        return `./list.html?cate=${this.cate}&page=1`;
      },
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
                            case 'pc_qrcode_download':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.qrcode = data.imgs[0];
                                }else{
                                    console.log('pc_qrcode_download未填写内容');
                                }
                                break;
                            case 'download_and_link':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.androidLink = data.text[0];
                                }else{
                                    console.log('download_and_link未填写内容');
                                }
                                break;
                            case 'download_app_link':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.appLink = data.text[0];
                                }else{
                                    console.log('download_app_link未填写内容');
                                }
                                break;
                        }
                    }
                }
            })
        },
        getArticleContent(id){
            jsonp(apiUrl.article_content,{
                params:{
                    id
                }
            }).then(res=>{
                if(res.code === 1){
                    this.content = res.data;
                }
            })
        },
    },
    components: {
        CommonFooter,
        TopNav,
        SiderDownload
    },
    mounted(){
        this.cate = util.getParams().cate;
        const id = util.getParams().id;
        
        this.getArticleContent(id);
        this.getContent('pc_qrcode_download,download_and_link,download_app_link');
    }
}
</script>
<style lang="scss" scoped>

</style>

