<template>
    <div class="directory-page content-page">
        <div class="main-title"><span class="index">-1+2.</span> 프로젝트 헤쳐보기</div>
        <hr>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> 디렉토리분석</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> Summary</p>
                <p>
                    Vue 스타터 프로젝트는 Vue-cli 3를 통해 생성된 프로젝트로써, 아래와 같이 매우 심플한 구조를 가지고 있습니다.<br>
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_directory_explain.jpg"/>
                    <span class="under-text">[ Vue Starter Directory 구성 ]</span>
                </div>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> node_modules</p>
                <p>
                    <b>npm install</b>명령어를 실행하면 package.json에 정의된 npm 패키지들이 설치되게 됩니다.<br>
                    그리고 다운로드되어 패키지들이 설치되는 위치가 바로 node_modules 입니다.
                    해당 디렉토리에 설치된 npm 패키지들은, npm 레파지토리로부터 받은 라이브러리들이기 때문에 <b>내부파일들을 직접 열어서 수정하는 상황을 지양</b>해야 합니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> src/page</p>
                <p>
                    Vue.js로 만든 SPA 웹서비스의 <b>화면</b>단위를 모아놓은 디렉토리입니다.
                    해당 디렉토리에 있는 Vue파일들을 기준으로 라우터에 URL과 Vue 파일들이 매핑되어있으며,
                    Vue Application 인스턴스의 root component을 담당하는 App.vue 파일내의 &lt;router-view&gt; 태그위치에 알맞은 Vue 파일들이 렌더링되게 됩니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#04.</span> src/components</p>
                <p>
                    layouts 디렉토리가 <b>화면</b>단위를 구성하는 Vue 파일들이었다면,
                    components 디렉토리에는 그런 <b>화면 단위를 구성해주는 Vue 파일</b>들이 있게됩니다.
                    해당 디렉토리의 컴포넌트는 그때그때 필요한 것들을 만들어서 채워나가고 있으며,
                    현재는 button, icon, dropdown, textfield 정도의 4개 컴포넌트만 존재하고 있습니다.
                    이외에도 추가적으로 활용하고자 하는 커스텀 컴포넌트가 있다면, 해당 디렉토리에 정의하셔서 사용해주시면 됩니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#05.</span> src/mixin</p>
                <p>
                    Vue.js에서는 공통으로 사용하고자 하는 메서드나 변수등을 mixin으로 모듈화하여 사용하게 되어있습니다.<br>
                    해당 디렉토리에는 그러한 목적으로 생성된 Vue 파일들이 위치합니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#06.</span> src/scss</p>
                <p>
                    스타일에 관여하는 파일들이 위치하는 경로입니다.
                    스타터 프로젝트는 SCSS를 기본으로 활용하고 있기때문에 SCSS 파일들이 위치하고 있으며,
                    토큰값이나 외부 컴포넌트의 스타일을 오버라이드해야 할 경우에 해당 위치에 정의하시면 됩니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#07.</span> src/router & src/store</p>
                <p>
                    Vue.js 기반의 SPA 웹 서비스를 만들 때, 필수나 마찬가지인 vue-router와 vuex(store)에 대한 정의가 각각 위치하고 있습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> 핵심파일분석</div>
            <div class="content-level-1">
                <p>디렉토리를 기준으로 헤쳐보았으니, 핵심 역할을 하는 파일을 기준으로 헤쳐보겠습니다.</p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> src/main.js</p>
                <p>
                    createApp 함수를 통해 Vue Application 인스턴스를 생성하는 엔트리파일입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_entry_explain.jpg"/>
                    <span class="under-text">[ 엔트리 파일에 대하여 ]</span>
                </div>
                <p>
                    엔트리 파일의 주 역할은 Vue Application 인스턴스 생성이며, 인스턴스 생성시에 필요한 모듈들을 플러그인으로 심어주고
                    생성된 인스턴스가 HTML의 어느 위치에 렌더링 될 지를 정의해주는 것입니다.
                    이를 위해 필요한 모듈들을 import 해주며, createApp 함수를 사용하여 를 통해 인스턴스를 생성합니다.

                    생성된 인스턴스에서 전역으로 필요한 모듈들을 use 함수에 파라미터로 전달함으로써,
                    router, store, components와 같은 기능들을 Vue 파일 어디서든 사용할 수 있게됩니다.

                    또한, axios와 같이 사용빈도가 높은 모듈은 globalProperties를 통해 this 객체에 담음으로써
                    생성된 Vue Application 인스턴스 어디서든 편하게 활용할 수 있게해줍니다.
                    <br><br>
                    이렇게 정의하여 생성 될 Vue Application 인스턴스는,
                    createApp 함수에서 파라미터로 전달한 root component를 기점으로 Vue 파일들을 렌더링하게되며
                    렌더링이 될 HTML의 DOM은 mount 함수에 Selector를 전달함으로써 위치를 명시해주게 됩니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> src/App.vue</p>
                <p>
                    엔트리파일이 Vue 인스턴스 생성이 핵심이었다면, App.vue 파일은 &lt;router-view&gt;의 정의와 초기 필요 설정값들을 선언하는데에 있습니다.
                    SPA 구조에따라 URL이 변경되면 매핑된 화면으로서 변경이 되어야하는데, 이때 화면이 스위칭 되는 위치가 바로 &lt;router-view&gt;인 것입니다.
                    스타터 프로젝트의 App.vue의 경우 &lt;div class="app-outer"&gt;태그 내에 &lt;router-view&gt;가 있으며, 아래와 같이 &lt;gnb-frame&gt;와 함께 쓰이고 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_frame.jpg"/>
                    <span class="under-text">[ app-frame과 router-view ]</span>
                </div>
                <p>
                    위와같이 화면의 전체를 감싼 영역(녹색)이 App.vue의 root 태그인 &lt;div class="app-outer"&gt;이며,
                    그 안에 GNB 역할을 하는 &lt;gnb-frame&gt;(파랑 영역)과 URL의 변경에 따라 렌더링 될 대상인 &lt;router-view&gt;(노랑 영역)가 정의되어 있습니다.

                    엔트리파일을 통해 렌더링이 되는 최외곽의 Vue 파일(App.vue)에 &lt;router-view&gt;를 위치시킴으로써,
                    본 스타터 프로젝트와 같은 SPA에서도 URI의 변경시 필요한 화면들을 불러올 수 있는 것입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> src/page/*</p>
                <p>
                    URI의 변경에 따라 &lt;router-view&gt;에 실질적으로 렌더링 될 Vue 파일들이 모여있는 위치입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#04.</span> src/components/*</p>
                <p>
                    해당 디렉토리에도 Vue 파일들이 모여있지만, src/page와는 목적이 조금 다른데요.
                    디렉토리명에서도 알 수 있듯이, <b>컴포넌트 역할</b>로 사용되는 Vue 코드들이 현재 정의되어 있습니다.
                    이는 <span class="inner-link" @click="$router.push('/skill/component/custom')">3-5-2. Custom</span>에서 설명되었던 커스텀 컴포넌트역할의 코드들이 해당위치에 자리잡고 있으며,
                    현재는 button, textfield, dropdown, icon의 4개 컴포넌트가 정의되었고, 차후 필요한 컴포넌트를 늘려갈 예정입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#05.</span> src/router/index.js</p>
                <p>
                    URL의 변경에 따라 &lt;router-view&gt;의 위치에 스위칭 될 Vue 파일(컴포넌트)들에 대한 바인딩을 정의한 파일입니다.
                    스타터 프로젝트의 화면에 보이는 메뉴들을 눌렀을 때 동작해야하는 정보들(GNB와 LNB 메뉴에 연계된 화면들)이 src/router/index.js 파일에 정의되어있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_router.jpg"/>
                    <span class="under-text">[ Router의 정의 ]</span>
                </div>
                <div class="gray-box">
                    <p><b>path</b>: URL에서 '#' 뒤에 붙는 주소</p>
                    <p><b>name</b>: 해당 라우터 정보의 이름(필수는 아님)</p>
                    <p><b>component</b>: path로 정의된 값이 요청되었을 때 &lt;router-view&gt;에 렌더링 될 Vue 파일(컴포넌트)</p>
                    <p><b>meta</b>: 라우터의 이동시 필요한 메타데이터(필수아님)</p>
                </div>
                <p>
                    위 캡쳐는 index.js에 정의되어있는 URL과 컴포넌트(Vue파일)간의 매핑 정보입니다.<br>
                    path에 원하는 URI를 정의하고, 그 URI에 매핑 될 컴포넌트(Vue파일)들은 모듈의 형태로 import 해왔습니다.
                    위 코드를 예시로 몇가지를 설명해보자면,
                    사용자가 만약 www.vueguide.com/#/home 이란 경로로 접근시, Home.vue 가 &lt;router-view&gt; 위치에 렌더링되고
                    www.vueguide.com/#/main/base 라는 경로로 접근시 base.vue 파일이 렌더링된다는 의미입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#06.</span> src/store/*</p>
                <p>
                    <span class="inner-link" @click="$router.push('/skill/store')">3-6. Store(Vuex)</span>에서 설명되었던
                    Store들의 설정파일이 위치합니다. 모듈화를 위한 index.js가 현재 있으며, 각각의 용도에 따라 디렉토리가 정의되는 구조를 가지며
                    디렉토리내에서는 다시 Store의 아키텍쳐에 따라 state, mutations, actions, getters에 알맞은 Javascript 파일을 가집니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#07.</span> scss/*</p>
                <p>
                    스타터 프로젝트에 정의된 SCSS들은 아래와 같이 2가지 경우로 정의되어 있습니다.
                </p>
                <div class="gray-box">
                    <p>1. App.vue에 import</p>
                    <p>2. vue.config.js에 토큰으로써 정의</p>
                </div>
                <div class="content-level-2">
                    <p class="fourth-title">1) App.vue</p>
                    <div class="image-box">
                        <img src="@assets/example/starter_app_scss.jpg"/>
                        <span class="under-text">[ App.vue의 SCSS import ]</span>
                    </div>
                    <p>
                        우선 현재는 위와같이 globalClass.scss 파일만이 import되어있습니다.
                        App.vue는 root component 역할을 하기 때문에 위와 같이 명시되면 import된 파일들이
                        Vue Application 전체에 영향력을 끼치게 됩니다. 따라서 App.vue에서 import 대상이 되는 scss 파일들은,
                        전역으로 활용이 필요한 CSS 요소가 정의된 파일들입니다.
                        현재 import 된 globalClass.scss에는 아래와 같이 no-select라는 전역 용도의 CSS class가 정의되어 있습니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/scss_no_select.jpg"/>
                        <span class="under-text">[ globalClass.scss의 no-select ]</span>
                    </div>
                    <p>
                        이외에도 전역으로 선언이 필요한 class가 있다면 globalClass.scss에 해주시거나,
                        SCSS의 내역이 너무 많아서, 모듈화를 하듯 나누고 싶으시다면 별도의 scss 파일을 생성해서 import 를 통해 의존성을 선언해주시면 되겠습니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">2) vue.config.js</p>
                    <p>
                        SCSS를 통해 스타터는 토큰화된 변수와 함수를 제공하고 있으며, 이런 변수와 함수는 실제 Vue 코드에서 아래와 같이 활용이 가능합니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/scss_token.jpg"/>
                        <span class="under-text">[ vue.config.js의 토큰 import ]</span>
                    </div>
                    <p>
                        다만, 위와같이 Vue 코드에서 토큰을 활용하기 위해서는 Webpack에게 해당 토큰들이 어떤 의미를 가지고 있는지를 미리 알려줘야 합니다.
                        이를 위해 vue.config.js 파일에 아래와 같이 선정의를 해줌으로써, npm run serve 명령을 통해 node.js서버가 구동되면
                        Webpack이 Vue 파일내에 사용된 토큰들을 인지하게 되는 것입니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/scss_vue_config.jpg"/>
                        <span class="under-text">[ vue.config.js의 토큰 import ]</span>
                    </div>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#08.</span> src/menuData.json</p>
                <p>
                    해당 파일은 스타터 프로젝트에서 보여지는 메뉴 정보가 JSON 형태로 정의된 파일입니다.<br>
                    보통은 메뉴에 대한 관리를 서버가하며, 최초 접속시 서버로부터 메뉴에 대한 정보를 로딩해오는 게 일반적입니다만
                    스타터 프로젝트는 별도의 백엔드 역할을 하는 서버없이 node.js를 통해 단독으로 띄워지게 구성되었기 때문에
                    JSON 파일에 트리형태의 메뉴 데이터를 정의함으로써, GNB와 LNB를 구성하고 있습니다.
                    <br><br>
                    이때 주의할 점은, 화면상에 메뉴명을 클릭했을 때 이동하는 경로가 본 데이터들의 <b>route</b>로 지정된 값이기 때문에,
                    Vue Application 인스턴스의 라우터 내역이 정의되어있는 router/index.js의 path 값들과 일치해야 한다는 것입니다.
                    <br><br>
                    즉, <b>메뉴명을 클릭하면 menuData.json에 있는 route 값이 router.js의 path에 있는지 찾아보고
                    일치하는 path가 있을 경우 그에 바인딩된 Vue 컴포넌트를 &lt;router-view&gt;에 렌더링하는 것</b>입니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">-1.</span> 별첨</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> mainFrame</p>
                <p>
                    스타터 프로젝트의 전체적인 레이아웃은 다음과 같이 구성되어있습니다.
                </p>
                <div class="gray-box">
                    <p>1. App.vue : root Component로써 가장 바깥 영역</p>
                    <p>2. headFrame.vue : 화면 상단의 GNB 영역</p>
                    <p>3. sideFrame.vue : 화면 좌측의 LNB 영역</p>
                    <p>4. mainFrame.vue : router-view 를 통해 실질적으로 화면이 바뀌는 영역</p>
                </div>
                <p>
                    그리고 스타터는 현재 2중 &lt;router-view&gt;를 사용하고 있으며 App.vue에 1개, mainFrame.vue에 1개를 정의하고 있습니다.
                    App.vue에 정의된 &lt;router-view&gt;는 #02. src/App.vue의 설명을 다시 보시면, 노란색으로 블로킹 된 영역이 이에 해당하는 것을 확인하실 수 있습니다.
                    그리고 2번째 &lt;router-view&gt;는 GNB(&lt;head-frame&gt;)에 있는 메뉴를 누르면 그 노란색 영역에 렌더링되는 mainFrame.vue가 가지고 있는데요.
                    이와 연계되는 부분이 바로 router/index.js에 정의된 내용입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_main_frame.jpg"/>
                    <span class="under-text">[ router/index.js의 2레벨구조 ]</span>
                </div>
                <p>
                    이와같이, vue-router의 스펙을 정의한 파일(router/index.js)과 &lt;router-view&gt;가 정의된 파일(App.vue, mainFrame.vue)가
                    긴밀한 연관성을 가짐으로써, 어떤 URI가 들어왔을 때 어떤 화면이 어느 위치에 렌더링되는지가 정의되게 됩니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/starter/install')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; -1+1. 일단 서버켜기
            </div>
            <div class="right" @click="$router.push('/starter/playground')">
                -1+3. 가지고 놀기 &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>