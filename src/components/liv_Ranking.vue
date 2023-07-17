<template>
    <div class="rank_wrap">
        <div class="rank_wrap1">
    <div class="game_day_title_wrap_page">
      <div class="game_day_title_page">
        <div class="game_day_title_1_page">22-23 프리미어 리그 순위</div>
      </div>
    </div>
    <table>
      <tr class="table_header">
        <th>순위</th>
        <th>팀</th>
        <th>경기수</th>
        <th>승점</th>
        <th>승</th>
        <th>무</th>
        <th>패</th>
        <th>득점</th>
        <th>실점</th>
        <th>득실차</th>
      </tr>
      <tr v-for="team in sortedTeams" :key="team.rank" class="table_main">
        <td :class="getBackgroundClass(team.rank)">{{ team.rank }}</td>
        <td><img :src="team.logo" :alt="team.name"></td>
        <td> {{ team.play }}</td>
        <td style="font-weight: bold;">{{ team.point }}</td>
        <td>{{ team.win }}</td>
        <td>{{ team.draw }}</td>
        <td>{{ team.lose }}</td>
        <td>{{ team.goal }}</td>
        <td>{{ team.lose_point }}</td>
        <td>{{ team.goal_difference }}</td>
      </tr>
    </table>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teams: [
            //맨시티
            {
            rank: 1,
            logo: '/images/rank_city.png',
            name: '맨시티',
            play: 38,
            point: 89,
            win: 28,
            draw: 5,
            lose: 5,
            goal: 94,
            lose_point: 33,
            goal_difference: 61,
          },
          // 아스날
          {
            rank: 2,
            logo: '/images/rank_ars.png',
            name: '아스날',
            play: 38,
            point: 84,
            win: 26,
            draw: 6,
            lose: 6,
            goal: 88,
            lose_point: 43,
            goal_difference: 45,
          },
          // 맨유
          {
            rank: 3,
            logo: '/images/rank_united.png',
            name: '맨유',
            play: 38,
            point: 75,
            win: 23,
            draw: 6,
            lose: 9,
            goal: 58,
            lose_point: 43,
            goal_difference: 15,
          },
          // 뉴캐슬
          {
            rank: 4,
            logo: '/images/rank_castle.png',
            name: '뉴캐슬',
            play: 38,
            point: 71,
            win: 19,
            draw: 14,
            lose: 5,
            goal: 68,
            lose_point: 33,
            goal_difference: 35,
          },
          // 리버풀
          {
            rank: 5,
            logo: '/images/rank_liv.png',
            name: '리버풀',
            play: 38,
            point: 67,
            win: 19,
            draw: 10,
            lose: 9,
            goal: 75,
            lose_point: 47,
            goal_difference: 28,
          },
          // 브라이튼
          {
            rank: 6,
            logo: '/images/rank_bright.png',
            name: '브라이튼',
            play: 38,
            point: 62,
            win: 18,
            draw: 8,
            lose: 12,
            goal: 72,
            lose_point: 53,
            goal_difference: 19,
          },
          // 아스톤 빌라
          {
            rank: 7,
            logo: '/images/rank_aston.png',
            name: '아스톤빌라',
            play: 38,
            point: 62,
            win: 18,
            draw: 7,
            lose: 13,
            goal: 51,
            lose_point: 46,
            goal_difference: 5,
          },
          // 토트넘
          {
            rank: 8,
            logo: '/images/rank_tot.png',
            name: '토트넘',
            play: 38,
            point: 60,
            win: 18,
            draw: 6,
            lose: 14,
            goal: 70,
            lose_point: 63,
            goal_difference: 7,
          },
          // 브렌트 포드
          {
            rank: 9,
            logo: '/images/rank_brent.png',
            name: '브렌트포드',
            play: 38,
            point: 59,
            win: 15,
            draw: 14,
            lose: 9,
            goal: 58,
            lose_point: 46,
            goal_difference: 12,
          },
          // 풀럼
          {
            rank: 10,
            logo: '/images/rank_ful.png',
            name: '풀럼',
            play: 38,
            point: 52,
            win: 15,
            draw: 7,
            lose: 16,
            goal: 55,
            lose_point: 53,
            goal_difference: 2,
          },
          // 크리스탈
          {
            rank: 11,
            logo: '/images/rank_crystal.png',
            name: '크리스탈',
            play: 38,
            point: 45,
            win: 11,
            draw: 12,
            lose: 15,
            goal: 40,
            lose_point: 49,
            goal_difference: -9,
          },
          // 첼시
          {
            rank: 12,
            logo: '/images/rank_chel.png',
            name: '첼시',
            play: 38,
            point: 44,
            win: 11,
            draw: 11,
            lose: 16,
            goal: 38,
            lose_point: 47,
            goal_difference: -9,
          },
          // 울버햄튼
          {
            rank: 13,
            logo: '/images/rank_wolver.png',
            name: '울버햄튼',
            play: 38,
            point: 41,
            win: 11,
            draw: 8,
            lose: 19,
            goal: 31,
            lose_point: 58,
            goal_difference: -27,
          },
          // 웨스트햄
          {
            rank: 14,
            logo: '/images/rank_west.png',
            name: '웨스트햄',
            play: 38,
            point: 40,
            win: 11,
            draw: 7,
            lose: 20,
            goal: 42,
            lose_point: 55,
            goal_difference: -13,
          },
          // 본머스
          {
            rank: 15,
            logo: '/images/rank_bone.png',
            name: '본머스',
            play: 38,
            point: 39,
            win: 11,
            draw: 6,
            lose: 21,
            goal: 37,
            lose_point: 71,
            goal_difference: -34,
          },
          // 노팅엄
          {
            rank: 16,
            logo: '/images/rank_noting.png',
            name: '노팅엄',
            play: 38,
            point: 30,
            win: 9,
            draw: 11,
            lose: 18,
            goal: 38,
            lose_point: 68,
            goal_difference: -30,
          },
          // 에버튼
          {
            rank: 17,
            logo: '/images/rank_ever.png',
            name: '에버튼',
            play: 38,
            point: 36,
            win: 8,
            draw: 12,
            lose: 18,
            goal: 34,
            lose_point: 57,
            goal_difference: -23,
          },
          // 레스터
          {
            rank: 18,
            logo: '/images/rank_les.png',
            name: '레스터',
            play: 38,
            point: 36,
            win: 9,
            draw: 7,
            lose: 22,
            goal: 51,
            lose_point: 68,
            goal_difference: -17,
          },
          // 리즈
          {
            rank: 19,
            logo: '/images/rank_leeds.png',
            name: '리즈',
            play: 38,
            point: 31,
            win: 7,
            draw: 10,
            lose: 21,
            goal: 48,
            lose_point: 78,
            goal_difference: -30,
          },
          // 사우스햄튼
          {
            rank: 20,
            logo: '/images/rank_sou.png',
            name: '사우스햄튼',
            play: 38,
            point: 25,
            win: 6,
            draw: 7,
            lose: 25,
            goal: 36,
            lose_point: 73,
            goal_difference: -37,
          },
        ],
      };
    },
    computed: {
      sortedTeams() {
        return this.teams.sort((a, b) => a.rank - b.rank);
      },
    },
    methods: {
      getBackgroundClass(rank) {
        if (rank >= 1 && rank <= 4) {
          return 'bg_champs';
        } else if (rank >= 5 && rank <= 6) {
          return 'bg_europa';
        } else if (rank >= 18 && rank <= 20) {
          return 'bg_degrade';
        }
        return '';
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
.game_day_page{
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  font-size:24px;
  margin-top: 15px;
  flex-wrap: wrap;
  max-width:1350px;
}
.rank_wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: linear-gradient(to bottom right, #f6f6f6 50%, white 50%);
}
table{
    border: 1px solid rgba(0,0,0,0.1);
    max-width:1000px;
    width:100vw;
    text-align: center;
}
.table_header{
    background-color: #f6f6f6;
    max-width: 1000px;
    width: 100vw;
    height:35px;
}
td img{
    padding-top:5px;
}
.table_main{
  max-width: 1000px;
    width: 100vw;
    height:35px;
}
tr{
  display: flex;
  align-items: center;
  justify-content: center;
}
th{
  /* max-height:100%; */
  width:100%;
}
td{
  width:100%;
  height:35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
td.bg_champs{
    background-color: rgb(78, 124, 177);
}
td.bg_europa{
    background-color: rgb(131, 221, 90);
}
td.bg_degrade{
    background-color: rgb(0,0,0,0.3);
}
</style>