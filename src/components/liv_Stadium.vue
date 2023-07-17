<template>
    <div class="liv_his_all_wrap">
        <div class="liv_his_wrap">
            <div class="game_day_title_wrap_page">
            <div class="game_day_title_page">
                <div class="game_day_title_1_page">안필드</div>
            </div>
            </div>
            <div class="gallery_wrap_sub">
                <div class="swiper_border">
                <swiper
                :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }"
                :zoom="true"
                :navigation="true"
                :pagination="{
                    clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
                >
                <swiper-slide>
                    <div class="swiper-zoom-container">
                    <img src="/images/liv_gal_6.jpg" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-zoom-container">
                    <img src="/images/liv_gal_5.jpg" />
                    </div>
                </swiper-slide>
                </swiper>
                </div>
                <div class="his_text">
                    <p>
                    &nbsp;&nbsp;&nbsp;리버풀 FC의 홈 구장. 1884년에 개장하여 지금까지 자리를 지키고 있는 오랜 역사와 전통을 가진 리버풀의 유산이다. 
                    홈 팀에게는 든든한 요새이자 원정 팀에게는 야유와 소음으로 가득찬 지옥 그 자체. 안필드를 무대로 리버풀은 유럽 대항전에서 두 번의 기적을 경험했는데, 
                    2015-16 UEFA 유로파 리그 8강 2차전에서 보루시아 도르트문트를 상대로 추가 시간에 터진 극장골에 힘입어 4:3 역전승을 거뒀던 안필드의 기적(2016년)과 2018-19 UEFA 챔피언스 리그 4강 2차전에서 FC 바르셀로나를 상대로 1차전 0:3의 패배를 4:0 대역전극으로 뒤집어 냈던 안필드의 기적(2019년)이 있다. 또 2017년 4월부터 2021년 1월까지 프리미어 리그에서 무려 68경기 동안 원정팀에게 단 한 번도 패배를 허용하지 않았다.
                    참고로 2016년에 안필드의 증축 공사가 마무리되어 현재의 모습을 갖추게 되었으며, 이후 2021년 추가 증축 계획이 예정되어 있다.
                    </p>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  
  import 'swiper/css';

  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  
  import { Zoom, Navigation, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
  };
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
  .liv_his_all_wrap{
    height: 100%;
    background: linear-gradient(to bottom right, #f6f6f6 50%, white 50%);
  }
  .liv_his_wrap{
    max-width: 1350px;
  }
  .game_day_title_page{
    font-size: 32px;
    max-height: 50px;
    /* height:100vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top:10px;
    margin-left:50px;
    margin-right: 50px;
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 200px;
  }
  .gallery_wrap_sub{
    max-width: 1100px;
  }
  .swiper_border img{
    border: 3px solid #b71515;
    box-shadow: 0px 8px 33px #999;
  }
  .his_text{
    margin-top:70px;
    line-height: 2rem;
    margin-left:20px;
    margin-right:20px;
  }
  .his_text p{
    margin-top:30px;
  }
</style>