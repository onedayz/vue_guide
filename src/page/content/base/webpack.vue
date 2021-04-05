<template>
    <div class=" content-page">
        <div class="main-title"><span class="index">2-1-2.</span> Webpack</div>
        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> Webpack의 결과물</div>
            <div class="content-level-1">
                <p>Webpack에 대한 설명에 앞서서, 번들링을 통해 만들어진 HTML 파일을 먼저 보시겠습니다.</p>
                <div class="image-box">
                    <img src="@assets/example/simple_index_html.jpg"/>
                    <span class="under-text">[ Vue Guide 서비스의 index.html ]</span>
                </div>
                <p>
                    캡쳐된 코드는, 여러분이 현재 보고계시는 Vue Guide 서비스의 실제 index.html 파일이며
                    보시는 것과 같이 메타태그를 제외하면 본문은 매우 심플한 코드로 이루어져 있습니다.
                    여기서 주의깊게 보실 부분은 &lt;body&gt;태그 안에 있는 &lt;script&gt;태그 입니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> 모듈 번들링</div>
            <div class="content-level-1">
                <p>Webpack은 아래와 같이 공식 홈페이지에 모듈 번들러라고 정의되어 있습니다.</p>
                <div class="gray-box">
                    <p><b>Webpack</b> is a static module bundler for modern JavaScript applications</p>
                </div>
                <p>
                    여기서의 '모듈'이 가리키는 대상은 개발할 때 필요한 파일들을 뜻하며
                    이는 Javascript, 이미지, 폰트와 같이 서비스를 구성하는데 필요한 모든 요소들에 대해
                    종류를 가리지 않고 포괄하는 개념입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/webpack.jpg"/>
                    <span class="under-text">[ webpack의 모듈 번들링 모식도 ]</span>
                </div>
                <p>
                    번들링을 실행하게 되면 위와 같이, 개발할 때 사용했던 각종 모듈들이 서로간의 의존성을 고려하여
                    운영단계에서 필요한 Static Asset들로 변환되게 됩니다.
                    그리고 이때의 Static Assets이 SPA 서비스를 위한 3요소를 충족하게 됩니다.
                </p>
                <br>
                <p>
                    우리가 학습하는 Vue.js 또한, *.vue 파일들이 모듈로써 존재하게되고
                    Webpack의 설정을 바탕으로 번들링을 통해 Javascript 코드로 변환되게 됩니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> 주요 설정</div>
            <div class="content-level-1">
                <p>
                    이처럼 Webpack은 다양한 옵션을 통해서 번들링을 위한 설정을 커스터마이징 할 수 있습니다.
                    Vue-cli 3로 생성한 프로젝트의 경우 vue.config.js 파일이 Webpack에 대한 설정을 담당하도록 되어있으며
                    이전 버전의 Vue-cli를 통해 생성된 프로젝트의 경우 webpack.config.js와 유사항 명칭으로 사용되고 있습니다.
                    <br><br>
                    여기서는 주요한 몇 가지의 설정만을 설명하며, 모든 옵션은
                    <a href="https://webpack.js.org/concepts/entry-points/" target="_blank>">이 링크</a>를 참고해주시기 바랍니다)
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> entry</p>
                <p>
                    Webpack에서 <b>entry</b>는 번들링을 하기 위한 진입점의 역할을 합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/entry.jpg"/>
                    <span class="under-text">[ vue.config.js의 entry 설정]</span>
                </div>
                <p>
                    번들링이란 N개의 모듈들이 서로간의 의존성을 고려하여 Static Assets으로 변환하는 과정인데,
                    이때 N개로 나누어진 리소스들을 정리하기위해서는 <b>입구와 같은 하나의 진입점을 필요</b>로 합니다.
                    그리고 바로 그 진입점 역할을 할 파일을 명시해주는 설정이 'entry'입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/entry_main.jpg"/>
                    <span class="under-text">[ entry파일역할을 하는 main.js ]</span>
                </div>
                <p>
                    entry로 지정된 파일은 Webpack에서는 입구의 역할임과 동시에
                    SPA구조에서는 가장 바깥 영역을 담당하는 Javascript파일이 됩니다.
                    그렇기에 그림의 1~3번은 다음과 같은 역할을 합니다.
                </p>
                <div class="gray-box">
                    <p><b>1번</b>과 같이 전역으로 필요한 라이브러리 및 라우터같은 설정파일들을 import 해주며</p>
                    <p><b>2번</b>처럼 Vue 3.x 버전에서는 createApp function을 통해 Vue Application 인스턴스를 생성하고</p>
                    <p><b>3번</b>처럼 생성된 Vue Application 객체에 필요한 모듈들을 전역에서 활용할 수 있게 심어줌으로써,</p>
                    <p>우리가 하고자 하는 Vue.js기반의 개발을 할 수 있도록 환경을 구성해주는 것입니다.</p>
                </div>
                <p>
                    (전역으로 필요한 jquery.js 라이브러리와 같은 것들을
                    index.html에서 &lt;script&gt;태그를 통해 라이브러리를 선언하면
                    코드 전체에서 사용할 수 있게 되는 것과 같은 거라고 보시면 됩니다)
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> output</p>
                <p>
                    번들링을 통해 생성되는 Static Assets들의 경로를 지정합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/output_detail.jpg"/>
                    <span class="under-text">[ output 설정 ]</span>
                </div>
                <p>
                    Vue-cli를 통해 생성된 프로젝트는 일반적으로 위와 같은 output 설정을 가지게되며 각 옵션은 아래의 역할을 합니다.
                </p>
                <div class="gray-box">
                    <p>path : 번들링의 결과물이 위치할 경로를 설정</p>
                    <p>filename : 엔트리 파일을 기점으로 번들링되었을 때 SPA 구조를 총괄하는 역할의 파일명</p>
                    <p>publicPath : 우리가 서버에 앱을 배포했을 경우를 대비한, 리소스들의 상대적 위치</p>
                </div>
                <p>
                    현재 함께 제공되는 vue starter 프로젝트에는 위와같은 output 설정이 명시되어있지않으며,
                    이와같이 <b>아무런 값을 설정하지 않을 경우</b>에는 아래와 같이 프로젝트의 루트 경로에 dist디렉토리가 생성되고
                    해당 위치에 모든 Static Assets들이 생성되게 됩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/dist.jpg"/>
                    <span class="under-text">[ 모듈 번들링의 결과로 생성된 dist 디렉토리 ]</span>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> resolve</p>
                <p>
                    번들링을 할 때, 모듈로 해석되는 파일내에서 관련된 코드들을 어떻게 해석 할 지에 대한 정의를 합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/resolve.jpg"/>
                    <span class="under-text">[ resolve 설정 ]</span>
                </div>
                <p>
                    위 코드는 resolve의 가장 대표적인 2가지 옵션을 설정한 내용이며,
                    이에따라 아래와 같은 효과를 얻을 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/resolve_detail.jpg"/>
                    <span class="under-text">[ resolve를 통한 import 설정 ]</span>
                </div>
                <div class="content-level-2">
                    <p class="fourth-title">1) extensions</p>
                    <p>
                        파일의 확장자를 묵시적으로 처리해줍니다.
                        import를 사용하여 타 모듈을 사용할 시에,
                        파일의 확장자를 명시해주지 않더라도 번들링시에 문제가 되지 않습니다
                        여기서 menuUnit 키워드가 가리키는 실제 파일은 menuUnit.vue이며
                        menuData가 가리키는 파일은 menuData.json입니다.<br>
                        2개 파일의 확장자가 서로 다르더라도 extensions에 json과 vue라는 확장자를 명시해두었기때문에
                        Webpack에 의해 알맞은 파일들이 모듈로써 import 되게 되는 것입니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">2) alias</p>
                    <p>
                        약어의 의미로 사용되며 여기에서의 약어란, 모듈 기반으로 아키텍쳐가 구성되어있는 상태에서
                        각각의 모듈이 import를 통해 타 모듈을 활용하고자 할 때 <b>경로의 약어</b>를 뜻합니다.
                        즉, 위와같이 정의되어있다고 가정한다면 '@'는 프로젝트 루트에 있는 src 디렉토리를 가리키며
                        '@page'은 src/page 디렉토리를, '@assets'는 src/assets 디렉토리를 의미합니다.
                        <br>
                        이는 N개의 모듈이 활용되는 개발환경에서 서로가 서로를 참조해야하기에
                        각 모듈의 경로를 일일이 상대경로 혹은 절대경로로 명시하기엔 너무 복잡하며
                        그로인한 실수를 줄일 수 있는 효과적인 설정입니다.
                    </p>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#04.</span> module</p>
                <p>
                    module 설정은 번들링을 진행할 때, 각 파일들을 어떻게 해석할 지에 대한 정의입니다.
                    번들링을 통해 Static Assets으로 변환되는 파일의 종류는 매우 다양합니다.
                    *.vue파일에서부터 js, jpg, scss등과 같이 어떤 모듈도 번들링의 타겟이 될 수 있으며
                    그렇기에 각 모듈에 대해 어떤 해석자(loader)를 사용할지를 명시해놓는 옵션입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/module_detail.jpg"/>
                    <span class="under-text">[ 각 확장자에 따른 module 설정 ]</span>
                </div>
                <p>
                    일반적으로 위와같이 파일의 확장자(test)와 해당 파일에 대한 해석자(loader)를 정의합니다.
                    이때 해석자를 정의하는 옵션은 loader와 use가 있으며,
                    단일 해석자의 경우 loader를 사용하고 복수개의 해석자를 활용 할 경우 use를 사용합니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#05.</span> plugin</p>
                <div class="image-box">
                    <img src="@assets/example/plugin_detail.jpg"/>
                    <span class="under-text">[ 각 확장자에 따른 module 설정 ]</span>
                </div>
                <p>
                    Webpack이 기본적으로 제공하는 기능외에 3rd 파티에서 제공하는 기능이 필요하다면
                    plugin 설정을 통해서 위와 같이 활용할 수 있습니다(위 코드는 특정 경로의 html파일을 번들링시
                    그대로 output경로로 복사하는 플러그인입니다)
                </p>
            </div>
        </div>

        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">-1.</span> 별첨</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> Vue 2.x의 entry 파일 </p>
                <div class="content-level-2">
                    <p>
                        본문에서 설명한 버전은 Vue 3.x 에서의 엔트리 파일이며,
                        만약 Vue 2.x대의 버전을 보고계시다면 보통 아래와 같은 구성으로 이루어져 있을 겁니다.</p>
                    <div class="image-box">
                        <img src="@assets/example/vue2_entry.jpg"/>
                        <span class="under-text">[ Vue 2.x 버전에서의 entry 파일 ]</span>
                    </div>
                    <p>
                        크게 3가지 파트(모듈들의 import 선언, import 한 모듈을 사용하겠다는 정의, Vue 인스턴스생성)로 이루어졌다는 점에서는
                        Vue 2.x 버전이나 Vue 3.x 버전이나 별반 차이가 없습니다. 다만, Vue 2.x 버전에서는 Vue.js의 인스턴스를 생성하는 방식이
                        new 키워드를 통해 인스턴스를 직접 생성하는 방법이었다면, Vue 3.x 버전부터는 <b>createApp 이라는 지정 함수를 통해서
                        Vue Application 인스턴스를 생성</b>하게 됩니다(Vue 인스턴스가 아니고 Vue Application 인스턴스입니다)
                        <br><br>
                        Vue 3.x 부터는 대부분의 객체 활용을 '함수지향형'으로하고 있다는 것을 보여주며,
                        Vue.js에서의 필수 라이브러리나 마찬가지인 vue-router도 Vue 3.x에 대응되는 버전부터는
                        createRouter 함수를 통해 router 객체를 생성하도록 하고 있습니다.<br>
                    </p>
                </div>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/base/mandatory/spa')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 2-1-1. SPA
            </div>
            <div class="right" @click="$router.push('/base/mandatory/npm')">
                2-1-3. NPM &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>

    </div>
</template>