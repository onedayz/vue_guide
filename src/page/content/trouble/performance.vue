<template>
    <div class="performance-page content-page">
        <div class="main-title"><span class="index">4-2.</span> Performance</div>
        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> Tab UI</div>
            <div class="content-level-1">
                <p>
                    결론부터 말씀드리자면, <b>Tab UI는 SPA에서 매우 좋지 않은 퍼포먼스</b>를 가집니다.<br>
                    특히 대량의 데이터를 보여야하는 화면 UI 이면서 IE를 사용해야 하는 경우라면 데이터의 양에 따라 브라우져가 뻗어버리고 하는데요.
                    이는, 현장에서도 종종 이슈화되는 사항으로써 Vue.js기반의 서비스를 구축하시는 개발자 및 기획, 담당자분들께는 특히 유념해주셔야 하는 부분입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/tabui.jpg"/>
                    <span class="under-text">[ 네이버의 Tab UI ]</span>
                </div>
                <p>
                    보통 위와 같은 형태를 우리는 Tab UI 라고 하며, 네이버의 메인에는 위와 같은 Tab UI로 웹 페이지가 구성되어있습니다.<br>
                    이렇게 통상적으로 활용되는 <b>Tab UI가 왜 Vue.js에서 이슈</b>가 되느냐? 에 대해 짚어보자면 명확하게는 Vue.js의 문제가 아니라<br>
                    <b>SPA라는 아키텍쳐가 가지는 근본적인 문제점</b>이라고 할 수 있습니다.
                    <br><br>
                    SPA는 누누이 말씀드렸던 것처럼, 하나의 정적파일(HTML)을 기반으로 동작하는 구조입니다.<br>
                    그렇기때문에 프론트엔드(클라이언트)에서 활용되는 데이터의 라이프사이클 관리가 굉장히 중요합니다.
                    <br><br>
                    예를들어, 페이스북을 떠올려주세요. 페이스북은 가장 대표적인 SPA 구조의 웹 서비스로써 예로부터 한 가지의 고질적인 이슈를 가지고 있는데요.
                    바로, 스크롤을 계속 내려서 새로운 피드가 추가되면 그 만큼의 <b>새로운 데이터가 계속 한 페이지상에 축적</b>되고
                    당연하게도 그로인해 서비스가 점점 느려진다는 것입니다.
                    <br><br>
                    SPA라는 구조적 약점이 여기서 드러나는데요. 바로 하나의 정적파일이 기점이기때문에,
                    로딩된 현재에 데이터가 계속해서 쌓이기때문에 서비스는 자연스레 느려질 수 밖에 없습니다.
                    이를 위해 로딩된 데이터의 라이프사이클을 별도로 관리하거나 주기적으로 화면을 새로고침해주는 기능을 종종 넣기도 하는데요.
                    특히, Garbage Collector가 현재의 글로벌 트렌드를 따라오지 못 하는 IE의 경우엔 이와같은 문제점이 여타 브라우져보다 훨씬 심합니다.<br>
                    (이러한 현상과 4-1. Memory leak에서 설명한 내용은 밀접한 관계를 가지고 있습니다)
                    <br><br>
                    그렇기때문에 <b>Tab UI를 통해 각 Tab마다 대량의 데이터를 로딩하는 화면을 구성한다면,
                    Garbage Collector의 동작 의존성이 높은 웹 브라우져의 특성상 일반 개발자가 개선할 수 있는 영역이 아니기때문</b>에 가급적 지양하심을 권장드리며
                    만약 Tab UI를 필수로 구성해야하는 화면이라면 가급적 Tab의 교체시기마다 데이터의 라이프사이클을 별도로 관리할 수 있게끔 개발하는 걸 추천드립니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> v-if vs v-show</div>
            <div class="content-level-1">
                <p>
                    v-if와 v-show 디렉티브는 실제로 화면에 렌더링 되었을 때 시점으로, 아래와 같은 차이를 보입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/v_if_false.jpg"/>
                    <span class="under-text">[ v-if와 v-show ]</span>
                </div>
                <p>
                    위 캡쳐는 <span class="innere-link" @click="$router.push('/skill/structure/template')">3-4-2. template</span>에서 설명한 내용으로,
                    able이라는 변수의 true/false 값 여부에따라 화면에 렌더링되는 차이점을 보여주고 있습니다. Vue.js는 Virtual DOM 개념이 적용되었기 때문에
                    만약 데이터의 변경에 따라서 화면상에 보이는 DOM의 형태도 변경이 되어야한다면, Vue.js는 화면 전체를 리렌더링하는게 아니라 해당되는 영역만 리랜더링하게됩니다.
                    able이라는 <b>변수가 변하더라도 화면 전체가 바뀌는 것이 아니라 v-if(혹은 v-show) 디렉티브를 사용한 DOM만 리렌더링</b>하게 되는 것이죠.
                    <br><br>
                    그리고 Vue.js를 기반으로 개발시, DOM의 리렌더링에 가장 많이 관여를 하는 디렉티브가 v-if / v-show 입니다.
                    v-if는 최종 렌더링된 HTML 태그에서 해당 DOM을 완전히 지웠다가 다시 생성하고 지웠다가 생성하는 반면에
                    v-show를 통해 렌더링 된 HTML 태그는, CSS의 display 속성이 'none'과 '값이 없는 상태'를 오가면서 화면에 렌더링되게됩니다.
                    <br><br>
                    바로 이 점이 성능에 관여하는 부분인데요. 아무리 Virtual DOM을 활용해서 해당되는 부분만 변경된다하더라도,
                    단순히 CSS의 한 요소를 변경하는 것과 매번 생성하고 제거하는 방식에는 퍼포먼스가 차이가 나기마련입니다.<br>
                    당연히, <b>관여하는 DOM이 늘어날수록 v-if/v-else가 v-show보다는 느립니다.</b>
                    <br><br>
                    그렇기에 Vue.js에서도 다변하는 데이터에 연관된 DOM에 대해서는 v-show 사용을 권장하며,
                    v-if/v-else는 반대로 화면의 최초 로딩시에 결정되어 렌더링되는 DOM이나 다변하지않는 데이터에 연관된 DOM,
                    혹은 전체 HTML태그에 노출하면 안 되는 요소에 사용하는 것을 권장하고 있습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> Stateful vs Functional</div>
            <div class="content-level-1">
                <p>
                    본 가이드에서 설명하지않았지만, Vue.js에서는 화면을 렌더링하는 방법이 총 2가지가 있습니다.
                    하나는 이미 설명했던 &lt;template&gt;태그영역을 활용하는 것이고, 나머지 하나는 render 함수를 활용하는 것입니다.
                    <br><br>
                    좀 더 명확하게는, <b>사실 실제 실행되는 건 render 함수이며 Vue.js가 내부적으로 &lt;template&gt;영역의 내용을
                    render 함수로 활용되게끔 치환</b>해주는 작업을 한 번 더 하게 됩니다.
                    그리고 너무 당연하겠지만, render함수를 직접 코드로써 활용하게 되면 치환이라는 한 번의 프로세스 과정이 생략되기때문에
                    성능적에서 개선을 이룰 수 있습니다.
                    <br><br>
                    다만, 성능에서의 이점을 얻는만큼 render 함수를 사용하면 잃는 것도 있는데요.<br>
                    우선, 코드 가독성이 굉장히 떨어지고 jQuery를 활용하듯 DOM 하나하나를 직접 생성하고 추가해줘야하며,
                    기존에 v-for, v-if와 같은 디렉티브들을 비롯해서 라이프사이클함수들도 사용할 수가 없습니다.
                    (이에 대한 대체제로 우리는 Javascript에서 활용하는 if/else나 map을 일일이 활용해야 합니다)
                    <br><br>
                    간단한 성능테스트 예제는 <a href="https://codesandbox.io/s/vue-stateful-vs-functional-yterr" target="_blank">여기(Vue Stateful vs Functional)</a>에서 확인하실 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/stateful_funtional.jpg"/>
                    <span class="under-text">[ Stateful VS Functional ]</span>
                </div>
                <p>
                    위 캡쳐는 링크된 사이트에서 테스트한 결과로 1000개의 랜덤한 데이터를 렌더링했을 때입니다.
                    물론, 테스트때의 환경이나 코드, 렌더링하는 DOM의 수에 따라 다르나 본 예시를 기준으로는 2배가량의 성능 차이를 보이고 있습니다.
                    <br><br>
                    stateful과 functional 방식에는 나열한 것과 같은 장단점이 각각있기 때문에, 개발해야하는 환경 및 화면의 구성에 따라
                    명확한 요구사항 정의를 바탕으로 렌더링 방식을 선택하는 것을 권장합니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">-1.</span> 별첨</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> IE의 Garbage Collector</p>
                <p>
                    IE는 개학이 다가올 때쯤 방학숙제를 시작하는 아이들처럼 Garbage Collector가 동작합니다.
                    쉽게말해, Garbage 대상들을 묵혀뒀다가 내부적으로 정의된 역치값에 도달하면 일괄적으로 정리하게끔 되어있는데요.
                    즉, 사용하는 동안에는 데이터가 축적되어도 해당 역치에 도달하지않는이상 묵혀둔다는 것입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/ie_memory.jpg"/>
                    <span class="under-text">[ 최초 접속시의 Knox Portal의 메모리와 몇번의 클릭이후 메모리 ]</span>
                </div>
                <p>
                    <b>Ctrl + Shift + U</b> 단축키를 눌러보시면 위와같이 IE 브라우져가 내장한 성능지표가 나오게 되는데요.<br>
                    적당한 성능 테스트를 위해 네이버 쇼핑 홈으로 들어가보았습니다.
                    최초 접속시엔 180 ~ 200MB를 오가던 메모리사용량이,
                    카테고리에 맞는 탭을 몇 번 오가고 인피니티 스크롤로 구성된 페이지를 활용하여 데이터를 로딩하여 쌓으니
                    곧 300MB를 훌쩍 뛰어넘을 정도로 용량이 증가하는 것을 확인하실 수 있습니다.
                    <br><br>
                    이와 같은 방식으로 데이터를 축적시키는 테스트를 계속 해보면 1GB의 언저리쯤에서 브라우져가 락다운 되게됩니다.<br>
                    특히나 이런 현상은, 브라우져가 정의한 Garbage의 역치값을 한 번에 뛰어넘는 대량의 데이터가 로딩 될 경우에 빈번하게 발생합니다.
                    Garbage Collector가 동작하기도전에 데이터의 양이 포화되어버리기 때문에요.
                    <br><br>
                    따라서, IE로 사용되는 웹 서비스를 구축하신다면 데이터의 양에 따른 화면 UI 구성도 기획단계에서 함께 고려되어야 합니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/trouble/memory')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 4-1. Memory
            </div>
            <div class="right" @click="$router.push('/starter/install')">
                -1. 별첨 : Vue 스타터 프로젝트 &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>