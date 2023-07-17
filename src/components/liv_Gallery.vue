<template>
  <div class="gallery_all_wrap">
    <div class="game_day_title_wrap_page">
      <div class="game_day_title_page">
        <div class="game_day_title_1_page">갤러리</div>
      </div>
      </div>
  <div class="gallery_wrap_sub">
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
          <img src="/images/liv_gal_1.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_2.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_3.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_4.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_5.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_6.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_7.jpg" />
        </div> 
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_8.jpg" />
        </div> 
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_9.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_10.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_11.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_12.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_13.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_14.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_15.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="/images/liv_gal_16.jpg" />
        </div>
      </swiper-slide>
    </swiper>
    </div>
    </div>
  </template>
  <script>
    // Import Swiper Vue.js components
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
  .gallery_all_wrap{
      height: 100%;
      background: linear-gradient(to bottom right, #f6f6f6 50%, white 50%);
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
  .gallery_wrap_sub img{
    border: 3px solid #b71515;
    box-shadow: 0px 8px 33px #999;
  }
  </style>
  