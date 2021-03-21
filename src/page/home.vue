<template>
    <div class="home content-page">
        <img src="@assets/logo.png"/>
        <p><b>Vue.js</b>는 프론트엔드 UI 프레임워크입니다.</p>
    </div>
</template>

<script>

import {useRouter} from 'vue-router';

export default {
    name: 'home',
    setup(){
        const router = useRouter();
        const moveTo = (url) => {router.push(url)};
        return {moveTo}
    }
}
</script>

<style scoped lang="scss">
.home{
    display: flex; flex-direction: column;
    justify-content: center;align-items: center;
    padding-top: 0; height: 90vh;
    b{color: $color__vue;}
}
</style>