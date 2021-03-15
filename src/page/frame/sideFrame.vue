<template>
    <div class="lnb-frame" :class="{'folding' : foldable}">
        <div class="title">
            <h2>Vue.js Guide</h2>
        </div>
        <toy-icon class="folding-icon" icon="angle-up" size="18" @click="toggleSide"></toy-icon>
        <span class="presented-label">presented by Grey</span>
        <menu-frame/>
    </div>
</template>

<script>
import menuFrame from './menu/menuFrame';

export default {
    components:{menuFrame},
    props: {
        foldable: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
        }
    },
    methods: {
        toggleSide(){
            this.$emit('toggle');
        },
        moveTo(url){
            this.$router.push(url);
        }
    }
}
</script>

<style scoped lang="scss">
.lnb-frame{
    position: absolute;
    left: 0;top: 0;
    width: $frame-side__width; height: 100vh;
    background-color: $color__blue-gray-800;
    transition: width $frame-side__fold-time, color $frame-side__fold-time;
    color: $color__gray-200;
    .title{
        width: $frame-side__width; height: $frame-side__title-height;
        display: flex; align-items: center;padding: 0 12px;
        transition: transform $frame-side__fold-time;
    }
    .presented-label{
        position: absolute; bottom: 4px; right: 26px;
        font-weight: bold; font-size: 12px; color: $color__blue-gray-300;
        transition: top $frame-side__fold-time;
    }
    .folding-icon{
        position: absolute; right: 10px; top: 18px; cursor: pointer;
        transform: rotate(270deg); transition: transform $frame-side__fold-time;
    }
}


.lnb-frame.folding {
    width: $frame-side__width-folding;
    .title{
        position: absolute; top: 172px; left: -134px; font-size: 12px;
        transform: rotate(90deg); transition: width $frame-side__fold-time, transform $frame-side__fold-time;
        h2{padding-left: 14px; border-left: $border__default; }
    }
    .presented-label{transform: rotate(90deg); bottom: 52px; width: 112px; left: -38px; transition: all $frame-side__fold-time;}
    .folding-icon{transform: rotate(90deg); width: 16px !important;}
}
</style>