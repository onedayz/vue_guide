<template>
    <div class="component-summary-page content-page">
        <div class="main-title"><span class="index">3-5-1.</span> Summary</div>
        <hr>

        <div class="content-box">
            <div class="content-level-1">
                <p>
                    entry 파일을 진입점으로 하는 SPA에서의 Vue.js는 아래와 같이 화면들에 매핑된 Vue파일들이 <b>트리형태로 구성</b>되어 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/component_tree.jpg"/>
                    <span class="under-text">[ 화면과 Vue의 트리구조 ]</span>
                </div>
                <p>
                    이러한 트리 형태가 가능한 이유는,
                    우선적으로 vue-router를 통해서 URL의 변경시 해당 영역만 렌더링되는 중앙교체형 방식임과 동시에
                    각 Vue 파일내에서 필요한 타파일들을 import 함으로써 의존성이 체인처럼 연결되기 때문이며,
                    핵심적으로는 각 Vue파일이 <b>컴포넌트</b>라는 단위로 분류됨으로써 재사용이 가능하기 때문입니다.
                    <br>
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="right" @click="$router.push('/skill/component/custom')">
                3-5-2. Custom &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "componentSummary"
}
</script>

<style lang="scss" scoped>

</style>