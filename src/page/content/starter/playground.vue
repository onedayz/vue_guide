<template>
    <div class="playground-page content-page">
        <div class="main-title"><span class="index">-1+3.</span> 가지고 놀기</div>
        <hr>
        <div class="content-box">
            <div class="content-level-1">
                <p>
                    보통 새로운 스킬에대해 공부를 시작할 때 사람의 유형은, 이론파와 실전파로 나뉘게 됩니다.
                </p>
                <div class="gray-box">
                    <p>이론파 : A to Z, 이 기술의 기원부터 차근차근 쌓아가며 이해가 안 된 스킬이 어떻게 내것이냐는 타입</p>
                    <p>실전파 : 이론보단 경험이지, 일단 부딪혀보면 다 알게 되어있다는 타입</p>
                </div>
                <p>
                    본 Vue Guide의 <b>-1. 별첨 : Vue 스타터 프로젝트</b>는 이론에 지친 실전파들을 위해 첨부된 내용들이며,
                    그에 따라 실제 코드를 수정하고 서버를 구동해보며 익힐 수 있는 Vue 스타터 프로젝트를 제공합니다.<br>
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> Level 1<span class="mini-title"> : 기초</span></div>
            <div class="content-level-1">
                <div class="gray-box">
                    <p>파일경로 : src/page/playground/<b class="file-name">basic.vue</b></p>
                </div>
                <p>
                    기초항목에선 <b>유사한 기능을 하지만 서로 다른 4가지 코드를 소개</b>하고 있습니다.<br>
                </p>
                <div class="gray-box">
                    <p>1. 콜론(:)과 at(@)만으로 input 태그에 data 변수 매핑하기</p>
                    <p>2. v-model 디렉티브로 콜론과 at 대체하기</p>
                    <p>3. v-model로 매핑된 data 영역의 변수 <b>originMoney1</b>에 대해 computed 값(<b>changeWon1</b>) 설정하기</p>
                    <p>4. 버튼 이벤트를 통해 값 변경하기 및 @input로 값에 Validator(숫자만) 설정하기</p>
                </div>
                <p>
                    이를 통해 Vue 파일의 &lt;template&gt;태그영역에 정의한 HTML 태그(혹은 Vue 컴포넌트)에,
                    <b>값으로 바인딩</b> 할 수 있는 &lt;script&gt;태그 영역의 data와 computed 변수를 직접 연결해보았습니다.
                    <br><br>
                    또한, 4번 예제를 토앻 설명한 @input="checkNumber" 코드를 활용하여,
                    필요하다면 v-model로 축약되던 :value와 @input을 언제든 다시 분리하여 적재적소에 활용할 수도 있음을 코드로 정의하였습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> Level 2<span class="mini-title"> : Vue 디렉티브</span></div><!-- Vue 파일 기본 -->
            <div class="content-level-1">
                <div class="gray-box">
                    <p>파일경로 : src/page/playground/<b class="file-name">directive.vue</b></p>
                </div>
                <p>
                    Vue에서 활용가능한 다양한 디렉티브의 예제를 제공합니다.<br>
                    길이가 9인 배열형 데이터를 활용하여,
                    v-for와 v-if/else, v-show를 비롯해 :class와 :style의 예제까지 정의하였습니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> v-for</p>
                <p>
                    Javascript의 for-in 문법과 유사한 형태를 띄며, 차이점은 반복문 안에서 사용되는 변수의 타입을 지정할 필요가 없다는 것입니다.
                    <b>in</b> 키워드의 뒤에는 반복해서 보여줄 배열형 데이터의 원본을 정의하며,
                    in 키워드의 앞에는 <b>활용 될 변수명</b>과 <b>인덱스 값으로 사용할 변수명</b>을 지정할 수 있습니다.
                    (당연히, 인덱스는 0부터 시작합니다)
                    <br><br>
                    이때, 인덱스 역할의 변수는 선택사항으로 <b>v-for="member in sampleArr"</b>와 형태의 코드로 예제를 활용해도 됩니다.
                    <br><br>
                    다만, Vue에서는 v-for로 반복되는 구문에 대해서 <b>key</b>라는 props를 통해 인덱싱처리를 권장하고있습니다.<br>
                    이는 Vue.js가 Virtual DOM을 사용하고 있으며, 이에따라 v-for를 구성하는 일부 데이터의 변경시
                    해당 영역만 리렌더링을 하도록 되어있기 때문인데요. 이를 위해 <b>리렌더링의 타겟이 되는 DOM을 보다 빠르게 찾아가기 위해 'key'로 사용할 값이 필요하여
                    그 역할을 하는 props의 이름을 동일하게 key로 명명</b>한 것입니다.<br>
                    (참고로 v-for를 사용한 코드에 key props를 지정하지 않을경우, 개발자도구의 콘솔에 Warning 메시지가 출력되게 됩니다)
                    <br><br>
                    이때 key props의 값은 당연하게도 유니크하여야 하며,
                    아래와 같이 v-for의 두번째 인자(인덱스 값)를 적극 활용합니다.
                </p>
                <div class="gray-box">
                    <p v-text="direcExample1"></p>
                    <p v-text="direcExample2"></p>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> v-if/else & v-show</p>
                <p>
                    v-for를 통해 9개의 데이터를 렌더링하던 코드에 아래와 같은 조건의 v-show를 추가로 정의했습니다.
                </p>
                <div class="gray-box">
                    <p>v-show="member.no%2 === pivot"</p>
                </div>
                <p>
                    여기서 pivot은 하단에 버튼을 클릭함으로써 0 혹은 1로 변경됩니다.
                    이때 pivot이 1일경우 홀수번째의 데이터들만 v-show의 조건이 true를 만족하기 때문에 홀수번째 데이터만 화면에 보이게 됩니다.
                    반대로 pivot이 0일경우에는 짝수번째 데이터만 보이게 됩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_v_show.jpg"/>
                    <span class="under-text">[ v-show와 Element ]</span>
                </div>
                <p>
                    이때, 브라우져의 개발자도구를 열어서 v-show가 적용된 실제 HTML Element 코드를 확인해보면
                    <b>조건을 충족하지 못 한 DOM들은 CSS의 display 속성이 none</b>으로 적용되어있는 걸 알 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_v_if.jpg"/>
                    <span class="under-text">[ v-if와 Element ]</span>
                </div>
                <p>
                    반면에 하단에 보여지는 홀 혹은 짝 이라는 문자의 경우에는 v-if/else 조건이 걸려있는데,
                    pivot의 값에 따라 변경되는 내용이 조건을 충족하지 못 했을 경우 HTML Element로도 존재하지 않는 것을 확인하실 수 있습니다.
                    이에따라, 화면상에서 데이터의 조건에 따라 <b>토글성이 짙은 Element는 v-show를 사용</b>하는 것이 권장되며
                    반면에 <b>1회성으로 조건이 결정되거나 Element로 노출되는 경우를 꺼려야 하는 데이터의 경우엔 v-if/else를 사용</b>하는 것을 권장하고 있습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> :class</p>
                <p>
                    :value와 같이 HTML Element가 원래 가지고 있던 요소(attribute)에 콜론(:)을 추가함으로써
                    변수나 메서드와 같은 Vue.js의 스펙에 연계를 할 수 있는데요. class도 그런 요소중에 하나입니다.<br>
                    :class에 정의되는 값은 <b>객체(Object)로써 키와 조건의 형태</b>를 가져야합니다.
                </p>
                <div class="gray-box">
                    <p>:class="{'dark-box-list': member.age &lt; 30}"</p>
                </div>
                <p>
                    예제에서 사용된 코드는 위와같으며, 이는 'dark-box-list'라는 class를 해당 element에 적용할건데,
                    적용여부에 대한 조건을 뒤에 있는 <b>member.age &lt; 30</b>로 결정짓는 겁니다.
                    즉, <b>member의 age 값이 30 미만인 데이터들만 dard-box-list 라는 class</b>를 가지며,
                    이로인해 v-for를 통해 반복하면서도 데이터별로 화면에 렌더링되는 형태가 조금씩 달라지는 것입니다.
                    <br><br>
                    또한 예제에도 적용되었듯이 :class는 class와 병행하여 활용할 수 있습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#04.</span> :style</p>
                <p>
                    :style도 :class와 동일하게 콜론을 붙임으로써 Vue.js와 연계하여 활용할 수 있으며
                    style 요소와 병행할 수도 있습니다.
                    다만, style은 CSS 문법에 따라 color, font-size, background-color와 같이 적용하는 값의 요소가 정해져있기 때문에
                    객체형태를 띄지만 키의 위치에 이러한 CSS의 요소가 주어져야 합니다.
                </p>
                <div class="gray-box">
                    <p>:style="{'background-color' : member.color, 'color': (20 &lt; member.age && member.age &lt; 30)? 'white' : 'black'}"</p>
                </div>
                <p>
                    현재 예제에는 위와 같은 예시코드를 활용하였습니다.
                    <b>보시면 단순히 데이터가 가진 값(member.color)를 요소에 직접 대입하기도하지만,
                        데이터를 활용하여 조건문을 선언한 후 특정 값을 대입하는 것도 가능</b>함을 알 수 있습니다.
                    <br><br>
                    style의 경우엔 위처럼 inline 방식이 적용 우선순위가 높다는 것을 인지하고 활용해야하며,
                    만약 적용할 CSS 요소가 많을 경우엔 아래와 같이 computed나 methods를 활용하여 요소를 리턴하는 방식도 자주 활용되게 됩니다.
                </p>
                <div class="gray-box">
                    <p>
                        <b>&lt;template&gt;</b>영역<br>
                        &lt;div class="box-list" :style="<b>tmpStyle(member)</b>" v-for="(member, idx) in sampleArr"&gt;<br><br>
                        <b>&lt;script&gt;</b>영역<br>
                        methods: {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<b>tmpStyle(member)</b>{<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let style = {};<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style['background-color'] = member.color;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style['color'] = (20 &lt; member.age && member.age &lt; 30)? 'white' : 'black';<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return style;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                        }
                    </p>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> Level 3<span class="mini-title"> : Lifecycle & Watch</span></div><!-- Vue 파일 기본 -->
            <div class="content-level-1">
                <div class="gray-box">
                    <p>파일경로 : src/page/playground/<b class="file-name">lifecycle.vue</b></p>
                </div>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> Lifecycle</p>
                <p>
                    코드를 열어보시면 라이프사이클에 대한 예시를 보여드리기위해,
                    최초 data 영역에 선언한 변수 <b>text1은 A라는 값으로 정의</b>하였습니다.
                    이후, created와 mounted 라이프사이클을 거치며 text1은 A에서 ABC라는 값으로 변경되었습니다.
                    이때 변경되어가는 값을 화면에 보여주기위해 각각의 라이프사이클 단계에서,
                    <b>text1의 변화과정을 특정 변수(createText, mounText)에 대입하여 화면에 출력</b>하였습니다.
                    <br><br>
                    이를 통해 created가 호출된 이후에 mounted가 호출되게 되어있는 Vue 라이프사이클의 순서를 알 수 있으며,
                    필요하실 경우 beforeUnmount나 unmounted와 같은 함수를 추가로 정의하여 테스트해보셔도 됩니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> Watch</p>
                <p>
                    watch는 함수의 형태를 띄지만, 함수명이 감시하고자하는 변수명이어야하며
                    첫번째 파라미터는 바뀌는 값, 두번째 파라미터는 바뀌기 이전 값으로 정해져 있습니다.
                    그래서 예제와 같이 watch로 정의한 함수내에서 변수의 이전/이후 값을 활용할 수 있으며,
                    만약 <b>감시하고자하는 변수가 객체내에 정의되어있을 경우 아래와 같이 문자열처럼 watch 함수를 정의</b>해주시면 됩니다.
                </p>
                <div class="gray-box">
                    <p>
                        <b>&lt;script&gt;</b>영역<br>
                        data() {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;return {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj: {name: 'Linda', age: 28}<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                        }<br>
                        watch: {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<b>'obj.name'(afterName, beforeName)</b>{<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return style;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                        }
                    </p>
                </div>
                <p>
                    watch는 당연히도 특정 값에 대해서 계속 주시하는 기능이 추가되는 것이므로
                    성능적으로 추천하는 기능은 아니기에, 꼭 필요한 때에만 사용을 권장합니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">4.</span> Level 4<span class="mini-title"> : 컴포넌트</span></div><!-- Vue 파일 기본 -->
            <div class="content-level-1">
                <div class="gray-box">
                    <p>파일경로 : src/page/playground/<b class="file-name">comp.vue</b></p>
                </div>
                <p>
                    Vue로 만들어진 모듈은 모두 '컴포넌트'라고 정의할 수 있으며, 이에따라 import를 통해 어디서든 재사용이 가능합니다.
                    넓은 의미에서 보자면, 우리가 흔히 페이지 레벨로 불리는 화면안에 또 다른 페이지 레벨도 재사용이 가능하다는 이야기입니다.
                    (비유하자면 네이버 메인페이지 안에 뉴스탭에 네이버 메인페이지를 또 넣을 수도 있다는 의미입니다)
                </p>
                <br>
                <p>
                    여기서는 가볍게 2가지 컴포넌트를 직접 만들어서 활용했습니다.
                </p>
                <div class="gray-box">
                    <p>1. TextLabel : props로 사이즈, 색상등을 제어하는 라벨 컴포넌트</p>
                    <p>2. ModalButton : 버튼을 누르면 모달이 나오는 컴포넌트</p>
                </div>
                <p>
                    별도로 작성한 컴포넌트를 재사용하기 위해서는 몇가지 절차를 거쳐야 합니다.<br>
                    1. 우선, 컴포넌트를 가져와야하며(import)<br>
                    2. 해당 Vue 파일내에서 사용하겠다고 정의해야하고(components)<br>
                    3. 실제로 코드로 활용되어야 합니다(&lt;template&gt;영역에 정의)
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_custom_component.jpg"/>
                    <span class="under-text">[ Custom Component의 사용법 ]</span>
                </div>
                <p>
                    만약, 화면상에서 동일한 UI를 가지거나 props를 조절함으로써
                    재사용성이 높고 통일성있는 형태를 띄어야한다면, 위와같이 컴포넌트의 형태로 사용하는 것을 권장하고 있습니다.
                    특히, 패딩/마진을 바탕으로 화면의 레이아웃을 잡는 규격용 컴포넌트나 데이터의 추가 및 수정에 쓰이는 모달을 비롯하여
                    작게는 버튼이나, 텍스트필드, 체크박스와 같은 것들이 컴포넌트로 규정되어 재사용되게 됩니다.
                    <br><br>
                    컴포넌트는 그 자체로 &lt;template&gt;, &lt;script&gt;,&lt;style&gt;를 가지며
                    해당 영역에 필요한 코드를 작성해주시면 되는데요.
                    이때 실제 활용될 때를 대비하여 필요한 <b>props</b>를 잘 설계하고 정의하는 것이 중요합니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">5.</span> Level 5<span class="mini-title"> : 스토어</span></div><!-- Vue 파일 기본 -->
            <div class="content-level-1">
                <div class="gray-box">
                    <p>파일경로1 : src/page/playground/<b class="file-name">store.vue</b></p>
                    <p>파일경로2 : src/store/sample/<b class="file-name">index.js</b></p>
                </div>
                <p>
                    스토어는 전역 저장소의 개념이기 때문에, 예제로 제공하는 코드에서 전역으로 활용되는 값을 수정하게끔 작성했습니다.
                    여기서 예제로 쓰인 데이터는 Language라는 변수인데, 웹 서비스에서 문자들의 다국어 처리를 위한 '언어'값을 가리키는 변수로 가정하였습니다.
                    그래서 Language라는 값은 어떤 화면에서도 접근이 가능해야하며, store.vue 파일에서 값을 변경해보면
                    전혀 다른 vue 파일로 구성된 스타터의 GNB에서, 보여지는 값이 함께 변하는 것을 확인하실 수 있을 겁니다.
                    <br><br>
                    여기서 sample/index.js 파일은 Vuex 저장소로 활용되는 파일이며 이를위해 state, mutations, actions, getters가 정의되어 있습니다.
                    파일을 열어보시면 state에는 전역으로 활용될 만한 예시 데이터로써 language와 user가 존재하며
                    actions에서는 changeLanguage와 setUserInfo와 같은 함수를 선언하였고 이와 동시에 전달된 값에 대해 필요한 추가로직을 정의하였습니다.
                    마찬가지로 mutations에도 chagneLanguar, setUsetInfo라는 함수를 정의하여 각각 state의 language와 user의 값을 변경하고 있습니다.
                    그리고 이러한 state의 값들은 getters에 정의한 리턴전용 함수를 통해 Store의 저장 값을 활용하고자하는 Vue 파일 어디에서든 호출이 가능해지는 것입니다.
                    <br><br>
                    Vuex에서는 이와 같은 Store에 접근하기 위해 <b>this.$store</b>라는 객체를 제공하며, 우리는 entry파일에서
                    Vue Application 인스턴스에 Vuex를 플러그인으로 심어줬기때문에 this.$store를 활용할 수가 있는 것입니다.
                    이제 화면에서 버튼을 클릭하면, changeLanguage라는 메서드가 호출되고
                    메서드 안에있는 <b>this.$store.dispatch('changeLanguage', language)</b>를 통해서 sample/index.js의 changeLanguage라는 actions를 호출하게 됩니다.
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/starter/directory')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; -1+2. 프로젝트 헤쳐보기
            </div>
            <div class="right" @click="$router.push('/biscuit')">
                -1-1. Biscuit &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'playground',
    data(){
        return {
            direcExample1 : `<span v-for="(member, idx) in memberList" :key="idx">{{member.name}}</span>`,
            direcExample2 : `<span v-for="(member, idx) in memberList" :key="member.id+'_'+idx">{{member.name}}</span>`,
        }
    }
}
</script>

<style lang="scss" scoped>
.bottom-navigation{
    .right{color:$color__gray-50; &:hover{background-color: $color__gray-50;}}
}
</style>