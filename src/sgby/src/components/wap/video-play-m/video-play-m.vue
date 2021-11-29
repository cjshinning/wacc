<template>
    <div class="video-container">
        <div class="video-mask"></div>
        <div class="video-wrap">
            <video controls="controls" webkit-playsinline="true" playsinline width="100%" autoplay height="100%">
                <source :src="videoSrc" type="video/mp4">
            </video>
        </div>
        <a href="javascript:;" class="video-close" @click.prevent="closeCb()"><</a>
    </div>
</template>
<script>
export default {
    name: 'videoPlay'
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
.video-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
}
.video-mask{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,1);
}
.video-wrap{
    position: absolute;
    left: 0;
    top: 10%;
    width: 100%;
    height: 90%;
    video{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.video-close{
    position: absolute;
    left: 2%;
    top: 0%;
    font-size: 70px;
    color: #fff;
    text-decoration: none;
}
</style>

