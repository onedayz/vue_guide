<template>
    <div class="biscuit-page">
        <div class="biscuit-msg">
            <div class="msg-word">비</div>
            <div class="msg-word" style="font-weight: 100; transform: rotate(30deg); left: 84px; top: -16px; font-size: 56px;">스</div>
            <div class="msg-word" style="transform: rotate(-40deg); left: 168px; top: -56px; font-size: 128px;">킷,</div>
            <div class="msg-word" style="top: 68px; left: 350px; font-size: 40px; color: #ccc;">비</div>
            <div class="msg-word" style="left: 380px; font-size: 96px; transform: rotate(37deg); top: -40px; font-weight: 300; color: white;">스</div>
            <div class="msg-word" style="left: 480px">킷.</div>

            <div class="msg-word" style="top: 100px; left: 360px; font-size: 124px; font-weight: 300;">와</div>
            <div class="msg-word" style="top: 180px; left: 462px; color: antiquewhite;">그</div>
            <div class="msg-word" style="top: 108px; left: 492px; font-size: 84px;">작,</div>
            <div class="msg-word" style="top: 42px; left: 605px; font-size: 148px; transform: rotate(30deg);">와</div>
            <div class="msg-word" style="top: 178px; left: 690px; transform: rotate(-60deg);">그</div>
            <div class="msg-word" style="top: 100px; left: 760px; font-size: 96px;">작.</div>

            <div class="msg-word sentence" style="top: 260px;">맛</div>
            <div class="msg-word sentence" style="top: 253px; left: 40px; transform: rotate(4deg);">좋</div>
            <div class="msg-word sentence" style="top: 262px; left: 80px; transform: rotate(-8deg); font-size: 48px">은</div>
            <div class="msg-word sentence" style="top: 260px; left: 150px; font-size: 32px; color: white;">비</div>
            <div class="msg-word sentence" style="top: 264px; left: 180px; font-size: 50px; font-weight: 100;">스</div>
            <div class="msg-word sentence" style="top: 258px; left: 228px; font-size: 42px;">킷</div>
            <div class="msg-word sentence" style="top: 260px; left: 278px; font-size: 48px;">을</div>
            <div class="msg-word sentence" style="top: 234px; left: 348px; font-size: 84px; font-weight: 100;">까</div>
            <div class="msg-word sentence" style="top: 248px; left: 425px; font-size: 48px;">먹</div>
            <div class="msg-word sentence" style="top: 260px; left: 470px; font-size: 64px; transform: rotate(5deg);">어</div>
            <div class="msg-word sentence" style="top: 240px; left: 540px; font-size: 96px; font-width: 100; transform: rotate(-8deg);">yo</div>
            <div class="msg-word sentence" style="top: 258px; left: 650px; font-size: 50px;">!</div>
            <div class="msg-word sentence" style="top: 244px; left: 712px; font-size: 128px; color: white;">&gt;ㅁ&lt;</div>
        </div>
        <div class="biscuit-box">
            <div class="biscuit-entrance" @click="$router.push('/msweeper')">
                    <img class="biscuit" src="@assets/biscuit.png"/>
                    <span class="jemok">밟으면 마이아파</span>
                </div>
        </div>

        <div style="display: none;">
            <h5>1. 팩맨</h5>
            <h5>2. 갤러그</h5>
            <h5>3. 로드파이터</h5>
            <h5>4. 산성비</h5>
            <h5>5. 똥피하기</h5>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        document.getElementsByClassName('frame-side')[0].style['display'] = 'none';
    },
    beforeUnmount() {
        document.getElementsByClassName('frame-side')[0].style['display'] = 'block';
    }
};
</script>

<style scoped lang="scss">
.biscuit-page{
    position: fixed;
    top: 0; left:0; width: 100%; height: 100vh;
    background-color: $color__blue-gray-800;
    color: $color__gray-200;
    padding: 20px;
    display: flex; justify-content: center; align-items: center;
    flex-direction: column;
}
.biscuit-msg{
    font-size: 64px;
    font-weight: bold;
    position: absolute; top: 48px; left: 25%;
    width: 1000px;
    .msg-word{
        position: absolute;
    }
    .msg-word.sentence{font-size: 40px;}
}
.biscuit-box{
    position: absolute;
    width: 64%; top: 480px;
    .biscuit-entrance{
        display: inline-flex; flex-direction: column; text-align: center;
        padding: 20px; border-radius: 40%;
        .biscuit{
            cursor: pointer;
            width: 128px; height: 128px;
        }
        &:hover{box-shadow: 0 0 10px 10px dimgrey;}
        .jemok{margin-top: 8px; font-size: 18px;}
    }
    .biscuit-entrance + .biscuit-entrance{margin-left: 64px;}
}

</style>