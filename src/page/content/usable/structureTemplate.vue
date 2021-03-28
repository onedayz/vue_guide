<template>
    <div class="template-page content-page">
        <div class="main-title"><span class="index">3-4-2.</span> template</div>
        <hr>
        <div class="content-box">
            <div class="content-level-1">
                <p>
                    &lt;template&gt;태그영역은 흔히아는 HTML 영역이라고 생각하시면 됩니다.<br>
                    &lt;div&gt;나 &lt;h1&gt;과 같이 흔히 사용되는 HTML DOM 태그들을 그대로 사용하실 수 있으며,
                    Vue.js를 바탕으로 제공되는 컴포넌트들과 &lt;script&gt;영역에 정의된 변수, 메서드들의 활용과 더불어
                    v-for나 v-if 같은 디렉티브들까지 활용할 수 있습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> :과 @</div>
            <div class="content-level-1">
                <p>
                    기본적으로 &lt;template&gt;영역은 일반 HTML DOM 태그들을 사용할 수 있습니다.
                    그리고 태그들의 각 요소(attribute)와 이벤트(onClick, onChange등)도 함께 사용 할 수 있는데요.
                    이러한 요소와 이벤트들을 Vue.js와 연계하기위해 사용되는 기호가 :(콜론)과 @(at)입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue_template_colon.jpg"/>
                    <span class="under-text">[ 콜론과 at ]</span>
                </div>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> 콜론(:)</p>
                <p>
                    태그내에 활용된 콜론(:)은 v-bind라는 디렉티브의 약어입니다.<br>
                    이름에서 볼 수 있듯이 v-bind는 서로간을 묶어주는(바인딩) 역할을 담당합니다.<br>
                    위와같이 '<b>:</b>'<b>을 DOM 태그의 요소에 사용하게 되면, Vue.js의 &lt;script&gt;영역에서 정의한 변수와 연계가 가능</b>해집니다.<br>
                    반대로, '<b>:</b>'이 없는 상태로 코드를 정의하게되면 변수 'money'가 아니라 문자열로써의 값 'money'가 input 태그의 value 요소에 주입되게 됩니다
                    즉, 콜론이 붙었을 경우 input 태그가 가지는 값은 '1000'이지만, 콜론이 붙지 않을 경우 가지는 값은 'money'입니다.
                    <br><br>
                    추가적으로 &lt;template&gt;영역의 태그내에서 사용되는 콜론 기호는,
                    Vue.js기반의 컴포넌트가 가지고 있는 props라는 내부 속성값과도 연계가 됩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue_template_colon_props.jpg"/>
                    <span class="under-text">[ 콜론과 props ]</span>
                </div>
                <p>
                    위에 코드는 제가 스타터를 만들면서 커스텀하게 만든 컴포넌트 중 버튼 컴포넌트의 사용 예제입니다.
                    컴포넌트에 대한 상세설명은 <span class="inner-link" @click="$router.push('/skill/component')">3-5.Component</span>에서 할 예정이기에
                    필요부분만 간략히 설명해보자면 버튼 컴포넌트는 내부적으로 size라는 props를 가지고 있으며,
                    해당 <b>props의 값으로 data영역에 정의된 width라는 변수를 전달하는 것이고 이를 위해 바인딩을 해줘야하므로 v-bind의 약어인 콜론(:)을 사용</b>한 것입니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> at(@)</p>
                <p>
                    at(@)은 v-on의 약어로써, 해당 태그/컴포넌트가 내포하고 있는 이벤트에 대한 연계를 담당합니다.
                    위 캡쳐된 코드들에서는 <b>&lt;input&gt;태그가 내장하고 있는 onInput에 changeValue 메서드를 연결하기위해 @input을 정의</b>하였고,
                    &lt;toy-button&gt; 컴포넌트에서는 <b>onClick 이벤트에 withdraw 메서드를 연결하기 위해 @click을 정의</b>하였습니다.
                    <br><br>
                    순수 HTML 태그를 사용했을 경우에는 내장하고 있는 onInput이나 onChange와 같은 이벤트에 @를 활용할 수 있으며,
                    직접 만든 커스텀 컴포넌트나 3rd 파티의 컴포넌트를 활용할 경우에는 각 컴포넌트들의 스펙에 따라 다양한 이벤트를 활용할 수도 있습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> &lt;script&gt;와의 연계</div>
            <div class="content-level-1">
                <div class="image-box">
                    <img src="@assets/example/vue_template_data_computed.jpg"/>
                    <span class="under-text">[ data와 computed, methods를 &lt;template&gt;에서 활용하는 예시 ]</span>
                </div>
                <p class="third-title"><span class="index">#01.</span> data/computed</p>
                <p>
                    Vue.js에서는 &lt;script&gt;영역에 선언한 '변수'를 &lt;template&gt;에서 활용할 수 있습니다.<br>
                    이때 변수의 형태로 활용될 수 있는 선언 위치는, 바로 <b>data</b>와 <b>computed</b> 영역입니다.<br>
                    (data와 computed에 대해서는 <span class="inner-link" @click="$router.push('/skill/structure/script')">3-4-3. script</span>에서 상세하게 설명하겠습니다)
                    <br><br>
                    2개 영역에서 선언된 변수를 DOM객체 내부(inner 위치)에서 활용하고자 할 때에는 예시코드와 같이 Mustache(콧수염) 형식으로 감싸주시고,
                    DOM 태그의 속성(attribute) 위치에서 활용하고자 하실때에는 변수명을 그대로 사용해주시면 됩니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> methods</p>
                <p>
                    &lt;template&gt;에서 사용자의 액션에 따라 callback function을 호출하는 기능이 필요할 경우,
                    Vue.js에서는 &lt;script&gt;영역에 methods라는 요소로 각각의 function을 정의할 수 있습니다.
                    그에따라 이벤트에 맞는 method를 정의해주시면 됩니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> Vue.js의 디렉티브 활용</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> v-model</p>
                <div class="image-box">
                    <img src="@assets/example/vue_template_v_model.jpg"/>
                    <span class="under-text">[ v-model ]</span>
                </div>
                <p>
                    v-model은 2-way 바인딩을 위해 존재하는 Vue.js의 디렉티브입니다.
                    HTML DOM 태그들 중에는 &lt;input&gt;태그와 같이 내부적으로 값을 가지게 되는 태그들이 있고,
                    혹은 커스텀하게 만든 컴포넌트들이 값을 가져야 하는 경우가 있습니다.
                    이런 태그들은 보통 'value'라는 요소명으로 값을 가지고 있으며
                    v-model은 이 value 요소에 바인딩됨과 동시에 사용자의 액션에 따라 변하면 value 요소의 값도 함께 변경해주게 됩니다.
                    <br><br>
                    즉, 위와 같은 코드에서 사용자가 input태그를 이용해서 값을 수정하면 &lt;script&gt;영역에 있는 money라는 변수의 값도 동시에 변경되게 됩니다.
                </p>
                <div class="gray-box">
                    <p>
                        Vue.js에서 v-model이라는 디렉티브만으로 2-way 바인딩이 가능한 이유는,<br>
                        내부적으로 v-bind:value와 v-on:input의 2가지 디렉티브를 내포하기 때문입니다.<br>
                        아래 작성된 2줄은 코드의 형태만 다를뿐, 동일하게 동작하는 코드입니다.
                    </p>
                    <div class="image-box">
                        <img src="@assets/example/v_model_detail.jpg"/>
                        <span class="under-text">[ v-model 과 :value / @input 의 비교 ]</span>
                    </div>
                    <p>
                        즉, v-model의 2-way는 v-bind:value의 1-way와 v-on:input의 1-way가 합쳐져서 2-way가 되는 것입니다.
                    </p>
                </div>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> v-if/v-else & v-show</p>
                <div class="content-level-2">
                    <p class="fourth-title">1) v-if/v-else</p>
                    <div class="image-box">
                        <img src="@assets/example/v_if.jpg"/>
                        <span class="under-text">[ v-if ]</span>
                    </div>
                    <p>
                        프로그래밍 언어에서 흔히 쓰는 if/else 구문이 Vue.js에서는 <b>v-</b>라는 prefix를 추가해서
                        v-if와 v-else-if, v-else로 사용되고 있습니다. 해당 디렉티브를 추가하게되면 정의된 조건에 따라서 해당 태그에 대한 화면 노출여부를 결정하게 됩니다.
                        여기서 v-if와 v-else-if는 분기를 위한 조건이 필수로 정의되어야하며 v-else는 그 외의 모든 경우의 수를 담당하게 됩니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">2) v-show</p>
                    <div class="image-box">
                        <img src="@assets/example/v_if_false.jpg"/>
                        <span class="under-text">[ v-if와 v-show ]</span>
                    </div>
                    <p>
                        사용자의 입장에서는 v-if와 v-show 디렉티브에 대한 체감이 크지않습니다.<br>
                        두 디렉티브 모두 해당 태그(혹은 컴포넌트)를 화면에 노출할 지, 하지 않을지를 판별하는 용도로 쓰이기 때문인데요.
                        하지만 개발하는 입장에서는 두 디렉티브는 분명히 차이가 있습니다. 실제 화면으로 렌더링되는 HTML DOM의 코드를 보면 그 차이를 알 수 있는데요.
                        v-if를 사용하는 태그는 만약 조건이 false일 경우 HTML DOM 트리에서 아예 제거해버리지만,
                        v-show의 경우 조건이 false이면 css 요소인 display의 값을 none으로 처리함으로써 화면내에 숨겨놓게 됩니다.
                        <br><br>
                        이는 <b>어느정도 성능에 영향을 끼치는 요소</b>로써,
                        노출에 대한 토글 빈도가 잦은 태그의 경우에는 v-show를 통해 css 속성으로 제어하는 것이 좋으며
                        노출에 대한 토글빈도가 적은 경우에는 v-if/v-else 를 사용하는 것이 성능적으로 유리합니다.
                    </p>
                </div>

            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> v-for</p>
                <div class="image-box">
                    <img src="@assets/example/v_for.jpg"/>
                    <span class="under-text">[ v-for ]</span>
                </div>
                <p>
                    v-for는 Javascript의 for in 반복문과 사용법이 유사합니다. <b>in</b> 키워드 뒤에는 배열형태의 전체 데이터가 위치하고
                    앞쪽괄호에는 배열내 데이터의 변수명, 그리고 인덱싱 숫자로 사용할 변수명이 위치하게 됩니다.
                    현재 예시는 총 5개의 문자열을 가진 member라는 배열형 변수로 v-for문을 작성해두었으며,
                    해당 코드는 맨 우측 캡쳐와 같이 실제 HTML DOM 트리를 구성하게 됩니다.
                    <br><br>
                    v-for를 정의할 시에 필수는 아니지만 같이 쓰면 좋은 <b>key</b>라는 props가 있습니다.<br>
                    해당 props는 v-for 디렉티브에 의해 화면에 렌더링되는 N개의 Virtual DOM(가상 DOM)에 대해 유니크한 ID값을 부여함으로써
                    리렌더링시의 성능향상(어떤 가성 DOM을 수정해야 하는지 빠르게 찾는)을 목적으로 하고 있습니다.
                    key props를 정의하지 않아도 에러는 발생하지 않습니다만, 개발자도구의 콘솔에는 Warning 메시지가 뜰 정도로 권고하는 사항이므로 지켜주시는 게 좋습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#04.</span> class/style</p>
                <p>
                    HTML DOM 태그가 가진 요소(attribute)에 콜론(:)을 추가하여 Vue.js와 연계하였듯이
                    class와 style에도 콜론을 추가함으로써 Vue.js의 변수나 메서드를 활용 할 수 있습니다.
                    또한, 이때는 style과 :style, class와 :class를 함께 사용할 수 있습니다.
                    <br><br>
                </p>

                <div class="content-level-2">
                    <p class="fourth-title">1) style</p>
                    <div class="image-box">
                        <img src="@assets/example/vue_template_style.jpg"/>
                        <span class="under-text">[ inline을 이용한 style의 삼항연산 ]</span>
                    </div>
                    <div class="image-box">
                        <img src="@assets/example/vue_template_style_computed.jpg"/>
                        <span class="under-text">[ computed를 통한 style 설정 ]</span>
                    </div>
                    <p>
                        위 2개의 코드는 동일한 결과를 가지는 예제이며, :style에 대한 정의방식을 inline과 computed로 나눈 예시입니다.<br>
                        style의 경우 조건에 따라 특정 요소에 해당 '값'을 부여하는 개념이기에 조건에 따른 분기처리를 위와 같이 합니다.
                    </p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">2) class</p>
                    <div class="image-box">
                        <img src="@assets/example/vue_template_class.jpg"/>
                        <span class="under-text">[ inline을 이용한 class예시 ]</span>
                    </div>
                    <div class="image-box">
                        <img src="@assets/example/vue_template_class_computed.jpg"/>
                        <span class="under-text">[ computed를 통한 class 설정 ]</span>
                    </div>
                    <p>
                        위 2개의 코드 또한 동일한 결과를 가지는 예제이며, :class에 대한 정의방식을 inline과 computed로 나눈 예시입니다.<br>
                        class의 경우 세부 값은 이미 class 내부에 정의되어있으므로, 해당 class 명의 사용여부에 대한 것을 조건에 따라 분기처리하므로 위와 같이 정의할 수 있습니다.
                    </p>
                </div>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/skill/structure/summary')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 3-4-1. Summary
            </div>
            <div class="right" @click="$router.push('/skill/structure/script')">
                3-4-3. script &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "template"
}
</script>

<style lang="scss" scoped>

</style>