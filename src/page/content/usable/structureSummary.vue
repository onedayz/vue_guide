<template>
    <div class="structure-summary-page content-page">
        <div class="main-title"><span class="index">3-4-1.</span> Summary</div>
        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> 3개의 태그영역</div>
            <div class="content-level-1">
                <p>
                    하나의 Vue 파일은 총 3개의 태그 영역으로 나뉩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue_summary.jpg"/>
                    <span class="under-text">[ Vue 파일의 기본형태 ]</span>
                </div>
                <p>
                    앞서서 SPA를 설명(<span class="inner-link" @click="$router.push('/base/mandatory/spa')">2-1-1. SPA</span>)할 때
                    웹서비스는 보통 HTML / CSS / Javascript로 이루어진다고 설명드렸습니다.<br>
                    그에따라 Vue 파일도, 내부에 나뉘어진 태그가 각각 그와 유사한 기능과 코드형태를 띄고 있습니다.
                </p>
                <div class="gray-box">
                    <p>1. tempalte: HTML와 유사한 형태를 띄며, HTML DOM 태그 및 Vue의 컴포넌트들도 태그의 형태로 활용되는 영역</p>
                    <p>2. script: Javascript와 유사한 형태를 띄며, 변수 선언 및 메소드를 정의할 수 있습니다.</p>
                    <p>3. style: CSS와 유사한 형태를 띄며, 옵션에 따라 SCSS, LESS와 같은 문법도 활용할 수 있습니다.</p>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> 2-way 바인딩</div>
            <div class="content-level-1">
                <p>
                    Vue.js는 기본적으로 데이터에 대한 2-way 바인딩을 제공합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/2way.jpg"/>
                    <span class="under-text">[ 2-way 바인딩 ]</span>
                </div>
                <p>
                    위 스크린샷을 보면 &lt;script&gt;영역에서 <b>title</b>이라는 변수가 선언되고 기본값이 정의되어있으며
                    &lt;template&gt;영역에서 해당값이 활용되고 있다는 걸 볼 수 있습니다.
                    2-way 바인딩이라는 말은 Vue.js나 React.js와 같은 프론트엔드 프레임워크들에서 흔히 쓰는 말인데요.
                    기존의 프론트엔드 개발시에는 HTML 태그에서 활용되는 변수와 같이 특정 '값'에 대한 실제 변경을 해주기 위해서는
                    Javascript 레벨에서의 코딩을 통해 한 번 더 수정해주는 과정을 거쳐야했습니다.
                    <br><br>
                    하지만 Vue.js는 이런 과정을 내장함으로써 위와 같은 코드일 때 &lt;template&gt;영역에 있는
                    &lt;input&gt;태그에 사용자가 입력함과 동시에 &lt;script&gt;영역에 있는 title변수가 변경되게 됩니다.
                    또한, changeTitle 메서드 영역내와 같이 &lt;script&gt;영역에서 변수의 값을 변경하는 경우에도
                    &lt;template&gt;영역에 활용중인 값이 함께 변경되게 됩니다.
                    <br><br>
                    즉, <b>활용되는 변수에 대해 &lt;template&gt;영역에서 변경하더라도 &lt;script&gt;에 반영되고
                    &lt;script&gt;영역에서 변경하더라도 &lt;template&gt;영역에 반영되므로 이것을 두 영역간의 2-way 바인딩</b>이라고합니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="right" @click="$router.push('/skill/structure/template')">
                3-4-2. template &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "structureSummary"
}
</script>

<style lang="scss" scoped>

</style>