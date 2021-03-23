<template>
    <div class="scss-page content-page">
        <div class="main-title"><span class="index">2-2-1.</span> SCSS</div>
        <hr>
        <div class="content-box">
            <div class="content-level-1">
                <p>
                    SCSS는 CSS의 전처리기(Preprocessor)입니다.<br>
                    CSS는 HTML DOM들의 스타일에 관여하는 역할이지만,
                    시스템이 복잡해지고 커질수록 사용성에 있어서 불편함도 함께 커지게 됩니다.
                    대표적으로 선택자나 상대적 값이 필요해서 연산이 필요한 때,
                    혹은 동일 값을 가지는 요소들임에도 실제 값을 반복함과 같이 스타일 적용시에 불편한 포인트들이 있는데요.
                    <br><br>
                    하지만 그럼에도 불구하고 웹 서비스는 CSS외의 스타일 문법이 적용되지않기때문에,
                    스타일의 정의는 좀 더 편한 문법으로 작성하고 해당 스타일을 CSS 형태로 치환해주는 방법이 생겨난 것입니다.
                    그리고 이러한 것을 CSS Preprocessor, CSS의 전처리기입니다.
                    <br><br>
                    가장 흔하게 사용되는 전처리기법은 LESS와 SCSS가 있으며, vue starter 및 본 가이드의 경우에는 SCSS를 채택하여 현재 사용중입니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span>loader</div>
            <div class="content-level-1">
                <p>
                    <span class="inner-link" @click="$router.push('/base/mandatory/webpack')">2-1-2. Webpack</span>의 #04. module을 설명할 때 loader에 대한 개념을 설명했었습니다.
                    loader는 <b>해석자</b>로써 각 파일 확장자에 작성된 문법을 어떻게 해석할 지를 결정해주는 역할이라고 했었는데요.
                    SCSS문법도 전처리기이기 때문에, 해당 문법을 해석해주는 해석자(loader)가 적용되어야하며 이를 webpack에 정의해주어야 합니다.<br>
                </p>
                <div class="image-box">
                    <img src="@assets/example/scss_loader.jpg"/>
                    <span class="under-text">[ Webpack의 scss-loader 설정 ]</span>
                </div>
                <p>
                    위 캡쳐는 *.vue 확장자와 *.scss 확장자에 대한 loader 설정내용입니다.
                    Vue 파일 내부에서도 &lt;style&gt;태그의 lang요소를 통해 SCSS 문법을 활용할 수 있으며,
                    이를위해 위와같이 함께 설정을 해줘야 합니다.
                </p>
                <div class="gray-box">
                    여기서 SCSS 문법을 해석하는 loader는 <b>sass-loader</b>인데요.<br>
                    왜 scss-loader가 아니라 sass-loader냐면, SCSS라는 문법의 형태가 SASS로부터 발전한 형태이기 때문입니다.<br>
                    (그래서 scss-loader라는 loader는 존재하지 않습니다)
                </div>
                <p>
                    vue starter를 함께 보고 계신분이라면, 위의 loader 설정이 vue.config.js에 없다는 것을 알아채셨을텐데요.<br>
                    이는 Vue-cli 3의 <b>cli-service 모듈이 편의를 위해 이미 해당 내용을 내장하여 정의하고 있기 때문</b>입니다.<br>
                    (혹시나, 이런 내용을 직접 확인하고싶으신 분은 node_modules/@vue/cli-service/webpack.config.js 를 살펴봐주세요)
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> 문법</div>
            <div class="content-level-1">
                <p>
                    CSS를 사용하듯이 SCSS를 활용해도 되지만, 유용한 몇가지 문법이 있어서 짧게 소개합니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> 변수</p>
                <p>
                    SCSS는 프로그래밍 언어와 같이 변수를 선언할 수 있으며,
                    이를 통해 동일한 값을 주어야하는 요소를 일원화하고 값의 재사용성을 높여줍니다.
                    변수의 선언방법은 변수의 이름앞에 <b>$</b>라는 prefix를 추가해주는 것입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/scss_variable.jpg"/>
                    <span class="under-text">[ SCSS의 변수 선언 ]</span>
                </div>
                <p>
                    위와같은 경우, $color__gray-50 이라는 변수는 #FAFAFA 라는 값을 가지게되며,
                    rgba와 같은 CSS 함수에 그래도 사용 할 수도 있고, color와 같은 일반 요소에도 그대로 활용이 가능합니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> 중첩</p>
                <p>
                    중첩은, 중괄호를 통해서 선택자의 범위를 가독성있게 정의하는 코드입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/scss_nesting.jpg"/>
                    <span class="under-text">[ SCSS의 중첩 ]</span>
                </div>
                <p>
                    좌측의 SCSS코드가 전처리를 통해 우측의 CSS로 변환되게 됩니다.
                    이를 비교해보면 SCSS코드의 형태가 HTML DOM 트리와 유사한 계층구조를 이룸으로써
                    요소 및 값들에 대한 가독성이 훨씬 좋다는 것을 알 수 있습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> 상위 선택자 &</p>
                <p>
                    중괄호(중첩)내에서 상위 선택자를 참조하고자 할 때 사용되는 키워드로써, <b>&</b>를 이용합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/scss_ampersand.jpg"/>
                    <span class="under-text">[ SCSS의 상위 선택자 ]</span>
                </div>
                <p>
                    일반적으로 hover나 focus, after와 같이 선택자를 지정하여 추가적인 스타일이 필요할 경우 사용되게 됩니다.<br>
                    위 코드의 경우, main-title이라는 클래스에 hover,focus,after시 각각의 스타일이 적용되는 것입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#04.</span> !default</p>
                <p>
                    <b>!default</b>는 <b>변수의 기본값</b>을 설정하는 방법입니다.<br>
                </p>
                <div class="image-box">
                    <img src="@assets/example/scss_default_base.jpg"/>
                    <span class="under-text">[ SCSS의 !default 사용예제 ]</span>
                </div>
                <p>
                    위와같이 !default 키워드를 요소의 값 뒤에 정의하게되면,
                    <b>$color__vue</b>변수의 기본값이 #41b883이 되게 됩니다.
                    <br><br>
                    해당 키워드는 빈번히 사용되기보다, <b>변수의 개념으로 제공되어야하는 값</b>들이 있는 경우 활용됩니다.
                    예를들어, 부트스트랩이나 구글 칼라와 같이 외부로부터 정형화 된 값들이나 라이브러리를 프로젝트에 적용하고자 할 경우,
                    해당 값들에 대한 이름이 중복될 수도 있고, 혹은 별도로 이름을 정해야하는 경우가 있을 수도 있습니다.
                    이러한 때에 !default 키워드를 통해서 기본값을 부여함으로써,
                    혹여나 발생할 수 있는 변수 값에대한 오버라이트를 방지하여 유효성을 보장하는 것입니다.
                    <br><br>

                    오버라이트를 방지하기위한 !default 키워드 사용시에는 정의되는 순서도 중요한 포인트입니다.<br>
                    CSS에서는 동일 클래스명에 대한 중복이 허용되며, 요소에 대한 중복 정의도 가능합니다.
                    이에따라 실제 스타일 요소를 정의하는 순서가 매우 중요한데요.
                    예를들어 아래와 같이 정의되어 있다면, 실제 <b>color 요소에 적용되는 값은 #ddd</b>입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/scss_order.jpg"/>
                    <span class="under-text">[ CSS를 정의하는 순서의 중요성 ]</span>
                </div>
                <p>
                    이처럼 CSS에서는 일반적으로 후순위로 정의되는 내용이 적용되는 우선순위가 높게 되는데요.<br>
                    SCSS에서는 변수의 기본값을 주기위해 <b>!default</b>키워드를 요소의 값 뒤에 정의하는데,
                    해당 키워드의 경우에는 CSS의 후순위 우선법칙을 역전하게 됩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/scss_default.jpg"/>
                    <span class="under-text">[ SCSS의 !default ]</span>
                </div>
                <p>
                    이는 !default 키워드를 적용한 값이 기본으로 적용되어야하는 실값으로 인식되어
                    먼저 정의한 값이 동일명의 변수간에 우선순위를 높게 가지는 것입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#05.</span> @import</p>
                <p>
                    SPA에서는 모듈간의 종속성을 정의하기 위해 import 키워드를 사용합니다.<br>
                    SCSS도 문법내에서 이와같은 모듈간 종속성이 유효하며, 아래와 같이 정의할 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/scss_import.jpg"/>
                    <span class="under-text">[ SCSS의 @import ]</span>
                </div>
                <p>
                    $color__indigo-50 이라는 변수는 googleColorToken.scss 파일에 정의되어있고,
                    해당 변수를 활용하고자 하는 파일에서 <b>@import</b>를 통해 모듈로써 활용하는 예제입니다.
                    @import 키워드 뒤에는 모듈로써 활용할 파일의 경로를 정의해주면 됩니다.
                    만약 Webpack의 alias 설정을 통해 정의한 경로를 사용하고자 할 경우에는,
                    경로 앞에 물결(~)을 prefix로 추가하여 alias와 함께 정의하시면 됩니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">-1.</span> 별첨</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> CSS의 우선순위</p>
                <p>
                    CSS의 스타일 적용 우선순위는 아래와 같습니다.<br>
                    1. 요소에 설정한 값 뒤에 <b>!important</b>키워드가 붙는 경우<br>
                    2. inline형태를 통해 HTML 태그의 style을 직접 선언한 경우<br>
                    3. HTML 태그의 id를 선택자(#id형태)로 사용하여 정의한 경우<br>
                    4. CSS 클래스명을 선택자로 지정한 경우<br>
                    5. HTML 태그명을 선택자로 사용한 경우<br>
                    6. HTML DOM 트리형태에서 상위 DOM의 속성을 상속한 경우<br>
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="right" @click="$router.push('/skill/architecture')">
                3. Vue.js 활용하기 &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'scss'
}
</script>

<style lang="scss" scoped>

</style>