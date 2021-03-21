<template>
    <div class="overview-page content-page">
        <div class="main-title"><span class="index">1.</span> Overview</div>
        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> about Vue.js</div>
            <div class="content-level-1">
                <p>
                    Vue는 구글 출신 개발자인 Evan You에 의해 만들어진 프론트엔드 프레임워크 라이브러리입니다.<br>
                    웹 애플리케이션의 클라이언트(사용자 인터페이스) 개발을 위해 사용되는
                    오픈 소스이며, 자바스크립트를 기반으로 한 프레임워크입니다.
                    구글에서 Angular를 사용해 개발하던 Evan You는 ANgular의 장점만을 추출하여 정리한 뒤에,
                    기능을 추가하면서도 <b>가벼운</b> 프레임워크를 만들기를 희망했으며 그것이 Vue를 개발하게 된 동기라고 했습니다.
                    <br><br>
                    2014년에 릴리즈 된 Vue의 1.x 버전은 Angular와 React에 비해 그렇게 큰 이목을 끌지 못 하였으나, <br>
                    2016년에 릴리즈 한 <b>2.x 버전부터 Virtual DOM을 도입</b>하고 이전 버전에 비해 많은 부분이 개선되면서 <br>
                    2021년인 현재는 React와 함께 프론트엔드 프레임워크 시장을 양분하는 라이브러리로 자리잡게 되었습니다.<br>
                    (2020년 9월에 Vue.js 3.0 버전이 릴리즈 되었습니다)
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> vs React & Angular</div>
            <div class="content-level-1">
                <p>
                    Vue가 구글출신 개발자에 의해 만들어졌다면
                    Angular는 구글에서 만들어진 프론트엔드 프레임워크 라이브러리이며
                    React는 Facebook에서 만든 프론트엔드 프레임워크 라이브러리입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue_graph.jpg"/>
                    <span class="under-text">[ Github의 Star 지수 : Vue, React, Angular ]</span>
                </div>
                <p>
                    많은 영역에서 Vue가 좋은지 React가 좋은지에 대한 의견이 분분하지만,
                    Github Star 지표를 비롯하여 성능적인 지표에서 둘은 크게 차이가 나지 않습니다
                    (사실상 Angular는 현재로써 이 둘과는 격차가 많이 벌어져있습니다)<br><br>
                    아래 글은 프로덕션 앱의 성능을 테스트하는 회사인 logrocket의 블로그에 올라온 포스팅에서 발췌했습니다.<br>
                    (원본 포스팅 <a href="https://blog.logrocket.com/angular-vs-react-vs-vue-a-performance-comparison/" target="_blank">바로가기</a> )
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> DOM을 수정 할 경우</p>
                <div class="image-box">
                    <img src="@assets/example/dom-manipulation-comparison.jpg"/>
                    <span class="under-text">[ DOM manipulation ]</span>
                </div>
                <p>
                    이 지표에서는 Angular가 React와 Vue보다 앞서는 의외의 결과를 보여줍니다.<br>
                    해당 테스팅은 화면에 렌더링 된 DOM 객체에 대한 조작과 관련된 사항을 테스트한 내용으로써
                    그려진 Row를 선택하거나 Row의 위치를 바꿔보거나, 10,000개의 Row를 생성하는 것과 같은 점을 테스트한 사항입니다.
                    <br><br>
                    물론, Angular가 React, Vue에 비해 월등할 정도의 퍼포먼스를 보이는 것은 아니며
                    React와 Vue 또한 어느 한 쪽이 확연히 뛰어나다기보다 엎치락 뒤치락하는 결과를 보여주고 있습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> Startup time</p>
                <div class="image-box">
                    <img src="@assets/example/startup-time-comparison.jpg"/>
                    <span class="under-text">[ Startup time ]</span>
                </div>
                <p>
                    웹 어플리케이션을 최초 로딩할 때와 관련된 지표를 측정한 결과입니다.
                    Angular의 경우 해당 지표부터 React와 Vue에 비해 퍼포먼스가 떨어지는 것이 나타나는데,
                    대표적으로 스크립트의 준비(bootup) 시간이 3배 이상 차이가 나는 것을 보실 수 있습니다.
                    Vue와 React 간에는 Vue가 모든 지표에서 우세하긴하나 절대적일만큼의 확연한 차이는 나지 않습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> 메모리 할당</p>
                <div class="image-box">
                    <img src="@assets/example/memory-allocation-comparison.jpg"/>
                    <span class="under-text">[ Memory allocation ]</span>
                </div>
                <p>
                    Angular가 확실히 뒤쳐지는 것이 지표로 드러나며,
                    Vue와 React구도에서도 Vue가 우세한 퍼포먼스를 보임을 알 수 있습니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/set')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 1. Vue.js 개발환경 설정
            </div>
            <div class="right" @click="$router.push('/base/mandatory/spa')">
                2-1-1. SPA &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "overview"
}
</script>

<style lang="scss" scoped>

</style>