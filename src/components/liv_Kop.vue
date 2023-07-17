<template>
    <div class="liv_his_all_wrap">
        <div class="liv_his_wrap">
            <div class="game_day_title_wrap_page">
            <div class="game_day_title_page">
                <div class="game_day_title_1_page">The Kop</div>
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
                    <img src="/images/liv_kop_1.jpg" />
                    </div>
                </swiper-slide>
                </swiper>
                </div>
                <div class="his_text">
                    <p>&nbsp;&nbsp;&nbsp;콥(Kop)은 리버풀 FC의 서포터즈를 통칭해 부르는 단어이다. 리버풀의 홈구장 안필드를 가득 메운 콥들의 열정적인 응원은 리버풀에겐 큰 힘을, 상대편에겐 상당한 부담감을 주는 것으로 유명하다.[70] 클럽에 대한 자부심과 충성심이 유별난 것으로 유명한데 비록 리버풀에게 힘든 시련이 없지 않았지만 과거 오랫동안 유럽 최강팀으로 군림했던 영광스런 역사가 있기에 그 시절이 다시 재현될 수 있다는 믿음을 항상 가지고 있다. 리버풀 홈에서 열리는 경기는 거의 매진이 될 정도로 현지 콥 뿐만 아니라 전세계의 리버풀 서포터들이 정말 많이 홈구장을 찾아오며 리버풀 입장에선 든든한 서포터즈이지만 과거에 콥 출신의 훌리건들이 원인이 된 헤이젤 참사로 빈축을 사기도 했고 힐스버러 참사로 인해 많은 리버풀 서포터들이 희생되는 어둡고 아픈 역사와 관련되기도 하였다.</p>

                    <p>&nbsp;&nbsp;&nbsp;콥이라는 이름의 유래는 1906년 리버풀이 두 번째 1부 리그 우승을 한 후 구단에서 이를 기념하기 위해 새로 만든 스탠드에 보어 전쟁 때 많은 리버풀 출신 병사들이 전사한 곳의 지명인 스피온 콥(Spion Kop)을 추모의 의미로 붙인 것에서 유래한다. 1960-61 시즌에 2부 리그로 강등되었던 리버풀이 우승을 하며 1부 리그로 승격된 후 1962-63 시즌 블랙풀 FC와 시즌 첫 경기를 치렀는데, 이 당시 안필드에 입장한 5만 여명의 팬들 중 절반이 넘는 수의 관중이 골대 뒤의 스피온 콥 스탠드에 모여 리버풀을 외쳤다. 그런데 그때 누군가가 당시 최고의 인기인 비틀즈[71]의 노래를 부르기 시작했는데, 덩달아 옆에 있던 다른 팬들도 같이 노래를 부르며 열정적으로 응원했고, 이런 열정적인 응원을 본 사람들이 스탠드의 이름을 따 리버풀의 서포터즈를 콥이라고 통칭하게 되었다.</p>

                    <p>&nbsp;&nbsp;&nbsp;리버풀 서포터즈, 콥들의 열정적인 응원의 대표적인 예시는 UEFA 챔피언스 리그/2018-19 시즌/4강 2경기 2차전 경기가 대표적이라 할 만하다. 경기 킥오프부터 90분 추가시간 지나서 경기 끝날 때까지 바르샤 선수들이 공을 잡을 때마다 맹렬한 야유를 퍼부었고, 리버풀 선수들이 공을 잡게 되면 열렬한 환호와 응원 함성을 보내주었다. 경기의 분위기를 거의 콥들의 응원이 주도했다고 해도 과언이 아닌데 리버풀은 이들의 용광로같은 기운에 힘입어 상대편에는 메시가 버티고 있고 3-0으로 열세에 빠져있던 상황을 4골을 집어넣어 역전시켜 버린다. 결국 그 시즌 마지막에 리버풀은 빅 이어를 들 수 있었고 리버풀 선수들은 이 영광을 이루게 해준 콥들에게 바친다는 뜻으로 리버풀 관중 앞에 빅 이어를 내려놓고 선수들과 콥 모두 &lt;You'll never walk alone&gt; 응원가를 부르는 감동적인 순간을 만들었다.</p>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import './style.css';

  // import required modules
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