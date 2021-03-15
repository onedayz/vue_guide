<template>
    <div class="home">
    </div>
</template>

<script>

import {useRouter} from 'vue-router';

export default {
    name: 'home',

    setup(){
        const router = useRouter();
        const moveTo = (url) => {router.push(url)};
        const moveToRouterSample = (url) => {
            router.push({
                path: url,
                query: {userName: 'Grey'}
            })
        };
        return {moveTo, moveToRouterSample}
    }
}
</script>

<style scoped lang="scss">
.home{
    display: flex; flex-direction: column;
    justify-content: center;align-items: center;
}
</style>