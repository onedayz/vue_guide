<template>
    <div class="architecture-page content-page">
        <div class="main-title"><span class="index">3-1.</span> Architecture<span></span></div>
        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> Summary</div>
            <div class="content-level-1">
                <p>
                    Vue.js를 기반으로 한 프론트엔드 프로젝트는 SPA 아키텍쳐를 가지고 있습니다.<br>
                    그렇기에 Webpack을 통해 모듈 번들링 된 Static Assets에는 하나의 HTML 파일이 있으며
                    웹 브라우져는 이 파일을 기반으로하여 해석된 내용을 화면에 렌더링하게 됩니다.
                    2-1-2. Webpack의 <span class="inner-link" @click="$router.push('/base/mandatory/webpack')">0.Webpack의 결과물</span>을 참고해보면
                    번들링이 끝난 HTML파일은 메타태그와 아주 간단한 &lt;div&gt; 태그만을 가지고 있는 것을 확인하실 수 있습니다.
                    본 장에서는 이토록 간단한 구성이 어떻게 SPA를 구축했는지, 그리고 이를 바탕으로 Vue.js가 어떻게 사용되는지를 설명하려 합니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> 파일과 파일의 관계</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> index.html</p>
                <p>
                    누차 언급하고 있는 index.html은 아래와 같은 형태의 Static Assets입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/simple_index_html_body_tag.jpg"/>
                    <span class="under-text">[ 심플한 index.html ]</span>
                </div>
                <p>
                    매우 심플하며, 이 이상 어떤 코드도 추가로 가지지 않습니다.
                    해당 파일에서 유념하셔야 할 항목은 <b>&lt;div&gt;태그의 id가 'app'이라는 것</b>과
                    &lt;body&gt;태그안에 &lt;script&gt;태그로 build.js 파일이 선언되어있다는 점입니다.
                </p>
            </div>


            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> build.js</p>
                <p>
                    (실제 index.html이 내포한 Javascript 파일명의 해시명은 생략하도록 하겠습니다)<br>
                    index.html이 매우 심플했기에, 우리는 build.js가 핵심역할을 한다는 걸 알 수 있습니다.
                    Webpack이 모듈 번들링을 할 때 entry파일을 진입점으로하여 N개의 파일들을 정리하고 통합한다고 설명했었습니다.
                    그리고 그 결과로 생성되는 output 파일이 바로 이 build.js 입니다.
                    <br><br>
                    우리는 Vue.js를 하나의 프레임워크라고 정의합니다만, 결국 내부는 Javascript로 이루어져 있으며,
                    실제 서비스 단계에서는 Javascript로써 브라우져가 해석하고 동작하게 됩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/build.jpg"/>
                    <span class="under-text">[ 실제 빌드된 build.js의 예시 ]</span>
                </div>
                <p>
                    위 캡쳐는 실제로 본 Vue Guide 페이지를 빌드한 이후에 생성된 build.js 파일의 코드입니다.<br>
                    보시는 것처럼, 빌드과정서 Minify와 Uglify가 적용되어 순수한 Javascript 형태로 코드가 생성되었음을 알 수 있습니다.
                </p>
                <p>
                    즉, 위와같이 entry파일내의 2번 영역에서 <b>create App</b> funtion을 통해 생성한 Vue Application를 활용해서
                    우리는 Vue.js 기반의 프론트엔드 개발을 할 수 있는 것이구요.
                    최종적으로 모듈 번들링이 끝나면 이 모든 코드들이 브라우져가 해석가능한 Javascript로 변환된다는 것입니다.
                    <br><br>
                    즉, <b>N개의 *.vue파일과 *.js, *.json등과 같은 파일들이 서로간의 의존성(Dependency)를 바탕으로
                    정리 및 통합되어 하나의 output 파일(build.js)이 생성</b>된다는 것이죠.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> main.js(entry 파일)</p>
                <p>
                    최종적으로 배포되는 build.js가 생성되기 위해서는 아래와 같이,
                    진입점 역할을 하는 entry 파일이 필요하다고 2-1.2.Webpack의 3. 주요설정에서 설명했었습니다.
                    여기서는 그 entry파일에서 정의해줘야하는 주요 설정 및 코드를 알아보겠습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/entry_main.jpg"/>
                    <span class="under-text">[ 실제 빌드된 build.js의 예시 ]</span>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">1) import 키워드(1번 영역)</p>
                    <p>
                        import는 활용하고자하는 모듈을 가져오는 키워드입니다.
                        entry 파일의 주 역할이 모듈로 나누어진 각 파일들의 진입점 역할을 한다는 것은 바꿔말하면,
                        관문의 역할이기때문에 해당 파일에 정의한 내역이 서비스 전체에 영향력을 행사할 수 있다는 것을 의미합니다.
                        그렇기 때문에 entry 파일에서는 전역으로 활용되어야하는 vue-router, vuex 같은 모듈들을 주로 import합니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">2) createApp</p>
                    <p>
                        (혹시 Vue.js의 버전을 2.x 로 보고 계시다면 하기의 별첨을 참고해주시기 바랍니다)<br>
                        Vue 3.x 부터는 functional한 형태로 필요 인스턴스들을 생성하여 활용하고 있으며 이를 위해 조금 변동된 사항이 있는데요.
                        기존 Vue 2.x에서는 Vue 인스턴스를 활용했지만 Vue 3.x 부터는 그 역할을 Vue Application 인스턴스가 대체하며,
                        이를 위해 createApp 함수가 제공된다는 것입니다.
                        <br><br>
                        인스턴스의 생성방법 또한 <b>new Vue</b>라는 new 지시자를 통해 import 해 온 Vue 모듈을 다이렉트로 활용하였지만,
                        <b>Vue 3.x 부터는 createApp 라는 함수를 제공</b>하여 Vue Application 인스턴스를 생성하게 바뀌었습니다.
                        <br><br>
                        그로인해 기존에는 별첨과 같이 전역으로 활용할 모듈들(vue-router, vuex, 컴포넌트등)을
                        import한 Vue 모듈에 직접 주입하거나 Vue 인스턴스 생성시 파라미터 명시하였다면,
                        현재는 <b>createApp을 통해 Vue Application 인스턴스를 먼저 생성하고, 생성된 인스턴스에 주입하여 활용</b>하게 되었습니다.
                        <br><br>
                        createApp 함수의 파라미터는 entry 파일로부터 이어질 <b>최초의 진입점 열할을 할 Vue 파일이며,<br>
                        이를 root component 라고 지칭</b>합니다.
                    </p>
                </div>


                <div class="content-level-2">
                    <p class="fourth-title">2) router</p>
                    <p>
                        다음 챕터인 <span class="inner-link" @click="$router.push('/skill/router')">3-2. Router</span>에서 좀 더 자세히 다룰 개념입니다.<br>
                        간단히 말하자면 SPA에서 URL의 변경에따라 그에 맞게 매핑된 화면을 렌더링해주는 역할을 합니다.
                    </p>
                </div>


                <div class="content-level-2">
                    <p class="fourth-title">3) store</p>
                    <p>
                        전역으로 활용되거나, 특정 데이터의 저장이 필요한 경우 사용되는 개념이며
                        <span class="inner-link" @click="$router.push('/skill/store')">3-6. Store</span>에서 좀 더 자세히 다룰 개념입니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">4) use</p>
                    <p>
                        전역으로 활용하고자하는 모듈들을 플러그인이라는 형태로 Vue Application 인스턴스에 심어주는 역할을 합니다.
                        현재 예시에는 vue-router, vuex, 컴포넌트와 같이 가장 기본적인 코드를 보실 수 있으며,
                        이외에도 활용하고자하는 모듈이 있다면 use 함수를 통해 정의하시면 됩니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">5) mount</p>
                    <p>
                        createApp 함수를 통해 생성한 Vue Applicaiton 인스턴스가 어떤 HTML DOM에 렌더링 될 지를 정의합니다.
                        여기서 mount 함수의 파라미터로 쓰이는 값의 형태는 Javascript의 선택자(Selector)이며,
                        예시와 같이 '#app'을 전달할 경우 id 어트리뷰트가 app인 HTML DOM의 위치에 Vue Application 인스턴스를 렌더링하게 됩니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">6) entry 파일의 요약 정리</p>
                    <p>언급된 new Vue 키워드 사용시의 파라미터를 정리해보면, 아래와 같이 요약할 수 있습니다.</p>
                    <div class="gray-box">
                        <p>import : 전역으로 활용할 필요성이 있는 모듈들을 가져온다</p>
                        <p>createApp : Vue Application 인스턴스를 생성한다</p>
                        <p>router :  URL의 변경에 따른 화면 전환을 위해 사용되는 vue-router를 정의한다</p>
                        <p>store : 저장소 개념의 vuex를 활용하기 위해 정의한다</p>
                        <p>use : 전역으로 활용할 모듈을 플러그인의 형태로 심는다.</p>
                        <p>mount : 렌더링 될 HTML DOM을 명시한다</p>
                    </div>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#04.</span> 정리</p>
                <p>
                    정리해보면, index.html을 기점으로 해서 Vue 인스턴스가 생성되고
                    생성된 인스턴스가 가리키는 HTML DOM의 위치에 어떤 Vue 컴포넌트가 렌더링되는지에 대한 정의를
                    그림으로 모식화해보면 다음과 같습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/chain_file.jpg"/>
                    <span class="under-text">[ new Vue에 따른 파일간의 관계 모식도 ]</span>
                </div>
                <div class="gray-box">
                    <p>1. index.html은 id가 app인 div 태그를 가지며</p>
                    <p>2. entry 역할을 하는 파일(main.js)은 createApp 함수를 통해 Vue Application 인스턴스를 생성하며</p>
                    <p>3. 파라미터로 root component 역할을 할 Vue 파일, App.vue를 전달합니다.</p>
                    <p>4. use 함수를 통해 Vue Application 인스턴스 전역에서 활용할 플러그인(모듈)을 심어주고</p>
                    <p>5. mount 함수에 '#app'을 전달함으로써 index.html의 id가 app인 div를 지정합니다</p>
                    <p>6. 이로써 최종적으로는 index.html의 div 태그에 App.vue가 매핑되게 됩니다.</p>
                </div>
            </div>
        </div>

        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">-1.</span> 별첨</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> Vue 2.x의 entry 파일</p>
                <p>
                    2-1-2. Webpack의 별첨에서 잠깐 언급했던 내용으로 Vue 2.x에서는 아래와 유사한 형태로 entry 파일이 구성 될 겁니다.<br>
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue2_entry.jpg"/>
                    <span class="under-text">[ Vue 2.x 버전에서의 entry 파일 ]</span>
                </div>
                <p>
                    필요한 모듈들을 import하는 부분은 Javscript의 ES6에 기조하기 때문에 Vue 2.x든 3.x든 상관없이 동일합니다.<br>
                    다만 use 함수를 통해 플러그인을 심는 방법을 보면, 모듈로 가져온 <b>Vue 객체에 다이렉트로 심어주며</b>
                    createApp을 통해 Vue Application 인스턴스를 생성하는 Vue 3.x와는 달리
                    <b>new Vue 지시자를 통해 Vue 인스턴스를 생성</b>하는 차이가 있습니다.<br>
                    그리고 이때, Vue 인스턴스에서 필요로 하는 것들을 파라미터의 형태로 정의합니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> new Vue</p>
                <div class="content-level-2">
                    <p class="fourth-title">1) el</p>
                    <p>
                        index.html의 &lt;body&gt;태그 안에 있던 &lt;div&gt;태그는 id로 'app'를 가지고 있었습니다.
                        그리고 entry 역할을 하는 main.js에서는 위의 3번영역과 같이 new Vue 키워드를 통해 Vue 인스턴스를 생성하고 있습니다.
                        그리고 이 때 전달된 파라미터중에는 <b>el: '#app'</b>이라는 값이 있는데요.
                        여기서 el은 element의 약어이며 '#app'는 id가 'app'인 HTML DOM 태그를 가리킵니다.
                        즉, <b>new Vue를 통해 생성한 Vue 인스턴스를 id가 app인 DOM 태그에 렌더링하겠다</b>라는 의미입니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">2) router & store</p>
                    <p>
                        router와 store는 앞서 말씀드린 내용과 같이 각각
                        <span class="inner-link" @click="$router.push('/skill/router')">3-2. Router</span>,
                        <span class="inner-link" @click="$router.push('/skill/store')">3-6. Store</span>에서 좀 더 자세히 설명합니다.<br>
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">3) components & template</p>
                    <p>
                        Vue.js에서는 모든 *.vue 파일들을 '컴포넌트'라는 단위로 정의할 수 있습니다.<br>
                        이는 webpack에서 정의하는 '모듈'의 단위와 크게 다르지않는데요.<br><br>

                        Webpack을 통해 모듈 번들링을 하면, 각 모듈(파일)들이 가지고 있는 의존성을 바탕으로
                        관계를 정리하여, 하나의 통합된 build.js로 변환한다는 것을 설명했었습니다.

                        이때, components 파라미터는 아래 코드와 같이 import 해 온 다른 Vue 컴포넌트를
                        해당 Vue 파일내에서 활용하겠다고 명시적으로 정의하는 파라미터입니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/root_components.jpg"/>
                        <span class="under-text">[ new Vue의 root component로 전달되는 App.vue ]</span>
                    </div>
                    <p>
                        더불어 이렇게 components 파라미터에 정의한 컴포넌트는
                        template 파라미터에서 태그 형태로 명시함으로써 실제 화면에 렌더링이 되게 됩니다.
                        이때, template에 사용되는 태그명은 components에 정의한 형태가 기본형이며 alias기능을 사용할 수도 있습니다.
                        (이에 대한 상세 설명은 <span class="inner-link" @click="$router.push('/skill/component')">3-5. Component</span>에 있습니다)
                        <br><br>
                    </p>
                </div>
                <div class="content-level-2">
                    <p class="fourth-title">5) 파라미터들 정리</p>
                    <p>언급된 new Vue 키워드 사용시의 파라미터를 정리해보면, 아래와 같이 요약할 수 있습니다.</p>
                    <div class="gray-box">
                        <p>el : Vue 인스턴스가 렌더링 될 HTML DOM 태그를 정의</p>
                        <p>router : URL의 변경에 따른 화면 전환을 위해 사용되는 vue-router를 정의</p>
                        <p>store : 저장소 개념의 vuex를 활용하기 위해 정의</p>
                        <p>components: import를 통해 해당 인스턴스 내에서 활용 될 vue 컴포넌트</p>
                        <p>template: 해당 영역에 렌더링 될 컴포넌트의 태그</p>
                    </div>
                </div>
            </div>
        </div>


        <hr>
        <div class="bottom-navigation">
            <div class="right" @click="$router.push('/skill/router')">
                3-2. Router &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "architecture"
}
</script>

<style lang="scss" scoped>

</style>