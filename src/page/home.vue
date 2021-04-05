<template>
    <div class="home content-page">
        <img src="@assets/logo.png"/>
        <p><b>Vue.js</b>는 프론트엔드 UI 프레임워크입니다.</p>
        <br><br><br>
        <div class="sijakmal">
            <p>
                &nbsp;&nbsp;시작에 앞서 풀어보는 적당한 인삿말입니다.<br>
                &nbsp;&nbsp;해당 가이드 페이지는 Vue.js를 처음 접해보시는 분들을 대상으로 하여 작성되었습니다.<br>
                &nbsp;&nbsp;2017년에 오픈소스 리서치 업무를 하며 Vue.js를 처음 만났고, 어쩌다보니 지금까지 지겹게 Vue.js를 하고 있습니다.
                그러다보니 당장 Vue.js를 1도 모르는 사람이 1분뒤에 Vue.js 교육 좀 해달라고해도 막힘없이 설명 할 수 있는 역량을 갖추게되었고
                이왕지사 이렇게 된 거, '글쓰는 개발자'라는 닉네임에 어울리게끔 제대로 정리해보자는 생각으로 본 페이지를 만들게 되었습니다.
                <br><br>
                &nbsp;&nbsp;이 페이지를 만들며 생각하고 또 생각했던 포인트는,
                <b>Vue.js를 1도 모르는 사람이 이 가이드를 보더라도 이해 할 수 있게 하자</b>였는데...
                MSG 조금 쳐서, 이만한 가이드는 아직 없을 거 같습니다.
                <br><br>
                &nbsp;&nbsp;다만, 솔직히 말해서 본 가이드가 Vue.js의 모든 걸 담고 있진 않습니다.
                하지만 <b>이 가이드만 보시더라도 Vue.js를 개발하시는데 무리가 없을 정도의 개념과 설명들로 정리</b>해두었습니다.
                그 간 숱한 프로젝트에서 Vue.js를 활용하고 전파하고 교육하며 익힌 진또들만 남겨두었으니,
                본 가이드가 많은 개발자분들께 도움이 되었으면 합니다.
            </p>
            <br>
            <p class="sign">2021.04.06 Grey</p>
        </div>
    </div>
</template>

<script>

import {useRouter} from 'vue-router';

export default {
    name: 'home',
    setup(){
        const router = useRouter();
        const moveTo = (url) => {router.push(url)};
        return {moveTo}
    }
}
</script>

<style scoped lang="scss">
.home{
    display: flex; flex-direction: column;
    justify-content: center;align-items: center;
    padding-top: 0; height: 100vh; min-height: 680px;
    b{color: $color__vue;}
}
.sijakmal{
    //position: absolute; bottom: 35px;
    width : 320px; color: $color__gray-600;
}
.sign{text-align: right; padding-right: 12px; font-size: 10px;}
</style>