<template>
    <div class="script-page content-page">
        <div class="main-title"><span class="index">3-4-3.</span> script</div>
        <hr>

        <div class="content-box">
            <div class="content-level-1">
                <p>
                    &lt;script&gt;영역은 Javascript와 대응되는 영역으로 Vue.js에서 가장 핵심을 담당하는 부분입니다.
                    변수를 선언 할 수 있고, 메서드(function 개념)를 활용할 수 있으며
                    컴포넌트의 렌더링과 관련된 라이프사이클 함수도 여기서 제어할 수 있습니다.<br>
                    <b>코드의 익숙한 Javascript와 거의 동일</b>합니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> this</div>
            <div class="content-level-1">
                <p>
                    여기서의 this는 &lt;script&gt;영역에서 주효하게 사용되는 객체입니다.
                    Javascript에서 활용되는 this가 window, 혹은 중괄호에 의한 block scope등과 같이
                    한정된 범위내의 객체를 가리켰듯이, Vue.js의 &lt;script&gt;영역내의 this도 한정된 영역에 scope가 맞춰지며
                    그 영역의 범위는 해당 Vue 파일(컴포넌트)을 가리킵니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/script_base.jpg"/>
                    <span class="under-text">[ this의 다양한 사용처 ]</span>
                </div>
                <p>
                    <b>this</b>는 보통 위와같이 data나 computed에 선언된 변수와 methods에 정의된 메서드를 호출하거나 활용할 때 사용되게 됩니다.
                    이를 통해 개발자는 &lt;script&gt;영역내에서 선언한 변수나 메서드에 자유롭게 접근할 수 있습니다.
                </p>
                <div class="gray-box">
                    <p>
                        다만, &lt;template&gt;영역에서는 아래와 같이 <b>this</b>라는 키워드를 사용하지 않고 변수와 메서드를 활용해야 합니다
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/script_template.jpg"/>
                        <span class="under-text">[ template에서의 활용 ]</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> import</div>
            <div class="content-level-1">
                <p>
                    N개의 파일을 통해서 SPA를 구성하고, 그 구성을 도와주는 것이 Webpack이라고 설명했었습니다.
                    이때 Webpack이 모듈 번들링을 위해 entry파일 설정에서 지정하고 있고 그 파일이 진입점이 되어
                    N개의 파일이 물고 물리는 의존성을 생성하는데요.
                    <br><br>
                    ES6부터 이를 좀 더 편하게 사용하고자 import/export와 같은 모듈과 관련된 키워드가 추가되었으며
                    Vue.js또한 코드내에서 이 키워드를 통해 다른 Vue 컴포넌트나 Javascript를 가져와서 활용할 수 있습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> javascript</p>
                <p>
                    Javascript 파일의 경우 주로 공통으로 사용하는 function이 정의된 유틸성 파일들을 import해서 사용하는데요.
                    단순히 import만을 해주게되면 아래와 같이 &lt;script&gt;영역내에서 해당 파일내의 function을 호출해서 사용할 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/script_javascript_import.jpg"/>
                    <span class="under-text">[ javascript import 후 활용 ]</span>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> components</p>
                <p>
                    Vue.js는 각각의 Vue 파일을 <b>컴포넌트</b>라고 지칭합니다.
                    이는 각 Vue파일들이 다른 Vue 파일 어디에서든지 재사용이 가능하다는 뜻을 내포하고 있는데요.
                    텍스트필드나 체크박스와 같이 간단한 컴포넌트만이 아니라, 모달과 같이 복잡한 형태의 컴포넌트도 import를 통해서 재사용이 가능합니다.
                    <br><br>
                    이때, Javascript와의 차이점은 컴포넌트로의 활용을 위해서는 &lt;template&gt;영역에도 선언되어야하기때문에
                    import한 모듈로써의 컴포넌트를 &lt;script&gt;영역의 componets 항목에 정의해주면 아래와 같이 태그의 형태로 &lt;template&gt;영역에서 사용할 수 있게 됩니다.
                    <br><br>
                    <b>태그명의 형태는 HTML DOM태그들과의 규칙성을 맞추기 위해 케밥케이스로 자동변경됩니다.</b>
                </p>
                <div class="image-box">
                    <img src="@assets/example/import_component_default.jpg"/>
                    <span class="under-text">[ component import 후 활용 ]</span>
                </div>
                <p>
                    추가적으로 아래 캡쳐는 위와 동일한 기능을 하는 코드인데요. 태그명이 조금 다른 걸 보실 수 있습니다.
                    alias기능을 사용해서 &lt;template&gt;영역에 활용할 태그명을 컴포넌트명과 다르게도 적용 할 수도 있는데요.<br>
                    특별한 경우가 아니라면, 컴포넌트명과의 통일성을 위해 추천드리지 않습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/import_component_custom.jpg"/>
                    <span class="under-text">[ component import 후 태그명 변경 ]</span>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> mixins</p>
                <p>
                    mixin은 &lt;template&gt;와 &lt;style&gt;영역없이 &lt;script&gt;영역만을 가진 Vue파일입니다.
                    주활용처는 공통으로 사용되는 변수나 메서드, 라이프 사이클 함수가 정의된 Vue파일이며
                    컴포넌트의 import시에 components 키워드를 사용했던 것처럼,
                    import 한 후에 mixins 키워드를 사용하여 정의합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/import_mixin.jpg"/>
                    <span class="under-text">[ mixin import ]</span>
                </div>
                <p>
                    좌측의 example.vue는 commonMixin.vue 라는 Vue 파일을 mixin 키워드로 정의하였습니다.<br>
                    그리고 <b>example.vue에서 활용되는 money라는 변수나 deposit, withdraw와 같은 메서드(빨간 테두리로 표시)는
                    mixin으로 가져온 commonMixin.vue에 있는 변수와 메서드</b>입니다.

                    위와 같이 mixin으로 포함시킨 Vue파일의 script 영역에 있는 요소들을
                    마치, 현재 파일에서 정의한 것처럼 활용할 수 있게 해주는 것이 mixin인 것입니다.
                    <br><br>
                    즉, import를 해서 mixins으로 선언한 변수나 메서드들도 <b>그 Vue 파일의 this 영향권 안</b>에 놓이게 되는 것입니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> data</div>
            <div class="content-level-1">
                <p>
                    data 영역은 변수를 <b>선언</b>하는 영역입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/script_data_default.jpg"/>
                    <span class="under-text">[ script의 data ]</span>
                </div>
                문자열과 숫자, 배열 및 객체와 같이 Javascript에서 제공하는 모든 타입으로 변수를 선언할 수 있습니다.
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">4.</span> computed</div>
            <div class="content-level-1">
                <p>
                    computed는 사용될 때에는 data영역에 선언된 변수들과 같이 활용되지만,
                    정의할 때는 함수의 형태로 선언되는 독특한 형태입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/script_computed.jpg"/>
                    <span class="under-text">[ script의 computed ]</span>
                </div>
                <p>
                    엄밀히 말해서 computed는 <b>계산된 변수</b>라고 생각하시면 됩니다.
                    그리고 이때 바탕이 되는 <b>계산</b>의 종속성은 data영역의 변수가 가지게 됩니다.
                    계산되어야하기에 정의되는 형식은 함수이고 활용될 때는 변수의 형태를 띄는 것입니다.
                    <br><br>
                    그래서 해당 함수내에 활용된 data 변수가 변경될시에는 그에 따라 computed의 값이 재계산되게 됩니다.<br>
                    위 예시 코드를 설명해보자면 input 태그에 data영역 변수인 <b>money</b>가 v-model로 바인딩되어있습니다.
                    이때, 사용자가 input 태그에 입력을 하면 v-model로 바인딩된 money 변수의 값은 당연히 변경이 될 것인데
                    money 변수의 값을 함수 내에서 사용한 computed 변수인 <b>currency</b>도 함께 변경되게 됩니다.
                    <br><br>
                    정리하자면, <b>computed 변수는 함수로 정의되어있으며 해당 함수는 내부에 활용된 data변수가 변경되면 호출</b>되게 됩니다.<br>
                    이와같은 computed 변수의 활용처는 주로 실제 데이터와 화면상에 보여지는 데이터가 다른 형태를 띄어야 할 경우에 사용됩니다.
                    (대표적으로 예시 코드로 보여드리는, 실 데이터는 숫자지만 셋째자리마다 컴마를 찍어야하는 금액이나 통화 표시가 이에 해당합니다)
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">5.</span> props</div>
            <div class="content-level-1">
                <p>
                    HTML DOM 태그를 사용할 때 요소(attributes)를 활용해서 특정 태그의 생김새나 활용법을 변경하곤 했습니다.
                    Vue.js 기반의 컴포넌트도 이러한 활용법이 있으며 이를 <b>props</b>가 담당하고 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/script_props_default.jpg"/>
                    <span class="under-text">[ script의 props ]</span>
                </div>
                <p>
                    props가 정의되는 위치는 HTML 태그의 요소위치와 동일하며, 콜론(:)을 통해서 &lt;script&gt;영역과의 연계도 가능합니다.
                    위 코드는 제가 작성한 Toy 컴포넌트 중 버튼 컴포넌트를 작성한 예시이며, <b>primary</b> props와 <b>solid</b> props를 활용해서
                    컴포넌트는 동일하지만 서로 다른 옵션을 줘보았습니다. 그 결과로 버튼의 생김새가 달라지기도하고 클릭 이벤트에 따라 형태가 변경되기도 합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/script_props_define.jpg"/>
                    <span class="under-text">[ props 정의예시 ]</span>
                </div>
                <p>
                    위와 같이 type, default, required처럼 여러가지 설정값을 props에 정의할 수 있습니다.
                    type의 경우 복수개로 설정도 가능하며, 주의해야 할 점은 type이 Array나 Object 일 경우에는
                    default를 리턴하는 함수의 형태로 정의해야 한다는 것입니다.
                    <br><br>
                    &lt;toy-button&gt;에도 위와 유사하게 primary, solid와 같은 props가 정의되어있고 예시코드에서 이를 활용한 것입니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">6.</span> methods</div>
            <div class="content-level-1">
                <p>
                    메서드는 Javascript에 비유하자면 기명함수라고 생각하시면 됩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/script_method_base.jpg"/>
                    <span class="under-text">[ methods 활용 예시 ]</span>
                </div>
                <p>
                    정의된 메서드는 data나 computed와 같이 <b>this</b>객체에 속하게됩니다.
                    따라서 methods 영역에 정의된 메서드는 <b>this.메서드명의 형태</b>를 통해
                    created와 같은 라이프사이클 함수에서도 호출가능하며, 메서드에서 타 메서드를 호출 할 수도 있으며,
                    클릭과 같이 &lt;template&gt;에서 발생하는 사용자 액션에 대해서도 호출 할 수 있습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">7.</span> lifecycle</div>
            <div class="content-level-1">
                <p>
                    Vue.js 기반의 화면 및 컴포넌트들이 브라우져서 생성되고 렌더링되며 해제되는 전체 주기를 라이프 사이클이라고 하는데요.
                    이 라이프사이클의 특정 시점마다 제공되는 함수들이 있습니다.
                    이를 라이프 사이클 함수라고하며, 개발자는 해당시기마다 필요한 로직을 구현할 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue_lifecycle.jpg"/>
                    <span class="under-text">[ vue lifecycle ]</span>
                </div>
                <p>
                    위 그림에서 빨간 영역이 모두 라이프사이클 함수입니다.<br>
                    일반적으로 모든 함수를 매번 사용하는 것은 아니기에, 사용이 빈번한 함수 몇가지만 소개하도록 하겠습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> created</p>
                <p>
                    해당 시점은 &lt;script&gt;영역의 변수와 메서드를 사용할 수 있는 단계입니다.
                    Vue.js의 공식가이드에는 REST API를 통해 가져와야하는 초기 데이터가 있을 경우,
                    이 라이프사이클 함수 내에서 호출하도록 가이드하고 있습니다.
                    <br><br>
                    즉, 해당 Vue 화면(컴포넌트)를 활용하기위해 필요한 '초기 값'들을 세팅하는 단계라고 보시면 됩니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> mounted</p>
                <p>
                    created와 흡사한 단계이며, 차이점은 해당 시점에는 &lt;template&gt;영역에 작성된 코드들이
                    HTML DOM이 되어 화면상에 렌더링까지 되어있다는 것입니다.
                    흔하게 사용하던 document.getElementsByClassName와 같은 DOM 객체를 잡아서 동작해야하는 로직이 있는경우,
                    created 시점에는 해당 DOM이 존재하지 않기 때문에 불가능하며 mounted 시점이 되어서야 가능해지는 것입니다.
                    그래서 만약 DOM객체에 직접 접근하여 어떤 초기 세팅이 필요한 경우라면 created 시점이 아닌 mounted 시점을 활용해야 하는 것입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> beforeUnmount</p>
                <p>
                    렌더링되었던 Vue 화면(컴포넌트)이 완전히 파괴된 이후의 시점은 unmounted 함수이며,
                    beforeUnmount 함수의 호출시기는 파괴되기 직전의 시점입니다. created와 mounted가 초기 세팅에 연관된 역할을 해줬듯이
                    beforeUnmount는 뒷정리를 해주는 역할을 한다고 보시면 됩니다.
                    <br><br>
                    부득이하게 추가한 동적 변수라던가 혹은, 브라우져 쿠키에 값을 지우거나 저장해야하는 경우,
                    그리고 커스텀 디렉티브를 별도로 선언하거나 window, document와 같은 브라우져 전역 객체를 활용했던 경우라면
                    해당 위치에서 모두 정리를 해주어야 합니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">8.</span> watch</div>
            <div class="content-level-1">
                <p>
                    이름 그대로 <b>감시자</b>의 역할이며 감시하는 대상은 바로 <b>변수</b>입니다.<br>
                    watch 내에는 computed와 동일하게 함수의 형태로 정의하며, 이때 정의되는 함수명이 바로 감시하고자하는 변수명입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/script_watch.jpg"/>
                    <span class="under-text">[ vue watch ]</span>
                </div>
                <p>
                    위와같이 객체내에 정의된 개별변수까지 감시가 가능하며,
                    해당 함수의 첫번째 파라미터는 다음 값을, 두번째 파라미터는 이전 값을 가진채로 함수내에서 활용할 수 있습니다.
                    변수에 종속적이라는 면에서 computed와 동일해보일 수 있으나, watch는 특정 변수를 기준으로 한다는 점과
                    리턴되는 값이 존재하지 않기 때문에 변수로 활용할 수 없다는 차이점를 가지고 있습니다.
                    <br><br>
                    따라서 watch는 변수에 값이 변할 때 필요한 로직이 있다면 해당 영역에서 구현해주면 됩니다.
                    다만, watch 사용시에는 가장 중요한 주의사항이 있는데요.
                    <b>변수의 변화 감지를 기준으로 watch가 호출되기때문에 종속의 기준이되는 변수는 해당 영역내에서 수정하시면 안 됩니다.</b>
                    <br>
                    (즉, 위와같은 경우 title을 감시하는 watch내 함수에서 <b>this.title = 'ABC'</b>와 같은 형식으로 값을 변경하시면 안 됩니다)
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/skill/structure/template')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 3-4-2. template
            </div>
            <div class="right" @click="$router.push('/skill/structure/style')">
                3-4-4. style &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "script"
}
</script>

<style lang="scss" scoped>

</style>