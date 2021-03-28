<template>
    <div class="axios-page content-page">
        <div class="main-title">
            <span class="index">3-3.</span> Axios<span class="mini-title">(ajax)</span></div>
        <hr>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> Summary</div>
            <div class="content-level-1">
                <p>
                    Vue.js는 REST API 체계로 지원되는 백엔드와의 ajax를 위해, axios라는 3rd 파티 라이브러리(npm 패키지)를 추천하고 있습니다.
                    해당 패키지는 package.json에 정의되어있으며 npm install 명령어를 통해 설치할 수 있습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> 사용법</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> 전역속성으로 할당하기</p>
                <p>
                    Axios를 선언하는 방법은 아래 2가지가 있습니다.
                </p>
                <div class="gray-box">
                    <p>1. 필요한 *.vue 파일마다 import 해주는 방법</p>
                    <p>2. Vue Application내의 전역 속성으로 Axios를 심어서 this.$router와 같이 코드 어디서든 사용하는 방법</p>
                </div>
                <p>
                    대부분의 웹 서비스에서의 클라이언트는, 백엔드와의 연계가 필수적이기때문에 보편적으로 2번 방법을 사용하며,
                    본 Vue 가이드와 함께 제공되는 Vue 스타터에도 아래와 같이 Vue Application 인스턴스의 전역속성으로 Axios를 등록해놓았습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/import_axios.jpg"/>
                    <span class="under-text">[ Vue Application의 전역 속성에 axios를 주입 ]</span>
                </div>
                <p>
                    위와 같이 createApp 함수로 생성한 Vue Application 객체가 가지고있는 <b>globalProperties라는 전역속성</b>에 axios를 심어줬으며,
                    실제 Vue 파일내에서는 아래와 같이 this.axios 라는 객체명을 통해 Axios의 ajax 기능을 활용할 수 있습니다.
                </p>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> HTTP Method 별로 통신하기</p>
                <p>
                    globalProperties에 등록하였기때문에, Vue 파일 어디서든 this.axios라는 객체명으로 Axios의 기능을 활용하실 수 있습니다.
                    이 객체는 아래와 같이 각각의 HTTP Method명과 동일한 function을 내장하고 있습니다.
                    첫번째 파라미터는 백엔드의 REST API로 정의되어있는 URI로 공통이며
                    두번째 파라미터부터는 백엔드와 연계하여 전달해주는 값을 JSON 객체의 형태로 던짐으로써,
                    직렬화를 통해 REST API가 필요로 하는 데이터를 받아서 처리하게 됩니다.
                    <br><br>
                </p>

                <div class="content-level-2">
                    <p class="fourth-title">1) get</p>
                    <div class="image-box">
                        <img src="@assets/example/axios_get.jpg"/>
                        <span class="under-text">[ this.$http의 get method 사용법 ]</span>
                    </div>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">2) post</p>
                    <div class="image-box">
                        <img src="@assets/example/axios_post.jpg"/>
                        <span class="under-text">[ this.$http의 post method 사용법 ]</span>
                    </div>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">3) put</p>
                    <div class="image-box">
                        <img src="@assets/example/axios_put.jpg"/>
                        <span class="under-text">[ this.$http의 put method 사용법 ]</span>
                    </div>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">4) delete</p>
                    <div class="image-box">
                        <img src="@assets/example/axios_delete.jpg"/>
                        <span class="under-text">[ this.$http의 delete method 사용법 ]</span>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">-1.</span> 별첨</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> 백엔드가 Axios와 통신할 때 데이터를 받는 법</p>
                <p>
                    Axios는 사실 단독으로 활용이 불가능한 npm 패키지라고 할 수 있습니다.
                    태생자체가 백엔드의 REST API와 연계할 때 활용하고자 만들어졌기 때문입니다.
                    REST API를 개발하는 백엔드측에서는 아래와 같은 4가지 방식으로
                    Axios를 이용하는 프론트엔드로부터 '값'들을 받을 수 있습니다.<br>
                </p>
                <div class="gray-box">
                    <p>1. PathVariable : REST API의 URL 경로에 값을 포함시켜 보냄.</p>
                    <p>2. ModelAttribute : 전달하려는 값의 형태가 Object 형태일 경우에 사용.</p>
                    <p>3. RequestParam : 전달하려는 값의 형태가 JAVA의 원시타입(Primitive)일 경우 사용.</p>
                    <p>4. RequestBody : RequestBody에 데이터를 실어서 보냄.</p>
                </div>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/skill/router')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 3-2. Router
            </div>
            <div class="right" @click="$router.push('/skill/structure/summary')">
                3-4. Vue File Structure &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "axios"
}
</script>

<style lang="scss" scoped>

</style>