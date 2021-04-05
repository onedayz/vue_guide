<template>
    <div class="set-page content-page">
        <div class="main-title"><span class="index">0.</span> Vue.js 개발환경 설정</div>
        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> 호환성 정보</div>
            <div class="content-level-1">
                <p>
                    Vue는 최소스펙으로 ECMAScript 5에 기초하기 때문에 IE8 이하 버전을 지원하지 않습니다.<br>
                    그외 대부분의 웹 브라우져를 지원하며, 상세 내역은 <a href="https://caniuse.com/es5" target="_blank">ECMAScript 5 호환 브라우저 목록</a>에서 확인하실 수 있습니다</p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> Node.js</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> Summary</p>
                <p>
                    Node.js는 Java가 Virtual Machine을 바탕으로 OS에 종속되지않고 Runtime을 구동하듯이
                    웹브라우저에 종속적인 자바스크립트를 외부에서 실행할 수 있는 Runtime 환경을 제공하는 역할을 합니다.
                    Chrome V8 엔진을 기반으로 동작하며 실제 개발하실 때 주로 사용되는 역할은 아래와 같습니다.
                </p>
                <div class="gray-box">
                    <p>1) 프론트엔드 개발에 필요한 라이브러리를 설치합니다.</p>
                    <p>2) 디버깅이 가능한 프론트엔드 개발용 서버를 별도로 띄울 수 있습니다.</p>
                    <p>3) Webpack와 같은 모듈 번들러와 함께 운영레벨에서 배포시 필요한 클라이언트 파일들을 빌드해줍니다.</p>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> 설치하기</p>

                <div class="content-level-2">
                    <p class="fourth-title">1) 다운로드</p>
                    <p><a href="https://nodejs.org/ko/" target="_blank">Node.js 페이지</a>로 접속합니다.</p>
                    <p>아래와 같이 첫 페이지에서 다운로드 기능을 제공하고 있으며 본인의 OS와 bit를 확인하여 알맞는 LTS버전을 다운받기를 추천드립니다.</p>
                    <div class="image-box">
                        <img src="@assets/example/nodejs_lts.jpg"/>
                        <span class="under-text">[2021/03/22 기준 LTS 버전은 14.16.0]</span>
                    </div>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">2) 설치</p>
                    <p>Windows OS 기준으로 msi 파일이 다운로드되며, 실행하여 설치해줍니다.</p>
                </div>

                <div class="content-level-2">
                    <p class="fourth-title">3) 확인</p>
                    <p>설치 확인은 cmd 창을 통해 아래 2개 명령어를 실행함으로써 확인하실 수 있습니다.</p>
                    <p>※ node와 npm의 버전은 각각 차이가 나는 게 맞습니다</p>
                    <div class="gray-box">
                        <p>node --version </p>
                        <p>npm --version </p>
                    </div>
                    <div class="image-box">
                        <img src="@assets/example/node_version.jpg"/>
                        <span class="under-text">[version option 명령어 실행결과]</span>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">-1.</span> 별첨</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> Node.js 관련 이슈</p>
                <div class="content-level-2">
                    <p class="fourth-title">1) git에서 git:// 프로토콜로 실행이 안 될 경우</p>

                    <p>해당 내용의 경우 npm이 아닌 git의 설정을 아래와 같이 변경해주어야 한다.</p>
                    <div class="gray-box">
                        <p>git config --global url.https://github.com/.insteadOf git://github.com/</p>
                        <p>git config --global url.https://github.com/.insteadOf git://github.com/</p>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="right" @click="$router.push('/overview')">
                1. Overview &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>