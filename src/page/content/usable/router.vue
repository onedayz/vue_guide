<template>
    <div class="router-page content-page">
        <div class="main-title">
            <span class="index">3-2.</span> Router<span class="mini-title">(vue-router)</span></div>
        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> Summary</div>
            <div class="content-level-1">
                <p>
                    대부분의 웹 서비스는 N개의 화면들로 이루어져 있으며, URL의 변경에 따라 알맞게 매핑된 화면들이 호출되게 됩니다.<br>
                    예를 들어, JSP를 기반으로 한 http://www.uidev.com 라는 사이트가 있다고 가정하겠습니다.
                    이때 사용자가 http://www.uidev.com/main.do 라는 URL로 접근을 한다면 가장 뒤에 붙은
                    'main.do'가 path의 역할을 담당하며 그에 맞게 매핑된 main.jsp와 같은 파일을 호출하게 됩니다.
                    <br><br>
                    SPA 형태로 제공되는 웹 서비스도 이와크게 다르지 않습니다.
                    URL의 변경에 따라 그에 맞게 매핑된 화면이 호출되게 되는데요.
                    다만, 기존의 jsp나 php등에서는 URL의 변경을 웹 브라우져가 인지해서 서버로 요청하는 방식이었다면,
                    SPA는 브라우져가 해석하는 정적파일(HTML)이 하나인 서비스이기 때문에, <b>URL의 변경을 브라우져가 인지하는 대신에
                    이와 유사하게 동작하도록 npm 패키지의 도움</b>을 받습니다.
                    <br><br>
                    Vue.js의 경우 <b>vue-router</b>라는 npm 패키지가 해당 역할을 합니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> 설치하기</div>
            <div class="content-level-1">
                <p>
                    vue-router 패키지를 프로젝트에 설치하는 방법에는 2가지가 있습니다.<br>
                </p>
                <div class="gray-box">
                    <p>1. <b>npm install vue-router@4</b>명령어를 직접 실행</p>
                    <p>2. package.json에 패키지 명과 버전명을 명시한 후 <b>npm install</b>명령어 실행</p>
                </div>
                <div class="image-box">
                    <img src="@assets/example/router_packagejson.jpg"/>
                    <span class="under-text">[ package.json의 vue-router 명시 ]</span>
                </div>
                <p>
                    패키지의 설치가 완료되었다면, 이제 활용할 Vue Application 객체에 vue-router를 사용하겠다고 정의해주어야 합니다.
                    정의해주는 위치는 Vue Application 객체에 use 함수를 이용해 플러그인형태로 심어주시면 됩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/entry_router.jpg"/>
                    <span class="under-text">[ 엔트리파일의 vue-router 명시 ]</span>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> Router의 구성</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> 모식도</p>
                <p>
                    앞선 3-1. Architecture의 말미에 첨부된 파일간의 관계 모식도에 Router 역할을 하는 index.js를 추가해보았습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/router_detail.jpg"/>
                    <span class="under-text">[ router에 대한 관계도가 추가된 모식도 ]</span>
                </div>
                <p>
                    위 모식도와 같이 index.js 파일의 createRouter 함수를 통해 Router 인스턴스가 생성됩니다.
                    이때 Router 생성시 파라미터로 전달되는 값에는 URL의 path와 path에 매핑된 화면(Vue 컴포넌트)들이 정의되어지며,
                    entry 역할을 하는 main.js에 해당 Router 인스턴스가 모듈로써 import 되게 됩니다.
                    <br><br>
                    이렇게 import 된 Router 인스턴스는 활용될 Vue Application 인스턴스에 플러그인으로 심어지게되며,
                    이렇게 전달된 <b>Router 인스턴스는 Vue.js의 내부로직에 따라 App.vue의 &lt;router-view&gt;태그영역에 자리잡게 됩니다.</b>
                    즉, 이후 URL이 변경될 겨우 Router 인스턴스가 변경을 인지하고 router.js에 정의된 내용을 기반으로
                    매핑된 Vue 컴포넌트들이 &lt;router-view&gt;태그 위치에 스위칭되듯이 렌더링되게 되는 것입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> URL에 따른 매핑예제</p>
                <p>
                    URL에 매핑될 컴포넌트는 아래와 같이 모듈로써 import되어야하며, 이를 통해 적절한 URL과 매핑하는 방식을 소개합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/router_import.jpg"/>
                    <span class="under-text">[ router.js의 import 영역 ]</span>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">1) component 매핑</p>
                    <p>
                        가장 일반적인 경우이며 path와 Vue 컴포넌트를 아래와 같이 직접 정의합니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/router_component.jpg"/>
                        <span class="under-text">[ path와 component의 매핑 ]</span>
                    </div>
                    <p>
                        웹 서비스의 host가 http://www.vue.com 이라고 가정한다면,<br>
                        'http://www.vue.com/#<b>/home</b>'로 접근시 import된 Home 컴포넌트가
                        App.vue의 <br>&lt;router-view&gt; 태그 위치에 렌더링되게 됩니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">2) redirect 경로 설정</p>
                    <p>
                        이 방법의 경우 특정 URL로 접근시, Vue 컴포넌트를 매핑하여 호출하는게 아니라
                        다른 경로로 URL을 강제 변경하여 한 번 더 router를 이동하게 됩니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/router_redirect.jpg"/>
                        <span class="under-text">[ path와 redirect간의 정의 ]</span>
                    </div>
                    <p>
                        이 경우는 'http://www.uidev.com/#<b>/base</b>'로 접근시
                        'http://www.uidev.com/#<b>/base/mandatory</b>'로 경로가 변경되게되며
                        본예제를 기준으로는 한 번 더 'http://www.uidev.com/#<b>/base/mandatory/spa</b>'로 URL이 변경되어
                        BaseSpa 컴포넌트가 App.vue의 &lt;router-view&gt; 태그 위치에 렌더링되게 됩니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">3) children 설정</p>
                    <p>
                        웹 서비스의 메뉴를 구성하다보면 트리의 형태를 띄는 경우가 많으며
                        이 경우엔 공통된 키워드가 path에 반복적으로 사용되는 경우가 잦습니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/router_children.jpg"/>
                        <span class="under-text">[ router path의 children 설정 ]</span>
                    </div>
                    <p>
                        위 코드에서는 '/main'라는 path에 대해서 children이 배열로 정의되어 있습니다.<br>
                        이때 children 배열안에 정의된 요소들의 path에는 '/main'가 빠져있지만,
                        실제 URL을 통한 접근시에는 'http://www.vue.com/#<b>/main/intro</b>'로 접근해야
                        Intro 라는 컴포넌트가 렌더링되며<br>
                        만약 '/main'를 기입하지않고 'http://www.uidev.com/#<b>/intro</b>'로 이동을 하려하면
                        해당 path에 매핑된 컴포넌트가 존재하지 않기 때문에 Router에 정의한 사항을 따라 404 Not found 페이지로 이동하게 됩니다.
                    </p>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> 네비게이션 가드</p>
                <p>
                    URL에 따른 Router 이동시 권한이나, 사용자의 세션등을 체크하는 로직이 필요한 경우가 종종 있는데
                    vue-router는 이를 위해 네비게이션 가드(Navigation Guard)라는 개념을 가지고 있습니다.
                    <br><br>
                    그 중에서도 가장 많이 쓰이는 beforeEach와 beforeRouteLeave를 소개합니다.
                </p>
                <div class="content-level-2">
                    <p class="fourth-title">1) beforeEach</p>
                    <p>
                        beforeEach는 URL의 변경에 따른 Router의 이동시마다 전역레벨에서 사용되는 훅(Hook)입니다.<br>
                        따라서 beforeEach가 정의되는 위치는 createRouter 키워드를 통해 생성된 Router 인스턴스와 함께 있어야하며
                        아래와 같은 코드로 활용되게 됩니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/router_before_each.jpg"/>
                        <span class="under-text">[ router의 beforeEach ]</span>
                    </div>
                    <p>
                        beforeEach는 기본적으로 3개의 기본 파라미터를 가지며
                        각각의 객체가 가진 정보를 바탕으로 추가 로직을 구현할수도 있고 Store를 활용할 수도 있습니다.
                    </p>
                    <div class="gray-box">
                        <p>1. to : URL의 변경에 따른 다음 경로에 대한 정보가 담긴 객체</p>
                        <p>2. from : URL의 변경으로 이동해 온 이전 경로에 대한 정보가 담긴 객체</p>
                        <p>3. next : Router의 이동을 주관하는 콜백함수</p>
                    </div>
                    <p>
                        이 때 주의해야 할 점이 있는데,
                        beforeEach 훅을 사용했을 경우에는 <b>정상적으로 Router를 이동시켜주기위해
                        반드시 next(); 콜백함수를 호출</b>해 줘야합니다.
                        만약 훅을 정의하고 해당 콜백함수를 호출하지 않는다면, Router가 이동을 하지 않게됩니다.
                        또한, 특정 조건에 따라 이동하는 경로를 해당 Hook에서 비틀고 싶을 경우
                        next('/another')과 같이 <b>next 콜백함수의 파라미터로 경로를 주입</b>할 수 있습니다.
                    </p>
                </div>


                <div class="content-level-2">
                    <p class="fourth-title">2) beforeRouteLeave</p>
                    <p>
                        beforeRouteLeave는 컴포넌트의 내부 가드입니다.<br>
                        즉, beforeEach와 달리 전역에서 사용되는 훅이 아니라 선언된 컴포넌트에 한정적이며,
                        URL의 변경에 따라 현재 컴포넌트를 다른 컴포넌트로로 변경되기 전에 호출이 되게 됩니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/router_before_router_leave.jpg"/>
                        <span class="under-text">[ router의 beforeRouteLeave ]</span>
                    </div>
                    <p>
                        beforeEach 훅과 동일한 3개의 객체&콜백함수를 파라미터로 가지며,
                        마찬가지로 <b>정상적인 URL의 이동을 위해서는 next(); 콜백함수를 호출</b>해주어야 합니다.
                    </p>
                </div>

            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">4.</span> Router의 사용</div>
            <div class="content-level-1">
                <p>
                    new Router 키워드를 통해 생성된 Router 인스턴스는, 개발 및 운영시에 아래와 같은 2개의 전역 객체를 가지게 됩니다.
                </p>
                <div class="gray-box">
                    <p>this.$route : 현재 전역으로 생성된 Router 인스턴스의 종합정보객체</p>
                    <p>this.$router : $route와 달리, 순수한 Router 객체</p>
                </div>
                <p>
                    현재 경로나 router.js에 정의된 path&component 정보, 페이지 이동시 전달된 query파라미터와 같이
                    인스턴스화해서 사용중인 Router객체가 내포하고 있는 '정보'를 알고 싶다면 this.$route 객체를 참고하셔야 합니다.
                    <br><br>
                </p>
                <p>
                    만약 그게 아니라, 페이지를 이동시키거나 옵션을 변경하는 것과 같이
                    vue-router 라는 패키지에 정의된 Router 자체에 특정 액션을 취해야하는 경우에는 this.$router 객체를 활용해 주셔야합니다.
                    그래서 우리는 흔히 GNB나 LNB, 버튼이나 링크를 통해 URL을 변경하고 페이지를 전환하고자 할 때에는 아래와 같이
                    this.$router.push('경로')의 방식으로 Router를 이동시켜줍니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/router_push.jpg"/>
                    <span class="under-text">[ 루트 경로로 이동하는 this.$router.push ]</span>
                </div>
                <p>
                    this.$router.push를 통한 라우터의 이동은 &lt;template&gt;영역의 이벤트에 정의할 수도 있고<br>
                    &lt;script&gt;에서도 선언하여 활용할 수 있습니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">-1.</span> 별첨</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> Vue 2.x의 vue-router 설치</p>
                <p>
                    앞선 목차들에서 설명했던 것처럼, Vue 3.x 버전부터는 Vue.js의 활용법이 전면적으로 변경되었기 때문에
                    연계된 vue-router와 같은 3rd 파티 패키지들의 설치 버전도 조금 달라지게 되었습니다.
                    따라서 Vue 3.x 버전을 사용하시는 경우에는 흔히 쓰는 방식인 <b>npm install vue-router 명령어를 사용하시면 안 되구요.</b>
                    본문의 2. 설치하기 항목에 안내된 것과 같이 <b>npm install vue-router@4</b>처럼 버전까지 명시해주셔야 합니다.
                    (vue-router는 버전을 갈라침으로써 Vue 2.x와 3.x에 대응하고 있습니다)
                </p>
                <div class="gray-box">
                    <p>1. Vue 2.x 를 쓰신다면 : <b>npm install vue-router</b></p>
                    <p>2. Vue 3.x 를 쓰신다면 : <b>npm install vue-router@4</b></p>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> URL에 '#'이 붙는 이유</p>
                <p>
                    웹에서 URL을 인지하는 주체는 웹 브라우져이며, 브라우져가 URL의 변경을 감지하고
                    그에 알맞은 요청을 함으로써 적절한 웹 페이지가 로딩되어 렌더링되게 됩니다.
                    <br><br>
                    하지만 Vue.js나 React.js와 같은 SPA기반의 프론트엔드 프레임워크에서는
                    브라우져가 해석하는 정적파일(HTML)이 하나이기 때문에 URL이 변경되더라도
                    타 사이트로의 이동이 아닌이상 별도의 요청이 발생하지 않아야합니다.
                    하지만 SPA환경에서도 화면의 변경은 가능해야했고 이에 연동된 URL의 변경은 불가피한 것이었기에
                    Router의 역할을 하는 npm 패키지들은 URL의 path영역에 해시태그(#)를 끼워넣음으로써
                    브라우져가 URL의 변경을 인지하지 못 하도록 하였습니다.
                    <br><br>
                    물론, 이러한 해시태그를 사용하지 않고 기존과 같은 URL형태를 유지하는
                    history 모드도 제공되고 있습니다만 일반적인 SPA에서는 URL에 해시태그가 존재하고
                    해시태그의 뒷부분을 path의 개념으로 각 화면에 매핑해주게 됩니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/skill/architecture')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 3-1. Architecture
            </div>
            <div class="right" @click="$router.push('/skill/axios')">
                3-3. Axios(ajax) &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "router"
}
</script>

<style lang="scss" scoped>

</style>