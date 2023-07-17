<template>
<main>
    <div class="club_news_wrap">
      <!-- <div class="news_bg"></div> -->
      <div class="club_news">
        <router-link to="/news_cont/0" class="main_news">
          <div class="news_1">
            <div class="news_1_img"><img src="../assets/news_1.jpg" alt="1번기사"></div>
            <div class="news_1_title">리버풀 새로운 NO.8 왔다…소보슬라이 영입 [오피셜]</div>
          </div>
        </router-link>
        <div class="news_right">
        <router-link to="/news_cont/1" class="main_news">
          <div class="news_2">
            <div class="news_2_img"><img src="../assets/news_2.jpg" alt="2번기사"></div>
            <div class="news_2_title">‘히어 위 고’ 리버풀 미쳤다…1010억 ‘헝가리 특급’ 영입</div>
          </div>
        </router-link>
        <router-link to="/news_cont/2" class="main_news">
          <div class="news_3">
            <div class="news_3_img"><img src="../assets/news_3.jpg" alt="3번기사"></div>
            <div class="news_3_title">중원 보강에 진심인 리버풀…이적료 1,285억까지 올렸다</div>
          </div>
        </router-link>
        </div>
      </div>
    </div>
    <div class="game_schedule_wrap">
      <div class="game_schedule">
        <div class="game_day_title_wrap">
      <div class="game_day_title">
        <router-link to="/schedule" class="main_schedule"><div class="game_day_title_1">경기 일정</div></router-link>
        <router-link to="/schedule"><div class="more_btn"><img src="../assets/add_circle.svg"></div></router-link>
      </div>
      </div>
      <div class="game_day">
        <div class="game_sch">
          <div class="game_today">{{ game_day1 }}</div>
          <div class="home_away_wrap">
          <div class="home_away">
              <div class="home_title">Home</div>
              <div class="home_team">
                <div class="home_cre"><img src="../assets/sche_sou.png" alt="홈팀"></div>
                <div class="hoem_sco">{{ score1 }}</div>
              </div>
              <div class="away_title">Away</div>
              <div class="away_team">
                <div class="away_cre"><img src="../assets/sche_liv.png" alt="어웨이팀"></div>
                <div class="away_sco">{{ score2 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch">
          <div class="game_today">{{ game_day2 }}</div>
          <div class="home_away_wrap">
          <div class="home_away">
              <div class="home_title">Home</div>
              <div class="home_team">
                <div class="home_cre"><img src="../assets/sche_liv.png" alt="홈팀"></div>
                <div class="hoem_sco">{{ score3 }}</div>
              </div>
              <div class="away_title">Away</div>
              <div class="away_team">
                <div class="away_cre"><img src="../assets/sche_aston.png" alt="어웨이팀"></div>
                <div class="away_sco">{{ score4 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch">
          <div class="game_today">{{ game_day3 }}</div>
          <div class="home_away_wrap">
          <div class="home_away">
              <div class="home_title">Home</div>
              <div class="home_team">
                <div class="home_cre"><img src="../assets/sche_les.png" alt="홈팀"></div>
                <div class="hoem_sco">{{ score5 }}</div>
              </div>
              <div class="away_title">Away</div>
              <div class="away_team">
                <div class="away_cre"><img src="../assets/sche_liv.png" alt="어웨이팀"></div>
                <div class="away_sco">{{ score6 }}</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    <div class="club_video_wrap">
      <div class="club_video">
          <div class="main_video">
              <div class="main_video-container">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tpyEKCWlmkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
      </div>
    </div>
    <div class="gall_song_wrap">
      <div class="gall_song_wrap1">
        <div class="club_gallery_wrap">
          <div class="cg_wrap">
          <div class="gallery_title_wrap">
          </div>
          <div class="club_gallery">
            <router-link to="/gallery">
            <div v-for="(image, index) in images" :key="index" :style="{ display: index === 0 ? 'block' : 'none' }">
              <img :src="image.src" :alt="image.alt">
            </div>
            </router-link>
          </div>
        </div>
      </div>
        
      <div class="club_song_wrap">
        <div class="club_song_wrap1">
          <div class="video">
            <div class="video-container">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OV5_LQArLa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    <!-- <div class="hr_make_back"></div>
    <div class="free_board_wrap">
      <div class="free_board">자유게시판</div>
    </div> -->
    <div class="hr_make_back"></div>
    <div class="disaster_wrap">
      <div class="disaster_wrap1">
        <div class="disaster">
        <img src="../assets/memorial-1989-desktop.svg" alt="힐스보로 참사">
      </div>
        <div class="disaster">
        <img src="../assets/memorial-1985-desktop.svg" alt="헤이젤 참사">
        </div>
      </div>
    </div>
    <div class="winning_record_wrap">
      <div class="winning_record">
        <div class="trophy">
          <img src="../assets/league_title.svg" alt="프리미어 리그">
          <span>19</span>
        </div>
        <div class="trophy">
          <img src="../assets/european_cup.svg" alt="챔피언스리그">
          <span>6</span>
        </div>
        <div class="trophy">
          <img src="../assets/fa_cup.svg" alt="FA컵">
          <span>8</span>
        </div>
        <div class="trophy">
          <img src="../assets/uefa_cup.svg" alt="유로파리그">
          <span>3</span>
        </div>
        <div class="trophy">
          <img src="../assets/league_cup.svg" alt="리그컵">
          <span>9</span>
        </div>
        <div class="trophy">
          <img src="../assets/uefa_super_cup.svg" alt="슈퍼컵">
          <span>4</span>
        </div>
        <div class="trophy">
          <img src="../assets/fifa_club_world_cup.svg" alt="피파 클럽월드컵">
          <span>1</span>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default{
    data(){
      return{
        game_day1:'5월 29일',
        game_day2:'5월 20일',
        game_day3:'5월 16일',
        score1:4,
        score2:4,
        score3:1,
        score4:1,
        score5:0,
        score6:3,
        images: [
          { src: ('/images/liv_gal_1.png'), alt: '갤러리 이미지1' },
          { src: ('/images/liv_gal_2.png'), alt: '갤러리 이미지2' },
          { src: ('/images/liv_gal_3.png'), alt: '갤러리 이미지3' }
        ],
        currentIndex: 0,
        intervalId: null
      }
    },
    mounted() {
    this.startSlideShow();
    },
    methods: {
      startSlideShow() {
        this.intervalId = setInterval(() => {
          this.$nextTick(() => {
            const firstSlide = this.images.shift();
            this.images.push(firstSlide);
          });
        }, 2500);
      },
      stopSlideShow() {
        clearInterval(this.intervalId);
      }
      
    },
    beforeDestroy() {
      this.stopSlideShow();
    }
    
    
}
</script>
<style>
:root {
    --swiper-navigation-size: 20px!important;
}
*{
  list-style: none;
  margin:0 auto;
  padding:0;
  font-family: 'IBM Plex Sans KR', sans-serif;
}
a{
  text-decoration: none;
}
router-link{
  cursor: pointer;
  color:inherit
}
.swiper-button-prev, .swiper-button-next{
  color: #ffffff !important;
  /* border: 1px solid rgba(0,0,0,0.8)!important; */
  background-color: rgba(0,0,0,0.8)!important;
  max-width: 40px!important;
  width: 100%!important;
  max-height: 40px!important;
  height:100%!important;
  border-radius: 50%;
}
.more_btn img:hover{
  opacity: 0.5;
}
.more_btn{
  display: flex;
  align-items: center;
  justify-content: center;
}
.club_news_wrap{
  width:100%;
  height:750px;
  background: #b71515;
  margin:auto;
  display:flex;
  align-items: center;
}
.club_news{
  max-width:1350px;
  width:100%;
  margin:auto;
  height:600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:125px;
  border-radius: 30px;
  background-color: #f0f0f0;
  padding: 0px;
  box-sizing: border-box;
  box-shadow: 0px 8px 33px #999;
}

.news_1{
  max-width:800px;
  width:100%;
  box-sizing: border-box;
  font-weight:bold;
}
.news_1_img{
  max-width:800px;
  max-height: 400px;
}
.news_1_img img{
  max-width:800px;
  width:100%;
  max-height: 400px;
  height:100%
}
.news_1_title{
  max-width: 800px;
  font-size:28px;
  margin-top:15px;
  font-weight: bold;
}
.news_right{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:0;
  margin-top:3px;
  padding:0;
  max-width: 360px;
  height: 460px;
  width:100vw;
  
  font-weight: bold;
}
.news_2{
  max-width:360px;
  width:100%;
  box-sizing:border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  margin-left:20px;
}
.news_2_img{
  max-width:360px;
  max-height:160px;
}
.news_2_img img{
  max-width: 360px;
  max-height: 160px;
  width:100vw;
  height:100vh;
}
.news_2_title{
  max-width: 360px;
  font-size:18px;
  margin-top:15px;
}
.news_3{
  max-width:360px;
  width:100%;
  box-sizing:border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  margin-left:20px;
  margin-top:10px;
}
.news_3_img{
  max-width:360px;
  max-height:160px;
}
.news_3_img img{
  max-width: 360px;
  max-height: 160px;
  width:100vw;
  height:100vh;
}
.news_3_title{
  max-width: 360px;
  font-size:18px;
  margin-top:15px;
}
.main_news{
  color:rgba(0,0,0)
}
.news_1:hover{
  color:rgba(0,0,0,0.4);
}
.news_2:hover{
  color:rgba(0,0,0,0.4);
}
.news_3:hover{
  color:rgba(0,0,0,0.4);
}
.game_schedule_wrap{
  width:100%;
  height:400px;
  background: #f6f6f6;
}
.game_schedule{
  max-width:1350px;
  margin:auto;
}
.game_day_title{
  font-size: 24px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top:10px;
  margin-left:50px;
  margin-right: 50px;
}
.game_day{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size:24px;
  margin-top: 15px;
  
}
.game_sch{
  max-width:400px;
  width:100%;
  max-height: 300px;
  height:100%;
  border:1px solid rgba(0,0,0,0.2);
  border-radius: 5%;
  margin-left: 15px;
  margin-right: 15px;
}
.game_today{
  max-height:50px;
  height:100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
.home_away{
  padding-left: 40px;
  padding-right: 40px;
  margin-top:22px;
}
.home_team{
  max-height: 70px;
  height:100vh;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.home_cre img{
  max-width: 40px;
  width:100vw;
}
.away_team{
  max-height: 70px;
  height:100vh;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.away_cre img{
  max-width: 40px;
  width:100vw;
}
.main_schedule{
  color:rgb(0,0,0)
}
.main_schedule :hover{
  color:rgba(0,0,0,0.4)
}
.club_video_wrap{
  width:100%;
  max-height:500px;
  background:#911712
}
.club_video{
  max-width:1350px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main_video {
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 30px;
  background-color: #f0f0f0;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 0px 8px 33px #999;
  
}

.main_video-container {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 50%;
}

.main_video iframe {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.gall_song_wrap{
  width:100%;
  max-height:400px;
  background:#ffffff;
}
.gall_song_wrap1{
  max-width: 1350px;
  display:flex;
  justify-content: space-between;
  margin:auto;
  max-height:400px;
}

.club_gallery_wrap{
  max-width: 675px;
  background: #b71515;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.club_gallery{
  width: 100%;
  max-width: 550px;
  margin: 30px auto;
  border-radius: 30px;
  background-color: #f0f0f0;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 0px 8px 33px #999;
  overflow: hidden;
}
.club_gallery img{
  max-width: 550px;
  width:100%;
  max-height: 300px;
  height:100%;
}
.club_song_wrap{
  max-width: 675px;
  background:#ffd700;
  width:100vw;
}
.club_song_wrap1{
  padding-top: 30px;
}
.video {
  width: 100%;
  max-width: 550px;
  max-height: 345px;
  height:100%;
  margin: 0px auto;
  border-radius: 30px;
  background-color: #f0f0f0;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 0px 8px 33px #999;
}

.video-container {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 60%;
  max-width: 550px;
}

iframe {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.free_board_wrap{
  width:100%;
  height:400px;
  background:#ffffff;
}
.free_board{
  max-width:1350px;
  margin:auto;
}
.hr_make_back{
  width:100%;
  max-height:30px;
  height:100;
  background: #f6f6f6;
  margin-top:50px;
}
.disaster_wrap{
  margin-top:50px;
  width:100%;
  max-height:300px;
}
.disaster_wrap1{
  max-width:1350px;
  display: flex;
  justify-content: space-between;
  margin:auto;
}
.disaster{
  max-width:607.5px;
  width:45%;
  background: #f6f6f6;
  max-height:300px;
}
.disaster img{
  width:100%;
}
.winning_record_wrap{
  width:100%;
  background:#f6f6f6;
  margin-top:50px;
  max-height:300px;
  height:100%;
  display: flex;
  align-items: center;
  padding-top:20px;
  padding-bottom:20px;
}
.winning_record{
  max-width:1350px;
  margin:auto;
  display:flex;
  
}
.trophy{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  max-width:200px;
  margin:auto;
}
.trophy span{
  margin-top: 20px;
  font-weight:700;
}
.winning_record img{
  width:100%;
  max-height:270px;
}
@media (max-width: 768px) {
  .club_news_wrap{
    width:100%;
    /* height:950px !important; */
    
    background: #DC0714;
    margin:auto;
    display:flex;
    align-items: center;
    margin-bottom:50px;
    padding-bottom:850px;
  }
  .club_news{
    display: flex;
    flex-direction: column;
    max-width:1350px;
    width:100%;
    margin:auto;
    /* height:800px!important; */
    justify-content: center;
    align-items: center;
    /* margin-top:50px; */
    border-radius: 30px;
    background-color: #DC0714!important;
    padding: 0px;
    box-sizing: border-box;
    box-shadow: none!important;;
  }
  .news_1{
    max-width:500px;
    max-height: 250px;
    margin-top:50px;
    color:#ffffff;
  }
  .news_1_img{
    max-width:360px;
    max-height: 160px;
    display: flex;
    justify-content: center;
  }
  .news_1 img{
    max-width:360px;
    max-height: 160px;
    width:100vw;
    height:100vh;
  }
  .news_1_title{
    max-width: 360px;
    font-size:18px;
  }
  .news_right{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:0;
    margin-top:13px;
    padding:0;
    font-weight: bold;
    max-width: 360px;
    max-height: 460px;
    width:100vw;
    height:100vh;
  }
  .news_2{
    max-width:500px;
    max-height: 250px;
    margin:0;
    color:#ffffff;
  }
  .news_3{
    max-width:500px;
    max-height: 250px;
    margin:0;
    margin-top:13px;
    color:#ffffff;
  }
  .club_news{
  max-width:1350px;
  width:100%;
  margin:auto;
  max-height:600px;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:125px;
  border-radius: 30px;
  background-color: #f0f0f0;
  padding: 0px;
  box-sizing: border-box;
  box-shadow: 0px 8px 33px #999;
}

  .game_schedule_wrap{
    width:100%;
    height:1200px;
    padding-bottom:50px;
  }
  .game_day_title{
  font-size: 24px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top:100px;
  padding-bottom:50px;
  margin-left:50px;
  margin-right: 50px;
}
  .game_day{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 900px;
  font-size:24px;
  margin-top: 15px;
  }
  .game_sch{
    max-width:400px;
    width:100%;
    height: 300px;
    border:1px solid rgba(0,0,0,0.2);
    border-radius: 5%;
    margin-left: 15px;
    margin-right: 15px;
    margin-top:15px;
  }
  .club_video_wrap{
    width:100%;
    max-height:500px;
    background:#911712;
  }
  .gall_song_wrap{
    width:100%;
    max-height:400px;
    background:#ffffff;
    margin-bottom:80%;
  }
  .gall_song_wrap1{
    max-width: 1350px;
    display:flex;
    flex-direction: column;
    margin:auto;
    max-height:400px;
  }
  .club_gallery_wrap{
    max-width: 1350px;
    background: #b71515;
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .club_gallery{
    width: 100%;
    max-width: 550px;
    margin: 30px auto;
    border-radius: 30px;
    background-color: #f0f0f0;
    padding: 40px;
    box-sizing: border-box;
    box-shadow: 0px 8px 33px #999;
    overflow: hidden;
  }
  .club_gallery img{
    max-width: 550px;
    width:100%;
    max-height: 300px;
    height:100%;
  }
  .club_song_wrap{
    max-width: 1350px;
    background:#ffd700;
    width:100vw;
    padding-bottom:40px;
  }
  .club_song_wrap1{
    padding-top: 30px;
  }
  .winning_record_wrap{
    width:100%;
    background:#f6f6f6;
    margin-top:50px;
    max-height:600px;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top:20px;
    padding-bottom:20px;
  }
  .winning_record{
    max-width:400px;
    margin:auto;
    display:flex;
    flex-wrap: wrap;
    
  }
  .winning_record img{
    width:100%;
    max-height:90px;
  }
  
}
</style>