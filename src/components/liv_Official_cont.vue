<template>
    <div class="liv_his_all_wrap">
      <div class="liv_his_wrap">
        <div class="game_day_title_wrap_page">
          <div class="game_day_title_page">
            <div class="game_day_title_1_page">{{ currentNews.title }}</div>
          </div>
        </div>
        <div class="news_aut_wrap">
          <div class="news_cont_date">
            {{ currentNews.date }}
          </div>
          <div class="news_cont_author">
            {{ currentNews.author }}
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
                  <img :src="currentNews.image" :alt="currentNews.altText">
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="his_text">
            <p>{{ currentNews.text1 }}</p>
            <p>{{ currentNews.text2 }}</p>
            <p>{{ currentNews.text3 }}</p>
            <p>{{ currentNews.text4 }}</p>
            <p>{{ currentNews.text5 }}</p>
            <p>{{ currentNews.text6 }}</p>
            <p>{{ currentNews.text7 }}</p>
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
      data() {
        return {
          news: [
            {
              title: "[오피셜] 리버풀 새로운 NO.8 왔다…소보슬러이 영입",
              author: "강동훈 기자",
              date: "2023년 7월 03일",
              image: "/images/news_1.jpg",
              altText: "1번 뉴스기사",
              link: "",
              text1: "[골닷컴] 강동훈 기자 = 잉글랜드 프리미어리그(EPL) 리버풀이 ‘헝가리 특급’ 도미니크 소보슬러이(22)를 품으면서 올여름 두 번째 보강에 성공했다. 등번호는 ‘레전드’ 스티븐 제라드(43·잉글랜드)가 달았던 상징적인 ‘NO.8’을 배정받았다.",
              text2: "리버풀은 3일(한국시간) 구단 공식 홈페이지를 통해 “취업 허가(워크 퍼밋)를 받으면서 소보슬러이를 영입을 완료했다. 앞서 알렉시스 맥 앨리스터(24)에 이어 올여름 두 번째 영입”이라면서 “등번호는 8번을 달 것”이라고 발표했다.",
              text3: "유럽축구 이적시장 전문가 파브리지오 로마노 기자에 따르면 리버풀은 라이프치히에 이적 허용 금액(바이아웃)인 7,000만 유로(약 1,007억 원)를 지불하면서 합의한 것으로 전해졌다. 이로써 소보슬러이는 버질 반 다이크(31)와 다윈 누녜스(24)에 이어 역대 구단 최다 이적료(클럽 레코드) 3위에 오르게 됐다.",
              text4: "리버풀 유니폼을 입은 소보슬러이는 “정말 기쁘다. 이적이 성사되기 전까지 길었고, 기다리는 동안 힘들었다”면서 “결국 입단을 마쳤고, 지금 기분은 너무 행복하다. 빨리 경기를 뛰고 싶다. 앞으로가 너무 기대된다”고 소감을 전했다.",
              text5: "당초 리버풀은 지난주 초 소보슬러이와 접촉해 개인 합의를 마쳤지만, 라이프치히와 이적료 협상 과정에선 난항을 겪었다. 결국 ‘교착 상태’에 빠지자 칼을 빼 들었다. 지난 1일 바이아웃을 지불했다. 이후 최종 서명까지 ‘일사천리’로 진행하면서 영입을 마무리했다.",
              text6: "리버풀이 소보슬러이를 영입한 건 중앙 미드필더와 공격형 미드필더는 물론이고, 측면 미드필더까지 소화할 수 있는 다재다능한 유틸리티 플레이어인 점에서 매력을 느꼈기 때문이다. 여기다 위르겐 클롭(56·독일) 감독이 중요시하는 전방 압박 능력과 활동량, 에너지, 스피드를 갖춘 점도 높게 평가한 것 전해졌다.",
              text7: "리버풀은 2019~2020시즌 이후 EPL 우승과 멀어진 데다, 급기야 지난 시즌에는 7년 만에 4위 안에 들지 못하면서 유럽축구연맹(UEFA) 챔피언스리그(UCL) 진출권도 따내지 못했던 터라 올여름 공격적인 투자 속에 벌써 두 명을 품었다. 맥 앨리스터와 소보슬러이를 영입다. 하지만 여기서 멈추지 않고 추가 보강을 더 계획하고 있다.",
            },
            // 다른 뉴스 객체들 추가...
            {
              title: "[오피셜] 리버풀 새로운 NO.10…'월드컵 위너' 맥 앨리스터 영입",
              author: "강동훈 기자",
              date: "2023년 6월 09일",
              image: "/images/news_4.jpg",
              altText: "2번 뉴스기사",
              link: "",
              text1: "[골닷컴] 강동훈 기자 = 리버풀(잉글랜드)이 올여름 첫 번째 영입에 성공했다. '월드컵 위너' 미드필더 알렉시스 맥 앨리스터(24)를 영입했다. 특히 '에이스'를 상징하는 등번호 10번을 택하면서 벌써부터 많은 기대를 모으고 있다.",
              text2: "리버풀은 8일(한국시간) 공식 홈페이지를 통해 \"맥 앨리스터를 영입했다\"며 \"메디컬 테스트를 성공적으로 마쳤고, 올여름 첫 영입이 될 것\"이라고 발표했다. 이적료는 비공개지만, 현지 보도에 따르면 이적 허용 금액(바이아웃)을 지불했기 때문에 3,500만 파운드(약 570억 원)인 것으로 알려졌다. 계약기간은 5년이다.",
              text3: "이번 여름 대대적인 스쿼드 개편을 예고한 리버풀은 특히 중원 보강에 심혈을 기울였다. 앞서 나비 케이타(28)와 앨릭스 옥슬레이드 체임벌린(29), 제임스 밀너(37)가 계약 만료로 일제히 떠나면서 새 시즌에 활용할 자원이 한정적이었기 때문이다.",
              text4: "리버풀은 당초 주드 벨링엄(19·보루시아 도르트문트)을 원했지만, 영입 경쟁이 치열해지면서 이적료가 폭등하자 부담을 느껴 결국 철수했다. 대신 이적료가 저렴하거나, 자유계약(FA) 신분이 되는 미드필더를 노리는 쪽으로 선회했다. 그 결과 맥 앨리스터를 품었다.",
              text5: "실제 리버풀은 예상됐던 가격보다 저렴하게 영입했다. 맥 앨리스터는 잉글랜드 프리미어리그(EPL)에서 좋은 활약을 펼쳤고, 2022 국제축구연맹(FIFA) 카타르 월드컵에서 아르헨티나 축구대표팀 일원으로 우승을 차지하며 최근 몸값이 치솟았다. 이에 이적료는 최대 6,000만 파운드(약 980억)까지 거론됐다. 그러나 계약 조항에 따른 바이아웃을 지불하면서 이적료를 절반으로 줄였다.",
              text6: "맥 앨리스터는 \"위르겐 클롭(55·독일) 감독과 함께 하게 돼 기대된다. 월드컵 우승 이후 더 많은 트로피를 갖고 싶어졌다. 리버풀은 그것을 가능하게 해줄 클럽\"이라며 \"리버풀 같은 빅클럽에 있을 때 우승해야 한다. 최선을 다해 돕고 우승할 수 있도록 노력하겠다\"고 입단 소감을 전했다.",
              text7: "아르헨티나 국적의 미드필더 맥 앨리스터는 AA 아르헨티노스 주니어스(아르헨티나)에서 프로 데뷔해 3년간 활약한 후 2019년 1월 브라이튼 앤 호브 알비온(잉글랜드) 유니폼을 입으면서 유럽 무대에 발을 디뎠다. 이후 빼어난 활약상을 선보였고, 리버풀 입단까지 이뤄냈다.",
              text8: "남미 출신답게 그는 볼 컨트롤이나 개인기, 드리블 등 테크닉이 빼어나다. 여기다 패싱력과 킥력이 좋고, 축구 지능이 뛰어나 언제든지 공격 시에 위협적인 기회를 만들어낼 수 있다. 2선과 3선 미드필더 어디서든 뛸 수 있는 다재다능함까지 갖췄다."
            },
          ],
          currentNewsIndex: 0,
        };
      },
      computed: {
      currentNews() {
      const index = parseInt(this.$route.params.index);
      return this.news[index];
    },
    },
    methods: {
      shareNews() {
        // Custom method to share the news article
        const { title, link } = this.currentNews;
        const shareText = `Check out this news: ${title} - ${link}`;
  
        // Example code to share the news using the Web Share API
        if (navigator.share) {
          navigator.share({
            title: 'News Article',
            text: shareText,
            url: link,
          })
            .then(() => {
              console.log('News shared successfully');
            })
            .catch((error) => {
              console.error('Error sharing news:', error);
            });
        } else {
          
          console.log('Web Share API not supported');
         
        }
      },
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
    .game_day_title_wrap_page{
      max-width:1000px;
    }
    .game_day_title_page{
      font-size: 32px;
      max-height: 50px;
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
    .news_aut_wrap{
      display: flex;
      justify-content: space-between;
      max-width: 1000px;
      width:100%;
      max-height:100px;
      height:100%;
      margin-top:80px;
    }
    .news_cont_date{
      margin-left:20px;
      display:flex;
      align-items: center;
      padding-bottom:20px;
    }
    .news_cont_author{
      margin-right:20px;
      display:flex;
      align-items: center;
      padding-bottom:20px;
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
  
  