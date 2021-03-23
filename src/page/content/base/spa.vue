<template>
    <div class="spa-page content-page">
        <div class="main-title"><span class="index">2-1-1.</span> SPA<span class="mini-title">(Single Page Application)</span></div>
        <hr>
        <div class="content-box">
            <div class="content-level-1">
                <p>Single Page Application은 말 그대로 단 하나의 페이지로 제공되는 웹 서비스를 의미합니다.</p>
                <p>여기서 의미하는 단 <b>'하나의 페이지'</b>의 기준은 일반적으로 우리가 생각하는 HTML 파일 하나를 의미한다고 이해하시면 됩니다.</p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> Web Service</div>
            <div class="content-level-1">
                <p>웹서비스는 보통 아래 3가지를 기본요소로 개발됩니다.</p>
                <div class="image-box">
                    <img src="@assets/example/html_css_js.jpg"/>
                    <span class="under-text">[ HTML / CSS / Javascript ]</span>
                </div>
                <p>
                    이 중 <b>HTML</b>은 <b>H</b>yper <b>T</b>ext <b>M</b>ark-up <b>L</b>anguage의 약자로써,
                    웹 페이지의 모습을 기술하기 위한 규약으로 만들어진 문서파일입니다.
                    그리고 규약에 맞춰 작성된 내역을 각각의 브라우저가 해석해서 사용자에게 서비스하게 됩니다.
                </p>
                <br>
                <p>이처럼 브라우저가 해석하는 기준점으로써의 <b>HTML파일이 '하나'</b>이기 때문에 Single Page Application인 것입니다.</p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> SPA를 이루는 3요소</div>
            <div class="content-level-1">
                <p>
                    웹서비스를 개발할 때의 기본 3요소는 HTML, CSS, Javascript 라고 말씀드렸습니다.<br>
                    이와 유사하게 SPA로 웹서비스를 제공하기위해서는 아래와 같은 3가지가 필요합니다.
                </p>
                <div class="gray-box">
                    <p>1. 웹 서비스의 밑 바탕을 담당하는 <b>HTML 파일</b>(예를들어, index.html)</p>
                    <p>2. 스크립트 코드들이 빌드된 <b>Javascript 파일</b>(예를들어, build.js)</p>
                    <p>3. 이미지, 폰트와 같은 <b>정적 리소스</b>(예를들어, *.jpg, *.png, *.woff)</p>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> With Webpack</div>
            <div class="content-level-1">
                <p>위에서 언급했듯이 SPA는 하나의 정적파일을 기반으로 웹서비스를 제공합니다.</p>
                <p>
                    하지만 이는 운영단계로 넘어가서 사용자에게 서비스를 제공할 때 하나의 파일이라는 것이지,
                    실제 개발할 때도 파일이 하나라는 이야기는 아닙니다.
                    우리가 JSP와 같은 기술들을 바탕으로 웹서비스를 만들 때도 N개의 *.jsp 파일들이 필요했듯이
                    Vue.js를 기반으로 웹서비스를 만들 때도 N개의 *.vue 파일들이 활용됩니다.
                </p>
                <br>
                <p>
                    그리고 이러한 N개의 파일 및 이미지/폰트와 같은 리소스들은
                    <a href="https://webpack.js.org/" target="_blank">Webpack</a>이라는
                    모듈 번들러(Module Bundler)를 통해서 SPA 환경에 맞게끔 변환(Bundle)되게 됩니다.
                    그 결과로 생성되는 파일들이 바로 위의 '1. SPA를 이루는 3요소'에서 언급했던 HTML, Javascript, 정적리소스 파일입니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="right" @click="$router.push('/base/mandatory/webpack')">
                2-1-2. Webpack &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'spa'
}
</script>

<style lang="scss" scoped>

</style>