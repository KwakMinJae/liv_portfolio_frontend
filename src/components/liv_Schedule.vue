<template>
  <div class="game_schedule_all_wrap_page">
      <div class="game_schedule_page">
        <div class="game_day_title_wrap_page">
      <div class="game_day_title_page">
        <div class="game_day_title_1_page">경기 일정</div>
      </div>
      </div>
      <div class="game_day_page">
        <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day1 }}</div>
          <div class="game_time_page">{{ game_time0030 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_sou.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score4 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_liv.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score4 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day2 }}</div>
          <div class="game_time_page">{{ game_time2300 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_liv.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score1 }}</div>
              </div>
              <div class="away_title">Away</div>
              <div class="away_team">
                <div class="away_cre_page"><img src="../assets/sche_aston.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score1 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day3 }}</div>
          <div class="game_time_page">{{ game_time0400 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_les.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score0 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_liv.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score3 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day4 }}</div>
          <div class="game_time_page">{{ game_time0130 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_liv.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score1 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_brent.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score0 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day5 }}</div>
          <div class="game_time_page">{{ game_time0400 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_liv.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score1 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_ful.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score0 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day6 }}</div>
          <div class="game_time_page">{{ game_time0030 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_liv.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score4 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_tot.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score3 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day7 }}</div>
          <div class="game_time_page">{{ game_time0345 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_west.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score1 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_liv.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score2 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day8 }}</div>
          <div class="game_time_page">{{ game_time2300 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_liv.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score3 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_noting.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score2 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day9 }}</div>
          <div class="game_time_page">{{ game_time0400 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_liz.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score1 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_liv.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score6 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day10 }}</div>
          <div class="game_time_page">{{ game_time0030 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_liv.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score2 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_ars.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score2 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day11 }}</div>
          <div class="game_time_page">{{ game_time0400 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_chel.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score0 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_liv.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score0 }}</div>
              </div>
            </div>
          </div>
          </div>
          <div class="game_sch_page">
            <div class="game_day_time_page">
          <div class="game_today_page">{{ game_day12 }}</div>
          <div class="game_time_page">{{ game_time2030 }}</div>
          </div>
          <div class="home_away_wrap_page">
          <div class="home_away_page">
              <div class="home_title_page">Home</div>
              <div class="home_team_page">
                <div class="home_cre_page"><img src="../assets/sche_city.png" alt="홈팀"></div>
                <div class="home_sco_page">{{ score4 }}</div>
              </div>
              <div class="away_title_page">Away</div>
              <div class="away_team_page">
                <div class="away_cre_page"><img src="../assets/sche_liv.png" alt="어웨이팀"></div>
                <div class="away_sco_page">{{ score1 }}</div>
              </div>
            </div>
          </div>
          </div>
          
          
          
        </div>
      </div>
      </div>
</template>
<script>
export default{
    data(){
        return{
            // 경기일
            game_day1:'5월 29일',
            game_day2:'5월 20일',
            game_day3:'5월 16일',
            game_day4:'5월 7일',
            game_day5:'5월 4일',
            game_day6:'5월 1일',
            game_day7:'4월 27일',
            game_day8:'4월 22일',
            game_day9:'4월 18일',
            game_day10:'4월 10일',
            game_day11:'4월 5일',
            game_day12:'4월 1일',
            // 경기 시간
            game_time0030:'시간 00:30',
            game_time2300:'시간 23:00',
            game_time0400:'시간 04:00',
            game_time0130:'시간 01:30',
            game_time0345:'시간 03:45',
            game_time2030:'시간 20:30',
            // 경기 스코어
            score0:0,
            score1:1,
            score2:2,
            score3:3,
            score4:4,
            score5:5,
            score6:6,
            score7:7,
            score8:8,
        }
    }
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
.game_schedule_all_wrap_page{
  height: 100%;
      background: linear-gradient(to bottom right, #f6f6f6 50%, white 50%);
}
.game_schedule_page{
    padding-top: 200px;
  max-width:1350px;
  margin:auto;
}
.game_day_title_page{
  font-size: 32px;
  max-height: 50px;
  /* height:100vh; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top:10px;
  margin-left:50px;
  margin-right: 50px;
  font-weight: bold;
  margin-bottom: 40px;
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
.game_sch_page{
  max-width:400px;
  width:100%;
  max-height: 300px;
  height:100%;
  border:1px solid rgba(0,0,0,0.2);
  border-radius: 5%;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 50px;
}
.game_day_time_page{
  max-height:50px;
  height:100%;
  display: flex;
  align-items: center;
  /* padding-left: 20px; */
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
.home_away_page{
  padding-left: 40px;
  padding-right: 40px;
  margin-top:22px;
}
.home_away_page img{
    margin-left: 0;
    padding-left: 0;
}
.home_team_page{
  max-height: 70px;
  height:100vh;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.home_cre_page{
    margin-left: 0;
}
.home_cre_page img{
  max-width: 40px;
  width:100vw;
}
.home_sco_page{
    margin-right: 0;
}
.away_team_page{
  max-height: 70px;
  height:100vh;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.away_cre_page{
    margin-left: 0;
}
.away_cre_page img{
  max-width: 40px;
  width:100vw;
}
.away_sco_page{
    margin-right: 0;
}
</style>