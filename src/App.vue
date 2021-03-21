<template>
    <div class="app-main">
        <div class="app-content" :class="{'folding' : foldable}"><router-view/></div>
        <side-frame :foldable="foldable" @toggle="toggleSide"/>
    </div>
</template>

<script>
import sideFrame from '@page/frame/sideFrame';
export default {
    name: 'App',
    components: {sideFrame},
    data(){return {foldable: false}},
    methods:{
        toggleSide(){
            this.foldable = !this.foldable;
        }
    }
}
</script>



<style scoped lang="scss">
.app-content{
    position: relative; overflow-y: auto;
    left: $frame-side__width; transition: width $frame-side__fold-time;
    height: 100vh; width: calc(100% - #{$frame-side__width});
}

</style>

<style lang="scss">
body{
    color: $font__color-default;
    background-color: $color__gray-50;
    overflow-y: hidden;

}
.app-content.folding{width: calc(100% - #{$frame-side__width-folding}); left: $frame-side__width-folding;}
@import '~@/scss/globalClass.scss';
</style>