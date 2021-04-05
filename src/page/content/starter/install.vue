<template>
    <div class="install-page content-page">
        <div class="main-title"><span class="index">-1+1.</span> 일단 서버켜기</div>
        <hr>
        <div class="content-box">
            <div class="content-level-1">
                <p>
                    가이드에 설명되어있는 내용들을 활용하는 실습용도의 프로젝트를 소개합니다.<br>
                    제공되는 프로젝트는 Vue-cli 3를 기반으로 생성하였으며, 아래와 같이 몇가지 라이브러리를 포함하고 있습니다.
                </p>
                <div class="gray-box">
                    <p>1. Vue 3.0 (One Piece Release) </p>
                    <p>2. Vue-router 4.0.5 </p>
                    <p>3. Vuex 4.0.0 </p>
                    <p>4. Scss </p>
                    <p>5. webpack 4.x </p>
                    <p>6. vue-fontawesome 3.0.0-1 </p>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> 로컬에 가져오기</div>
            <div class="content-level-1">
                <p>
                    스타터 프로젝트는 Github 레파지토리를 통해서 제공합니다<br>
                    (<a href="https://github.com/onedayz/vue_starter" target="_blank">여기를 클릭하면 레파지토리로 슈웅 </a>&gt;ㅁ&lt;)
                    해당 레파지토리를 내 로컬로 가져오는 방법은 2가지입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue_starter_git_repository.jpg"/>
                    <span class="under-text">[ Vue Starter Repository ]</span>
                </div>
            </div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> git clone</p>
                <p>
                    가장 보편적인 방법으로 아래 명령과 같이 <b>git clone</b>을 통해서 로컬 레파지토리를 생성하는 방법입니다.
                </p>
                <div class="gray-box">
                    <p>
                        git clone https://github.com/onedayz/vue_starter.git
                    </p>
                </div>
                <p>
                    이 경우엔 Git에서 제공하는 clone 기능을 이용하였기때문에 리모트 레파지토리가 자동으로 등록되며,<br>
                    이후에도 pull/push/fetch/rebase와 같은 명령어를 통해 리모트 레파지토리와 연계할 수 있습니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> zip 다운로드</p>
                <p>
                    zip 형태로 로컬에 다운로드된 압축파일을 해제하면 프로젝트 디렉토리가 나타나게 됩니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue_starter_zip_download.jpg"/>
                    <span class="under-text">[ Vue Starter Download ]</span>
                </div>
                <p>
                    이때 zip 파일명은 레자지토리명 + 브랜치명이되며, 현재 스타터 프로젝트는 dev 브랜치가 기본 브랜치로 설정되었기 때문에
                    vue_starter-dev라는 이름으로 파일이 다운로드 됩니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> 일단 무작정 서버 띄워보기</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> npm install</p>
                <p>
                    npm 패키지를 활용하기위해 <b>npm install</b>명령어를 통해 필요한 패키지들을 설치해줘야 합니다.
                </p>
                <div class="gray-box">
                    <p>
                        npm install
                    </p>
                </div>
                <div class="image-box">
                    <img src="@assets/example/vue_starter_node_modules.jpg"/>
                    <span class="under-text">[ node_modules ]</span>
                </div>
                <p>
                    위와 같이 루트 디렉토리에 node_modules 디렉토리가 생성되었다면 패키지 설치가 완료된겁니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> npm run serve</p>
                <p>
                    해당 프로젝트는 <b>Vue Cli 3</b>에 기반해서 생성된 프로젝트이기 때문에
                    vue-cli-service를 활용해서 node.js 서버가 동작하게끔 기본세팅이 되어있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue_starter_npm_script.jpg"/>
                    <span class="under-text">[ package.json의 기본 npm script ]</span>
                </div>
                <p>
                    따라서 cmd 창을 통해 <b>npm run serve</b>명령어를 실행하거나,<br>
                    사용하시는 IDE에 명령어를 본 명령어를 등록하셔서 서버를 구동시키실 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/vue_starter_npm_setting.jpg"/>
                    <span class="under-text">[ 인텔리J의 npm run serve 설정 ]</span>
                </div>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> 살짜쿵 더 맛보기</div>
            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> 홈</p>
                <p>
                    npm run serve로 스타터를 동작시키면 9090포트를 통해서 구동되게 됩니다.
                    http://localhost:9090을 통해 접속하면 아래와 같은 화면을 만나실 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_home.jpg"/>
                    <span class="under-text">[ Login 화면 ]</span>
                </div>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> 화면구성</p>
                <p>
                    현재 스타터는 GNB와 LNB를 갖춘, 3 Level 형태의 UI로 구성되어있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/starter_layout.jpg"/>
                    <span class="under-text">[ 스타터의 Layout ]</span>
                </div>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="right" @click="$router.push('/starter/directory')">
                -1+2. 프로젝트 구조분석 &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>
    </div>
</template>