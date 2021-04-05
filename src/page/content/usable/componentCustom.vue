<template>
    <div class="component-custom-page content-page">
        <div class="main-title"><span class="index">3-5-2.</span> Custom</div>
        <hr>

        <div class="content-box">
            <div class="content-level-1">
                <p>
                    *.vue의 확장자를 가지는 Vue 파일은 모두 컴포넌트입니다.<br>
                    따라서 모든 Vue 파일은 모든 Vue 파일에서 import 할 수 있으며, 그에따라 재사용이 가능합니다.<br>
                    기본적인 컴포넌트 활용에 대한 설명은 <span class="inner-link" @click="$router.push('/skill/structure/script')">3-4-3. script</span>의
                    <b>#02. components</b>항목에서 설명했었습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/import_component_default.jpg"/>
                    <span class="under-text">[ component import 후 활용 ]</span>
                </div>
                <p>
                    위와같이 활용할 컴포넌트를 import하고 <b>components</b>쪽에 명시하면,
                    HTML DOM 태그들과 동일한 형태로 &lt;template&gt;영역에서 사용할 수 있게됩니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> $emit과 props</div>
            <div class="content-level-1">
                <p>
                    Vue로 이루어진 웹페이지는 앞선
                    <span class="inner-link" @click="$router.push('/skill/component/summary')">3-5-1. Summary</span>
                    에서 보셨던 것처럼 트리형구조를 이루기때문에 아래와 같이 각 컴포넌트간에 Parent와 Child의 개념이 적용되게 됩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/component_pc.jpg"/>
                    <span class="under-text">[ component 간 트리구조의 Parent & Child ]</span>
                </div>
                <p>
                    컴포넌트를 import 해서 사용하는 쪽이, <b>Parent</b>.<br>
                    컴포넌트로 정의되어 사용당하는 쪽이, <b>Child</b>로 보시면 되는데요.<br>
                    여기서 익숙한 <b>props</b>키워드가 보입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> props(Parent to child)</p>
                <div class="image-box">
                    <img src="@assets/example/script_props_default.jpg"/>
                    <span class="under-text">[ 컴포넌트를 활용할 때의 Props ]</span>
                </div>
                <p>
                    이와같이 컴포넌트를 활용한 태그영역에서, 해당 컴포넌트의 옵션값으로 줄 수 있는 키워드들을 <b>props</b>라고 했는데요.
                    엄밀히 말해서 이 props는 Parent로부터 데이터를 Child에게 전달해주는 역할을 하는 것입니다.
                    그리고 그 전달의 과정에서,
                    컴포넌트를 사용하는 측(Parent)이 사용되는 측(Child)의 형태 및 옵션을 핸들링하는 것이 당연하기에,
                    Parent의 변수나 메서드를 바탕으로 props 값을 조율해서 Child에게 전달하는 것입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> this.$emit(Child to parent)</p>
                <div class="image-box">
                    <img src="@assets/example/component_emit.jpg"/>
                    <span class="under-text">[ 컴포넌트를 활용할 때의 emit ]</span>
                </div>
                <p>
                    props를 통해서 Parent의 데이터가 Child에게 전달된다면,
                    당연히 반대로 Child로부터도 Parent에게 무언가를 요청할 수 있어야 합니다.
                    그리고 그때 쓰이는 함수가 바로 this가 내장하고있는 $emit이며, $emit은 이벤트를 발생시킵니다.
                    Child내부에서 $emit을 통해 발생한 이벤트는 Javascript의 특성에 따라 버블링되며
                    이를 캐치하는 디렉티브가 바로 <b>v-on</b> 즉, <b>@(at)</b>입니다.
                    (여기서 this.$emit에 전달되는 첫번째 파라미터는 이벤트명이며, 두번째부터는 버블링을 통해 전달될 파라미터입니다)
                    <br><br>
                    위의 예시코드는 nameCard.vue 라는 컴포넌트 내부에 버튼을 클릭시 발생하는 $emit이 정의되어 있는데요.
                    해당 컴포넌트가 &lt;name-card&gt;라는 태그형태로 사용되는 코드에는 @search라는 키워드를 통해
                    Parent에 정의된 <b>searchUser</b>메서드로 연결해주고 있습니다.
                    <br><br>
                    즉, Child 컴포넌트가 가진 버튼이 클릭되고 search 메서드가 호출되면 정의된 내용에 따라
                    this.$emit('search', this.name)이 발생하고, 이는 곧 Parent의 searchUser 메서드를 실행시키는 것입니다.<br>
                    (그리고 이때 this.$emit을 통해 Parent의 메서드로 넘겨줘야 할 데이터가 있다면,
                    예제에서 this.name을 넘겨줬듯이 두번째 이후의 파라미터로 전달해주면 됩니다)
                    <br><br>
                    이와같이 props와 $emit으로 구분해주는 이유는,
                    단순히 Child에서 발생한 이벤트나 데이터를 Parent에게 넘겨주기 위함도 있지만
                    <b>핵심적으로는 Parent에서 props를 통해 Child에게 전달된 데이터의 주체는 어디까지나 Parent여야하기 때문</b>입니다.
                    <br><br>
                    props를 통한 데이터의 전달시, 내부적으로 얕은 복사(Shallow copy)가 발생하게되는데요.<br>
                    이로인해 데이터의 소유주는 Parent지만 Child에서도 값에대한 참조가 가능해짐으로써
                    <b>Child내에서 props로 전달된 값을 수정하면 Parent의 데이터가 오염</b>되게 됩니다.
                    그렇기 때문에 props로 전달된 데이터의 변조는 오너쉽을 가진 Parent에서만 가능하게 우리는 코딩을 해야합니다.
                    <br><br>
                    그리고 그런 프로세스를 위해서 Vue.js는 props에 대응되는 this.$emit을 내장하고 있는 것입니다.<br>
                    (props로 전달된 값을 애초에 Vue.js가 막으면 좋겠지만, Javascript라는 언어에서 변수를 참조하는 특성상 불가능하기에 $emit을 사용하게끔 Vue.js는 가이드하고 있습니다)
                </p>
                <div class="gray-box">
                    <div class="image-box">
                        <img src="@assets/example/component_v_model.jpg"/>
                        <span class="under-text">[ v-model과 :value 그리고 @input ]</span>
                    </div>
                    <p>
                        <b>v-model이라던 ':value + @input'</b><br>
                        &lt;input&gt;태그와 같은 HTML의 기본 태그들도 Vue.js의 &lt;template&gt;에서는 컴포넌트로 해석해야합니다.
                        그리고 &lt;input&gt;태그는 HTML의 기본 태그로써, 개발자가 별다른 정의를 하지 않아도
                        value라는 props(요소)를 가지고 있고 onInput 이벤트를 통해 해당 값을 변경하게 되어있습니다.
                        따라서 Parent에서는 value props를 통해 &lt;input&gt;태그에게 title이라는 데이터가 가진 값은 전달하지만
                        실제 참조된 값의 수정은 Parent에서 발생해야하므로, $emit를 통해 @input가 캐치하여 title의 값이 변경하게 되도록 해야하는 것입니다.<br>
                        (위 코드에서 @input 부분을 정의하지 않게되면, 브라우저에 렌더링된 &lt;input&gt;태그에서는 사용자의 입력에따라 값이 변경된 것처럼 보이지만
                        Parent에 정의된 실제 title 변수의 값은 변하지 않습니다)
                    </p>
                </div>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/skill/component/summary')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 3-5-1. Summary
            </div>
            <div class="right" @click="$router.push('/skill/store')">
                3-6. Store(Vuex) &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>