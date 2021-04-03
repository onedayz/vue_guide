<template>
    <div class="store-page content-page">
        <div class="main-title"><span class="index">3-6.</span> Store<span class="mini-title">(Vuex)</span></div>
        <hr>

        <div class="content-box">
            <div class="content-level-1">
                <p>
                    Vue.js 기반의 SPA에서는 Vue 파일을 포함한 N개의 모듈들이 하나의 Javascript로 규합되고,
                    마찬가지로 하나의 HTML 파일내에 &lt;script&gt;태그와 해당 Javascript파일의 경로를
                    전달함으로써 웹 서비스가 구축되게 됩니다.
                    <br><br>
                    <b>Store</b>는 이런 웹 서비스를 구축할 때, 전역으로 활용되어야 하는 데이터를 저장하고 호출하여 사용하기 위한 개념입니다.
                    공식 정의는 <b>Vue.js기반의 애플리케이션에 대한 상태관리 라이브러리</b>입니다.
                    여기서의 상태가 뜻하는 것이 앞서말한 '데이터'이며, 대표적으로 사용자의 로그인정보라던가, 메뉴구성과 같이 어떤 화면에서도 접근이 가능해야 하는 데이터가 이에 해당합니다.
                    사용시 주의할 점은 <b>전역</b>의 개념이 적용되기때문에 호출법만 안다면 어떤 Vue 파일에서도 해당 데이터에 대한 접근이 가능합니다.
                </p>
                <br><br>
                <p>
                    URL의 변경에 따른 라우터의 변경(Vue화면의 교체)을 vue-router라는 npm 패키지의 도움을 받았듯이
                    Store 또한, vuex라는 npm 패키지의 도움을 받아서 활용하게 됩니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> 설치하기</div>
            <div class="content-level-1">
                <p>
                    vuex를 사용하기 위해 필요한 사전 작업은 vue-router와 흡사하며,
                    아래 2개의 방법중 하나를 선택하여 설치하시면 됩니다.
                </p>
                <div class="gray-box">
                    <p>1. <b>npm install vuex@next</b>명령어를 직접 실행</p>
                    <p>2. package.json에 패키지 명과 버전명을 명시한 후 <b>npm install</b>명령어 실행</p>
                </div>
                <div class="image-box">
                    <img src="@assets/example/store_package_json.jpg"/>
                    <span class="under-text">[ package.json의 Vuex 명시 ]</span>
                </div>
                <p>
                    패키지의 설치가 완료되었다면, 이제 활용할 Vue Application 객체에게 vuex를 심어주어야 하는데요.
                    이는 vue-router를 심어줄때와 마찬가지로, createApp 함수를 통해 생성된 <b>Vue Application 객체에 use 함수를 활용하여
                    위 예제와 같이 플러그인</b>으로 심어주면 되겠습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/store_entry.jpg"/>
                    <span class="under-text">[ 엔트리파일의 Vuex 명시 ]</span>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> Vuex의 3대장(State, Mutations, Actions)</div>
            <div class="content-level-1">
                <div class="image-box">
                    <img src="@assets/example/vuex_default.jpg"/>
                    <span class="under-text">[ Vuex의 기본 모식도 ]</span>
                </div>
                <p>
                    Vuex와 관리된 핵심 개념에는 State, Mutations, Actions의 3대장이 있으며,
                    해당 개념들은 서로간에 단방향적인 특성을 가지고 있습니다.
                    모식도에서와같이, State에 대한 접근은 Mutations이 담당하고 Mutations에 대한 접근은 Actions가,
                    Actions에 대한 접근은 Vue 컴포넌트로써 Vuex외적인 영역에서만 접근하게 되어있습니다<br>
                    (물론 이는 강제적인 것은 아니며, Actions에서도 얼마든지 State에 접근이 가능합니다.
                    다만, 권장사항은 위와같기때문에 지켜주시는 것이 좋습니다)
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> State</p>
                <p>
                    Vuex는 상태관리 라이브러리이며, 그렇기에 관리할 <b>상태</b>가 필수적이며
                    이때의 상태가 바로 <b>State</b>입니다.<br>
                    즉, 데이터를 가지고 있는 주체 혹은 이해하기 쉽게 <b>변수명</b>이라고 생각하시면 됩니다.<br>
                    (JAVA의 VO(혹은 DTO)클래스를 예로 들자면 <b>private String name;</b>과 같이 선언된 변수가 state입니다)
                </p>
                <div class="image-box">
                    <img src="@assets/example/store_state_default.jpg"/>
                    <span class="under-text">[ Vuex의 State 예제 ]</span>
                </div>
                <p>
                    모듈로써 활용되기 위해 JSON 형태(Key-Value)를 띄고있으며 Key값을 토대로
                    Mutations에서 State에 접근하여 State를 변경 할 수 있습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> Mutations</p>
                <p>
                    State가 '상태관리 라이브러리'라는 정의에서 <b>상태</b>를 담당했다면
                    Mutations은 <b>관리</b>를 담당하고 있습니다.<br>
                    즉, State가 가지고 있는 데이터(상태)를 변경하려면 Mutations에 정의된 함수를 사용해야합니다.
                    <br><br>
                    여기까지 들으시면 굉장히 비슷한 개념이 하나 떠오르실 수도 있습니다.
                    바로 JAVA의 캡슐화(Encapsulation)입니다.
                    앞서서 State를 JAVA의 VO(혹은 DTO)와 비교해드렸었는데요.
                    같은 맥락으로써, 매칭을 해보면 State가 Attribute, Mutations가 Method 역할을 하고 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vuex_mutations.jpg"/>
                    <span class="under-text">[ Vuex의 Mutations 예제 ]</span>
                </div>
                <p>
                    Mutations의 기본은 Javascript의 함수와 동일한 형태를 띄고있습니다.<br>
                    여기서 주의할 부분은 이 함수들의 <b>첫 번째 파라미터</b>인데요.<br>
                    Mutations로 정의되는 함수의 <b>첫번째 전달인자는 무조건 state 객체</b>입니다.
                    이는 Vuex 내부적으로 정의된 사항으로써, 개발자가 변경할 수 없는 내용이며
                    해당 객체에는 JSON 형태로 정의되었던 State의 모든 Key-Value 쌍들이 존재하고 있습니다.
                    그리고 이 객체를 통해 Mutations 함수 내부에서 State의 상태들이 가지고 있는 값에 접근할 수 있는 것입니다.
                    <br><br>
                    여기서 한 가지 더, 짚어야 할 부분은 <b>첫 번째 파라미터 외의 파라미터들</b>입니다.
                    State에 대한 접근을 Mutations을 이용해야만 하듯이
                    Mutations에 대한 호출을 위해서는 Actions를 이용해야 합니다.
                    그리고 이때 Actions에서 Mutations를 호출하면서 넘겨주는 파라미터가 있을 경우,
                    그 파라미터들이 바로 Mutations에서 두 번째 파라미터부터 순차적으로 들어가게 됩니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> Actions</p>
                <p>
                    State가 '상태', Mutations가 '관리'를 담당하고 있으며 Vuex는 상태관리 라이브러리라고 했습니다.
                    Actions는 이러한 상태관리체제를 실제 활용소에서 호출할 때 활용되며,
                    만약 상태관리를 하기 전에 필요한 비동기적 프로세스(보통은 서버와의 연계)가 필요하다면
                    Actions에서 그 프로세스를 정의해주어야 합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vuex_actions.jpg"/>
                    <span class="under-text">[ Vuex의 Actions 예제 ]</span>
                </div>
                <p>
                    Actions에 정의되는 내용또한, Mutations처럼 함수의 형태를 띄고 있습니다.<br>
                    그리고 마찬가지로 정의되는 함수의 <b>첫 번째 파라미터</b>가 정해져있는데요.
                    바로 store 객체로 파라미터가 고정되어 있습니다.
                    Mutations에서 state가 Vuex의 state였듯이,
                    Actions에서 파라미터로써의 store도 인스턴스화 된 Vuex 객체인 store를 가리킵니다.
                    이를 통해 Actions 내에서 Mutations에 정의된 함수를 호출 할 수 있게되며,
                    이때 캡쳐에서 볼 수 있듯이 store의 내장함수인 <b>commit</b>을 활용하게 됩니다.
                    <br><br>
                    commit 함수를 통해서 Mutations를 호출할 때도 전달되는 <b>파라미터가 중요</b>한데요.
                    commit 함수의 첫번째 파라미터는 Mutations의 이름이며,
                    뒤이어 전달되는 파라미터들이 바로 Mutations의 함수를 정의할 때 state 다음으로 두번째로 정의되는 파라미터에 순서대로 매핑되게 됩니다.
                </p>
                <div class="gray-box">
                    <p>
                        예시를 들어보자면<br>
                        1. Actions에서 store.commit('sampleFunc', {'name' : 'Ace', 'age': '22'})과 같이 정의됐을경우<br>
                        2. Mutations에 'sampleFunc'라는 이름으로 정의된 함수가 호출이되며<br>
                        3. 이 함수가 sampleFunc(state, payload) 와 같은 형태로 정의되어있다면<br>
                        4. 두 번째 파라미터인 payload는 {'name' : 'Ace', 'age': '22'} 라는 객체를 가리키게 되는 겁니다.<br>
                        5. 이를 통해 Mutations의 sampleFunc은 state.person = payload 같은 코드로 state의 값을 변경하는 것입니다.
                    </p>
                </div>
                <p>
                    또한, <b>Vuex를 통해서 관리되는 상태와 유관한 비동기 프로세스(Axios / ajax)가 있다면
                    모식도 및 예시코드와 같이 Actions 함수내에서 정의하는 것을 권장</b>하고 있습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> 코드에서 활용하기</div>
            <div class="content-level-1">
                <p>
                    State는 Mutations가 수정하고, 수정을 위한 Mutations는 Actions가 호출합니다.<br>
                    그리고 이러한 Actions를 호출하는 주체가 바로 <b>Vue 컴포넌트</b>입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vuex_dispatch.jpg"/>
                    <span class="under-text">[ Vuex의 dispatch ]</span>
                </div>
                <p>
                    인스턴스화 된 Vue Application 객체는 코드내에서 this라는 지시자를 통해 접근할 수 있으며,
                    이 this는 $router와 같이 인스턴스화 할 때 플러그인으로 심어놓은 객체들을 가지고 있습니다.
                    vue-router인스턴스를 전달한 객체가 $router 혹은 $route이듯이
                    <b>Vuex 인스턴스는 $store라는 고유객체명을 가지고 this안에 내포</b>하게 됩니다.
                    <br><br>
                    그리고 개발자는 Vue 컴포넌트내에서 <b>dispatch</b>라는 Vuex의 내장함수를 이용해
                    Actions에 정의한 함수를 호출하며, 이는 Actions내에서 Mutations를 호출해주던
                    commit과 동일한 파라미터 순서를 가집니다.
                    즉, dispatch의 첫번째 파라미터는 Actions의 함수명이며
                    두번째부터는 Actions의 함수가 전달받는 실제 파라미터 값들로 구성되어집니다.
                </p>
                <div class="gray-box">
                    <b>정리해보자면</b><br>
                    1. Vue 컴포넌트에서는 this.$store.dispatch를 활용해 Actions를 호출하고<br>
                    2. 호출된 Actions에서는 비동기 프로세스와 같은 추가 프로세스 이후에 commit을 이용해 Mutations를 호출하며<br>
                    3. Mutations는 파라미터로 전달받은 state 객체를 통해 State의 값을 변경합니다.
                </div>
            </div>
        </div>

        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">-1.</span> 별첨</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> 3대장에 따라붙는 Getters</p>
                <p>
                    Getters는 Vuex에서 부가적인 개념인데요.<br>
                    비유하자면, Getters는 Vue컴포넌트의 &lt;script&gt;영역 구성요소중 computed와 같은 역할을 맡고 있습니다.
                    computed가 data영역의 변수에 종속적이었듯이,
                    <b>Getters는 State의 상태에 종속적이며 이를 통해 계산이 필요한 결과를 리턴</b>합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vuex_getters.jpg"/>
                    <span class="under-text">[ Vuex의 Getters ]</span>
                </div>
                <p>
                    Getters 또한 Mutations이나 Actions과 같이 함수의 형태를 띄며,
                    <b>첫 번째 파라미터는 state, 두번 째 파라미터는 getters</b>로 정해져 있습니다.<br>
                    따라서 예시코드와 같이, State로 관리되는 상태값을 직접적으로 Vue 컴포넌트에 노출시키지않고싶거나
                    위 설명과 같이 계산의 형태도 추가적 프로세스가 필요할 경우 Getters를 사용합니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/skill/component/custom')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 3-5-2. Custom
            </div>
            <div class="right" @click="$router.push('/trouble/memory')">
                4-1. Trouble Shooting &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "store"
}
</script>

<style lang="scss" scoped>

</style>