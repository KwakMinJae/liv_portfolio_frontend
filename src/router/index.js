import { createRouter, createWebHistory } from 'vue-router';

//main_page와 sub_page 컴포넌트 모듈 가져오기
import liv_Main from '../components/liv_Main.vue'
import liv_News from '../components/liv_News.vue'
import liv_Official from '../components/liv_Official.vue'
import liv_Schedule from '../components/liv_Schedule.vue'
import liv_Ranking from '../components/liv_Ranking.vue'
import liv_Team from '../components/liv_Team.vue'
import liv_Gallary from '../components/liv_Gallery.vue'
import liv_Video from '../components/liv_Video.vue'
import liv_Song from '../components/liv_Song.vue'
import liv_History from '../components/liv_History.vue'
import liv_Stadium from '../components/liv_Stadium.vue'
import liv_Winning from '../components/liv_Winning.vue'
import liv_Kop from '../components/liv_Kop.vue'
import liv_Disaster from '../components/liv_Disaster.vue'
import liv_Error from '../components/liv_Error.vue'

// 뉴스 페이지 목록
import liv_News_cont from '../components/liv_News_cont.vue'
import liv_Official_cont from '../components/liv_Official_cont.vue'
// Vue.use(Router)





const routes = [
  {
    path:'/',
    name:'home',
    component:liv_Main,
    meta: {
      title: '리버풀 포트폴리오',
    },
  },
  {
    path:'/news',
    name:'news',
    component:liv_News,
    meta: {
      title: '리버풀 포트폴리오 - 뉴스',
    },
  },
  {
    path:'/official',
    name:'official',
    component:liv_Official,
    meta: {
      title: '리버풀 포트폴리오 - Official',
    },
  },
  {
    path:'/schedule',
    name:'schedule',
    component:liv_Schedule,
    meta: {
      title: '리버풀 포트폴리오 - 경기일정',
    },
  },
  {
    path:'/ranking',
    name:'ranking',
    component:liv_Ranking,
    meta: {
      title: '리버풀 포트폴리오 - 순위',
    },
  },
  {
    path:'/team',
    name:'team',
    component:liv_Team,
    meta: {
      title: '리버풀 포트폴리오 - 선수단',
    },
  },
  {
    path:'/gallery',
    name:'gallery',
    component:liv_Gallary,
    meta: {
      title: '리버풀 포트폴리오 - 갤러ㅣ',
    },
  },
  {
    path:'/video',
    name:'video',
    component:liv_Video,
    meta: {
      title: '리버풀 포트폴리오 - 영상',
    },
  },
  {
    path:'/song',
    name:'song',
    component:liv_Song,
    meta: {
      title: '리버풀 포트폴리오 - 응원가',
    },
  },
  {
    path:'/history',
    name:'history',
    component:liv_History,
    meta: {
      title: '리버풀 포트폴리오 - 구단역사',
    },
  },
  {
    path:'/stadium',
    name:'stadium',
    component:liv_Stadium,
    meta: {
      title: '리버풀 포트폴리오 - 홈구장',
    },
  },
  {
    path:'/winningrecord',
    name:'winningrecord',
    component:liv_Winning,
    meta: {
      title: '리버풀 포트폴리오 - 우승기록',
    },
  },
  {
    path:'/kop',
    name:'kop',
    component:liv_Kop,
    meta: {
      title: '리버풀 포트폴리오 - The Kop',
    },
  },
  {
    path:'/disaster',
    name:'disaster',
    component:liv_Disaster,
    meta: {
      title: '리버풀 포트폴리오 - 참사',
    },
  },
  {
    path:'/news_cont/:index',
    name:'news_cont',
    component:liv_News_cont,
    meta: {
      title: '리버풀 포트폴리오 - 뉴스',
    },
  },
  {
    path:'/official_cont/:index',
    name:'official_cont',
    component:liv_Official_cont,
    meta: {
      title: '리버풀 포트폴리오 - 오피셜',
    },
  },
  {
    path:'/*',
    name:'error',
    component:liv_Error,
    meta: {
      title: '리버풀 포트폴리오 - Error',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '기본 제목'; // 페이지 제목 설정
  next();
});
export default router;