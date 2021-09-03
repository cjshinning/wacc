<template>
    <div class="container">
        <div class="article">
            <nav-article-m :title="cateMap[cate]"></nav-article-m>
            <section class="main">
                <article class="article-content">
                    <h3>{{content.TITLE}}</h3>
                    <p class="detail">37游戏      {{content.PUB_DATE}}</p>
                    <div class="line"></div>
                    <div class="cont" v-html="content.CONTENT">
                    </div>
                </article>
            </section>
        </div>
    </div>
</template>
<script>
import '../../../assets/wap/css/main.scss';
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../../assets/wap/js/apiUrl.js';
import util from '../../../assets/pc/js/util.js';

import NavArticleM from '../../../components/wap/nav-article-m/nav-article-m';

export default {
    data(){
        return{
            content: [],
            cateMap: {
                'xinwen': '公告资讯',
                'huodong': '活动资讯',
                'gonglue': '游戏攻略'
            },
            cate: 'xinwen'
        }
    },
    components: {
        NavArticleM
    },
    methods: {
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
    mounted(){
        this.cate = util.getParams().cate;
        const id = util.getParams().id;
        
        this.getArticleContent(id);
    }
}

</script>
<style lang="scss" scoped>
</style>

