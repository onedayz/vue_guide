<template>
    <div class="memory-page content-page">
        <div class="main-title"><span class="index">4-1.</span> Memory leak</div>
        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> Summary</div>
            <div class="content-level-1">
                <p>
                    Memory leak은 Javascript 및 Vue 코드 내에서 정의하여 생성된 객체가
                    활용되지 않음에도 불구하고 메모리 상에서 해제되지 않는 경우를 뜻합니다.
                    이에 대한 원인은 브라우져의 GC(Garbage Collector)의 동작주기를 비롯하여
                    GC동작 이후에도 해제되지않거나, 타화면에서 참조한 값으로 인해 미해제된 경우,
                    window나 document와 같은 전역객체에 담아두는 것과 같이
                    다양한 경우에 발생할 수 있는 이슈이며,
                    이로인해 누적되어 쌓인 메모리에 문제가 발생할 경우 브라우져가 뻗어버리는 상황이 발생합니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/memory_leak_process.jpg"/>
                    <span class="under-text">[ Memory leak의 발생 순서도 ]</span>
                </div>
                <div class="gray-box">
                    <p><b>메모리 누수 증상</b></p>
                    <p>1. 페이지 성능(로딩과 같은 퍼포먼스)이 시간이 지날수록 악화됨</p>
                    <p>2. 페이지 성능이 일관적으로 불량함(필요 메모리 이상을 소요한다거나)</p>
                    <p>3. 특정 페이지 접근 이후에 브라우져가 일시적으로 중단됨</p>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> 원인</div>
            <div class="content-level-1">
                <p>
                    메모리 누수에는 다양한 원인들이 복합적으로 얽혀있는 경우가 많으며
                    그 중에서도 주효한 위크 포인트를 짚어봅니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> 페이지간의 정보공유</p>
                <div class="image-box">
                    <img src="@assets/example/memory_leak_document.jpg"/>
                    <span class="under-text">[ 전역 객체에 지역 객체를 할당 ]</span>
                </div>
                <p class="fourth-title">1) 설명</p>
                <div class="content-level-2">
                    <p>
                        페이지간의 데이터를 공유하기 위해, window나 document와 같이
                        웹 어플리케이션이 고유하게 가지게 되는 전역객체에 지역객체(변수/함수)를 내장시키는 경우가 있습니다.
                        이와 같은 경우에는 지역객체가 생성된 페이지를 벗어나더라도,
                        여전히 해당 지역객체를 전역객체가 참조(reference)하기 때문에 GC가 동작하더라도 메모리 해제가 되지 않습니다.
                    </p>
                </div>
                <p class="fourth-title">2) 해결법</p>
                <div class="content-level-2">
                    <p>
                        특정 데이터를 페이지간에 공유해야 하는 사항이 있다면 Vuex를 활용한 Store를 통해 공유되어야 합니다.
                    </p>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> 전역 이벤트 추가</p>
                <div class="image-box">
                    <img src="@assets/example/memory_leak_event.jpg"/>
                    <span class="under-text">[ 전역 이벤트를 지역 함수로 참조 ]</span>
                </div>
                <p class="fourth-title">1) 설명</p>
                <div class="content-level-2">
                    <p>
                        지역 객체를 전역 객체에 할당하는 것과 유사한 경우이며
                        특정 페이지에서 HTML의 이벤트와 연계하여 지역 함수를 매핑시킬 경우,
                        페이지를 이동하여도 해당 이벤트가 callback 대상으로 전역객체에 할당되기 때문에
                        GC가 동작하여도 해당 이벤트가 메모리상에 여전히 남아있게 됩니다.
                    </p>
                </div>
                <p class="fourth-title">2) 해결법</p>
                <div class="content-level-2">
                    <p>
                        unmounted 와 같은 라이프 사이클을 통해 컴포넌트 종료 단계에 removeEventListener를 함께 정의해줘야 합니다.
                    </p>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#03.</span> Password type 기능</p>
                <p class="fourth-title">1) 설명</p>
                <div class="content-level-2">
                    <p>
                        <b>&lt;input type=password&gt;</b>와 같은 형태로 input 태그의 type을 password로 정의할 경우
                        SPA 환경에서 해당 input 태그가 unmounted 되는 버그가 있습니다.
                    </p>
                </div>
                <p class="fourth-title">2) 해결법</p>
                <div class="content-level-2">
                    <p>
                        beforeDestroy 라이프 사이클을 활용하여 해당 input태그를 제거해주어야 합니다.
                    </p>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#04.</span> 외부 라이브러리 활용</p>
                <div class="image-box">
                    <img src="@assets/example/memory_leak_external.jpg"/>
                    <span class="under-text">[ 외부 라이브러리를 통한 객체 생성시 ]</span>
                </div>
                <p class="fourth-title">1) 설명</p>
                <div class="content-level-2">
                    <p>
                        new 키워드를 통해 특정 페이지에서 필요한 외부 라이브러리를 생성할 수 있습니다.
                        하지만 위와 같은 코드의 경우 버튼을 클릭할 때마다 해당 라이브러리의 객체가 생성되며,
                        연이어 메모리에 할당된 외부 객체들은 페이지를 이동하여도 GC에 의해 해제되지 않는 경우가 발생합니다.
                    </p>
                </div>
                <p class="fourth-title">2) 해결법</p>
                <div class="content-level-2">
                    <p>
                        외부 라이브러리를 통한 객체의 생성이 필요한 경우,
                        단순히 new 키워드를 통한 anonymous 타입으로 생성하는게 아니라
                        <b>this.obj = new ExternalLib();</b>와 같이 변수에 할당하는 형식으로 명확하게 생성해야 합니다.
                    </p>
                </div>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="right" @click="$router.push('/trouble/performance')">
                4-2. Performance &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "memory"
}
</script>

<style lang="scss" scoped>

</style>