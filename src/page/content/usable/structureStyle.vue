<template>
    <div class="style-page content-page">
        <div class="main-title"><span class="index">3-4-4.</span> style</div>
        <hr>

        <div class="content-box">
            <div class="content-level-1">
                <p>
                    &lt;style&gt;태그영역은 흔히아는 CSS를 위한 영역이라고 생각하시면 됩니다.<br>
                    Dot(.)을 이용해 클래스명을 지정하고 CSS 속성을 부여하거나
                    태그명을 이용해서 스타일을 아래와 같이 정의할 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/style_default.jpg"/>
                    <span class="under-text">[ style 기본형태 ]</span>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> style 태그의 요소</div>
            <div class="content-level-1">
                <p>
                    &lt;style&gt;태그를 정의할 때 함께 사용가능한 몇가지 요소를 소개합니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> scoped</p>
                <p>
                    &lt;style&gt;태그내에 정의된 내용들이 적용될 범위를 지정하는 요소입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/style_scoped.jpg"/>
                    <span class="under-text">[ style scoped ]</span>
                </div>
                <p>
                    위 코드는 HTML태그 중 h3 태그에 대한 스타일을 지정하고 있습니다.<br>
                    차이점은 상단에는 scoped가 적용되어있고, 하단에는 적용되어있지않다는 점인데요.
                    &lt;style&gt;태그내에 정의한 CSS들은 기본적으로 전역에 영향을 끼치게 됩니다.
                    그에따라 위와 같은 경우, 해당 웹에 작성된 모든 h3 태그는 글자 색이 파란색으로 설정이 되는데요.
                    다만, <b>scoped</b>라는 요소를 통해 해당 Vue 파일만으로 영향의 범위를 제한 할 수 있습니다.
                    그래서 위 코드가 작성된 화면에서는 h3 태그의 색상이 파란색이 아니라 빨간색으로 나오게 됩니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> lang</p>
                <div class="image-box">
                    <img src="@assets/example/style_lang.jpg"/>
                    <span class="under-text">[ style lang ]</span>
                </div>
                <p>
                    &lt;style&gt;태그 내에서는 기본적으로 css 문법을 사용 할 수 있지만,
                    보다 효율적인 스타일 적용을 위해 SCSS나 LESS와 같은 전처리기법을 활용할 수도 있습니다.
                    이와 같은 경우 <b>lang</b> 요소를 통해 태그내에 정의된 문법이 어떤 기법인지를 위와같이 정의해주면,
                    예시와 같이 SCSS 토큰을 통한 변수 활용이나 하위 연산자 기법을 활용할 수 있습니다.<br>
                    (위 예시의 style 적용시 해당 Vue 코드의 h3 태그는 기본적으로 빨간색으로 나오지만,
                    class가 empty-class로 명시된 DOM의 하위 h3태그들은 녹색으로 렌더링 됩니다)
                </p>
            </div>

            <hr>
            <div class="bottom-navigation">
                <div class="left" @click="$router.push('/skill/structure/script')">
                    <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 3-4-3. script
                </div>
                <div class="right" @click="$router.push('/skill/component/summary')">
                    3-5. Component &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "style"
}
</script>

<style lang="scss" scoped>

</style>