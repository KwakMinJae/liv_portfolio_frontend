<template>
    <footer>
        <div class="foot_wrap">
        <div class="foot_logo">
            <img src="../assets/liverpoolfc_bottom_crest.png" alt="하단 로고">
        </div>
        <div class="foot_right">
        <div class="foot_copy">
            © COPYRIGHT 2023 THE LIVERPOOL FOOTBALL CLUB AND ATHLETIC GROUNDS LIMITED. ALL RIGHTS RESERVED. MATCH STATISTICS SUPPLIED BY OPTA SPORTS DATA LIMITED. REPRODUCED UNDER LICENCE FROM FOOTBALL DATACO LIMITED. ALL RIGHTS RESERVED.
        </div>
        <div class="sns_logo">
            <a href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.liverpoolfc.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F27056138%2F" target="_blank"><img src="../assets/linked_white.svg" alt="linked"></a>
            <a href="https://www.facebook.com/LiverpoolFC" target="_blank"><img src="../assets/facebook_white.svg" alt="facebook"></a>
            <a href="https://www.tiktok.com/@liverpoolfc" target="_blank"><img src="../assets/tictok_white.svg" alt="linked"></a>
            <a href="https://www.instagram.com/liverpoolfc/" target="_blank"><img src="../assets/insta_white.svg" alt="linked"></a>
            <a href="https://twitter.com/lfc" target="_blank"><img src="../assets/twitter_white.svg" alt="linked"></a>
            <a href="https://www.youtube.com/liverpoolfc" target="_blank"><img src="../assets/youtube_white.svg" alt="linked"></a>
        </div>
        </div>
        </div>
    </footer>
</template>
<script>
export default{

}
</script>
<style scoped>
*{
  list-style: none;
  margin:0 auto;
  padding:0;
  font-family: 'IBM Plex Sans KR', sans-serif;
}
a{
  text-decoration: none;
}
footer{
  margin-top:600px;
  width:100%;
  background:#911712;
  max-height:200px;
  height:100%;
}
.foot_wrap{
  max-width:1350px;
  margin:auto;
  display:flex;
  justify-content:space-between;
}
.foot_logo{
  width:calc(100vw - 90vw);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:25px;
  padding-bottom:25px;
}
.foot_logo img{
    max-width:100px;
    margin-top:5px;
    margin-bottom:5px;
}
.foot_right{
    width:calc(100vw - 10vw);
    margin-left:100px;
}
.foot_copy{
    height:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size:14px;
    font-weight: 700;
}
.sns_logo{
    height:50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.sns_logo a{
    max-width: 35px;
    margin:10px;
}
.sns_logo img{
    max-width: 35px;
    width:100vw;
}
@media (max-width: 768px){
    .foot_wrap{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .foot_logo{
        display: none;
    }
    .foot_copy{
        display: none;
    }
    footer{
        margin-top:200px;
        width:100%;
        background:#911712;
        height:55px;
    }
    .foot_right{
        width:100vw;
        display: flex;
        justify-content: center;
        flex-direction: column-reverse;
        margin:auto;
    }
}
</style>