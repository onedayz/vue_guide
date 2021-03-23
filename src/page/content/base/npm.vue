<template>
    <div class="npm-page content-page">
        <div class="main-title"><span class="index">2-1-3.</span> Npm<span class="mini-title">(Node.js)</span></div>
        <hr>
        <div class="content-box">
            <div class="sub-title"><span class="index">1.</span> Summary</div>
            <div class="content-level-1">
                <p>
                    Node.js는 <span class="inner-link" @click="$router.push('/set')">0. Vue.js 개발환경 설정</span>에서 짧게 언급했다시피
                    자바스크립트를 기반으로 구동가능한 Runtime 환경을 제공합니다.
                    이는 매우 다양한 분야에서 활용이 되고있으며, 실제로 Tomcat이나 JBoss와 같은 웹서버의 역할뿐만 아니라
                    임베디드 환경에서 서비스를 구축할시에도 스크립트 기반으로 동작하는 어플리케이션의 지원,
                    그리고 maven과 유사한 역할을 하는 npm을 통해 프론트엔드 개발에도 많은 도움을 주고 있습니다.
                    <br>
                    <br>
                    그 중 Vue.js 개발에서 가장많이 사용되는 3가지 항목을 소개합니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">2.</span> package.json</div>
            <div class="content-level-1">
                <p>
                    npm이 하는 역할 중에 하나는 프론트엔드 개발에 필요한 라이브러리를 설치하고 관리할 수 있다는 것입니다.
                    여기서 package.json의 역할은 maven에 비유하자면 pom.xml입니다.
                    pom.xml은 maven 레파지토리를 통해 설치되는 라이브러리들이 정의되어있으며
                    추가적으로 해당프로젝트의 버전정보와 같은 관련 정보도 함께 정의되어 있습니다.
                    <br>
                    <br>
                    package.json도 이와 마찬가지로 프로젝트의 정보 및 프론트엔드 개발에 필요한 라이브러리들이
                    정의되어있는데요. 이 파일명이 package.json인 이유는 npm에서는 이런 라이브러리들을
                    npm 패키지라고 부르기 때문입니다.
                    <br>
                    <br>
                    package.json 파일에서 설명이 필요한 3가지는 scripts, dependencies, devDependencies입니다.
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#01.</span> scripts</p>
                <p>
                    scripts는 npm 커맨드를 통해 사용할 수 있는 명령어의 정의입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/package_script.jpg"/>
                    <span class="under-text">[ scripts 설정 ]</span>
                </div>
                <p>
                    npm은 <b>npm install</b>과 같이 기본적으로 제공하는 명령어외에
                    scripts 영역을 통해서 세세한 옵션을 개발자가 정의함으로써, 커스텀한 명령어를 정의할 수 있습니다.
                    해당 키워드들에 사용법은 <b>npm run [script]</b>의 형태를 띄며,
                    예를 들어 위의 <b>serve라는 scripts를 동작하려면 npm run serve</b>라는 명령어를 실행하면 됩니다.
                    <br><br>
                    vue starter의 package.json에는 Vue-cli 3가 기본으로 제공하는 아래 3개의 script를 가지고 있습니다.
                </p>
                <div class="gray-box">
                    <p>serve : 개발모드로 사용되는 Node.js 서버를 구동합니다.</p>
                    <p>build : 배포를 목적으로 하는 Static Assets을 위해 모듈 번들링을 실행합니다.</p>
                    <p>lint : 프로젝트 전체 파일에 대해 ESLint를 체크합니다.</p>
                </div>
                <p>
                    위 명령어의 실행을 위해 활용되는 webpack 설정파일은 vue.config.js 입니다.<br>
                    (만약 Vue-cli 3 이전 버전의 Vue.js 프로젝트라면, webpack.config.js와 유사한 이름의 파일이 해당역할을 대체합니다)
                </p>
            </div>

            <div class="content-level-1">
                <p class="third-title"><span class="index">#02.</span> dependencies & devDependencies</p>
                <p>
                    dependencies와 devDependencies를 한 번에 묶은 이유는 2개의 역할이 거의 흡사하기 때문입니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/package_dev.jpg"/>
                    <span class="under-text">[ dependencies와 devDependencies 설정 ]</span>
                </div>
                <p>
                    정의된 코드를 보면 두 키워드 모두 npm 패키지들을 정의하고 있음을 볼 수 있습니다.<br>
                    그리고 해당 패키지들은 'npm install'명령을 통해서 정의된 위치에 상관없이 node_modules 디렉토리에 설치가 되게 되는데요.
                    이 둘을 구분짓는 차이점은 개발 및 테스트를 할 때 필요한 패키지와 실제 운영의 핵심역할을 하는 패키지로 나뉩니다.
                    <br><br>
                    그래서 개발시에 필요한 패키지기에 dev라는 prefix가 붙어서 <b>dev</b>Dependencies인겁니다.<br>
                    정의된 패키지 또한, 면면을 살펴보면 dependencies에는 vue, vue-router와 같이 Vue.js기반의 프로젝트를 개발할 때
                    필수로 정의될 수 밖에 없을 것 갈은 패키지들로 구성되어 있는 것을 확인하실 수 있습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">3.</span> Dev Server</div>
            <div class="content-level-1">
                <p>
                    프론트엔드 개발을 위해 별도의 Node.js 서버를 구동할 수 있습니다.
                </p>
                <div class="gray-box">
                    <p>npm run serve</p>
                </div>
                <p>
                    vue starter 프로젝트를 기준으로 scripts 영역에 'serve' 키워드가 정의되어있으며
                    해당 키워드는 위와 같이 'npm run serve'라는 명령어를 통해 개발서버를 구동시킬 수 있습니다.
                    또한 본 명령어로 구동된 개발서버는 <b>hot reload</b>기능이 적용되어있기 때문에, 코드를 수정하더라도
                    서버를 재기동할 필요없이 즉시 변경된 사항이 웹 브라우져로 반영되는 것을 확인할 수 있습니다.
                </p>
                <div class="image-box">
                    <img src="@assets/example/debug_tool.jpg"/>
                    <span class="under-text">[ IE Edge의 개발자도구를 통해 열어본 home.vue ]</span>
                </div>
                <p>
                    또한, 브라우져가 제공하는 개발자도구(F12)의 Source 탭을 통해서
                    개발 코드가 작성되어있는 *.vue나 *.js파일에 직접 접근이 가능하기때문에
                    브레이크 포인트의 설정도 가능하며 이를통해 개발자는 좀 더 손쉽게 프론트엔드의 디버깅을 할 수 있습니다.
                </p>
            </div>
        </div>

        <div class="content-box">
            <div class="sub-title"><span class="index">4.</span> Build</div>
            <div class="content-level-1">
                <div class="gray-box">
                    <p>npm run build</p>
                </div>
                <p>
                    프론트엔드 개발을 완료하였다면, 실제 운영에 배포할 수 있는 형태로써의 변환이 필요합니다.
                    이를 위해 vue.config.js 설정파일에 정의된 내용을 바탕으로
                    Webpack을 통해 모듈 번들링을 진행하게 되고
                    번들링이 끝나면 SPA 구조로 이루어진 웹 서비스 어플리케이션이 생성되게 됩니다(생성되는 위치는 output 설정값에 따르며, 기본값은 dist 디렉토리입니다)
                </p>
            </div>
        </div>

        <hr>
        <div class="bottom-navigation">
            <div class="left" @click="$router.push('/base/mandatory/webpack')">
                <toy-icon icon="arrow-left"/>&nbsp;&nbsp;&nbsp; 2-1-2. Webpack
            </div>
            <div class="right" @click="$router.push('/base/optional/scss')">
                2-2-1. SCSS &nbsp;&nbsp;&nbsp;<toy-icon icon="arrow-right"/>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'npm'
}
</script>

<style lang="scss" scoped>

</style>