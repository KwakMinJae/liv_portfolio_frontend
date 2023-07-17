<template>
  <div class="team_wrap">
    <!-- 감독 -->
    <div class="game_day_title_wrap_page">
      <div class="game_day_title_page">
        <div class="game_day_title_1_page">MANAGER</div>
      </div>
    </div>
    <div class="player_slide">
      <swiper
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="player in players_manager" :key="player.id">
          <div class="player">
            <div class="player_wrap">
              <div class="player_num">
                <img :src="player.numberImage" :alt="player.number">
              </div>
              <div class="player_name">
                <span class="player_name1">{{ player.name }}</span><br>
                <span class="player_posi">{{ player.position }}</span>
              </div>
            </div>
            <div class="player_img">
              <img :src="player.image" :alt="player.name">
            </div>
          </div>
          <div class="stat_wrap">
            <div class="stat_title">
              <span></span>
            </div>
            <div class="stat">
              <div class="manager_box">
                <div class="key_stat_title">
                  <span>Nationality</span>
                </div>
                <div class="manager_nation">
                  <span>German</span>
                </div>
              </div>
              <div class="manager_box">
                <div class="key_stat_title">
                  <span>Honours</span>
                </div>
                <div class="manager_nation">
                  <span>
                    FA Community Shield (2022)<br>
                    FA Cup (2022)<br>
                    Carabao Cup (2022)<br>
                    Premier League (2019-20)<br>
                    FIFA Club World Cup (2019)<br>
                    UEFA Super Cup (2019)<br>
                    Champions League (2019)<br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>


    <!-- 골키퍼 -->
    <div class="game_day_title_wrap_page">
      <div class="game_day_title_page">
        <div class="game_day_title_1_page">GOALKEEPER</div>
      </div>
    </div>
    <div class="player_slide">
      <swiper
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="player in players_g" :key="player.id">
          <div class="player">
            <div class="player_wrap">
              <div class="player_num">
                <img :src="player.numberImage" :alt="player.number">
              </div>
              <div class="player_name">
                <span class="player_name1">{{ player.name }}</span><br>
                <span class="player_posi">{{ player.position }}</span>
              </div>
            </div>
            <div class="player_img">
              <img :src="player.image" :alt="player.name">
            </div>
          </div>
          <div class="stat_wrap">
            <div class="stat_title">
              <span>키 스탯 2022-23</span>
            </div>
            <div class="stat">
              <div class="stat_box" v-for="stat in player.stats" :key="stat.id">
                <div class="key_stat_title">
                  {{ stat.title }}
                </div>
                <div class="key_stat_num">
                  {{ stat.value }}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 수비수 -->
        <div class="game_day_title_wrap_page">
      <div class="game_day_title_page">
        <div class="game_day_title_1_page">DEFENDER</div>
      </div>
    </div>
    <div class="player_slide">
      <swiper
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="player in players_d" :key="player.id">
          <div class="player">
            <div class="player_wrap">
              <div class="player_num">
                <img :src="player.numberImage" :alt="player.number">
              </div>
              <div class="player_name">
                <span class="player_name1">{{ player.name }}</span><br>
                <span class="player_posi">{{ player.position }}</span>
              </div>
            </div>
            <div class="player_img">
              <img :src="player.image" :alt="player.name">
            </div>
          </div>
          <div class="stat_wrap">
            <div class="stat_title">
              <span>키 스탯 2022-23</span>
            </div>
            <div class="stat">
              <div class="stat_box" v-for="stat in player.stats" :key="stat.id">
                <div class="key_stat_title">
                  {{ stat.title }}
                </div>
                <div class="key_stat_num">
                  {{ stat.value }}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 미드필더 -->
    <div class="game_day_title_wrap_page">
      <div class="game_day_title_page">
        <div class="game_day_title_1_page">MIDFIELDER</div>
      </div>
    </div>
    <div class="player_slide">
      <swiper
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="player in players_m" :key="player.id">
          <div class="player">
            <div class="player_wrap">
              <div class="player_num">
                <img :src="player.numberImage" :alt="player.number">
              </div>
              <div class="player_name">
                <span class="player_name1">{{ player.name }}</span><br>
                <span class="player_posi">{{ player.position }}</span>
              </div>
            </div>
            <div class="player_img">
              <img :src="player.image" :alt="player.name">
            </div>
          </div>
          <div class="stat_wrap">
            <div class="stat_title">
              <span>키 스탯 2022-23</span>
            </div>
            <div class="stat">
              <div class="stat_box" v-for="stat in player.stats" :key="stat.id">
                <div class="key_stat_title">
                  {{ stat.title }}
                </div>
                <div class="key_stat_num">
                  {{ stat.value }}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>


    <!-- 공격수 -->
    <div class="game_day_title_wrap_page">
      <div class="game_day_title_page">
        <div class="game_day_title_1_page">FORWARD</div>
      </div>
    </div>
    <div class="player_slide">
      <swiper
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="player in players_f" :key="player.id">
          <div class="player">
            <div class="player_wrap">
              <div class="player_num">
                <img :src="player.numberImage" :alt="player.number">
              </div>
              <div class="player_name">
                <span class="player_name1">{{ player.name }}</span><br>
                <span class="player_posi">{{ player.position }}</span>
              </div>
            </div>
            <div class="player_img">
              <img :src="player.image" :alt="player.name">
            </div>
          </div>
          <div class="stat_wrap">
            <div class="stat_title">
              <span>키 스탯 2022-23</span>
            </div>
            <div class="stat">
              <div class="stat_box" v-for="stat in player.stats" :key="stat.id">
                <div class="key_stat_title">
                  {{ stat.title }}
                </div>
                <div class="key_stat_num">
                  {{ stat.value }}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        players_manager: [
          {
            id: 0,
            name: 'Jürgen Klopp',
            position: 'MANAGER',
            image: '/images/manager.jpg',
            stats: [
              { id: 1, title: '출전수', value: '47' },
              { id: 2, title: '어시스트', value: '1' },
              { id: 3, title: '클린시트', value: '17' },
              { id: 4, title: '세이브', value: '130' },
            ],
          },
        ],
        // 골키퍼
        players_g: [
          {
            id: 1,
            number: '1',
            numberImage: '/images/g_num1.png',
            name: 'Alisson Becker',
            position: 'GOALKEEPER',
            image: '/images/g_num1_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '47' },
              { id: 2, title: '어시스트', value: '1' },
              { id: 3, title: '클린시트', value: '17' },
              { id: 4, title: '세이브', value: '130' },
            ],
          },
          // 다른 선수 데이터 추가
          {
            id: 13,
            number: '13',
            numberImage: '/images/g_num13.png',
            name: 'Adrian',
            position: 'GOALKEEPER',
            image: '/images/g_num13_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '1' },
              { id: 2, title: '선발', value: '1' },
              { id: 3, title: '패스수', value: '33' },
              { id: 4, title: '세이브', value: '7' },
            ],
          },
          {
            id: 62,
            number: '62',
            numberImage: '/images/g_num62.png',
            name: 'Caoimhin Kellehar',
            position: 'GOALKEEPER',
            image: '/images/g_num62_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '4' },
              { id: 2, title: '출전시간', value: '360' },
              { id: 3, title: '클린시트', value: '2' },
              { id: 4, title: '세이브', value: '16' },
            ],
          },
          {
            id: 97,
            number: '97',
            numberImage: '/images/g_num97.png',
            name: 'Marcelo Pitaluga',
            position: 'GOALKEEPER',
            image: '/images/g_num97_p.jpg',
            stats: [
              { id: 1, title: 'No data', value: '' },
              { id: 2, title: 'No data', value: '' },
              { id: 3, title: 'No data', value: '' },
              { id: 4, title: 'No data', value: '' },
            ],
          },
        ],

        // 수비수
        players_d: [
          {
            id: 2,
            number: '2',
            numberImage: '/images/d_num2.png',
            name: 'Joe Gomez',
            position: 'DEFENDER',
            image: '/images/d_num2_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '31' },
              { id: 2, title: '출전시간', value: '2125' },
              { id: 3, title: '패스수', value: '1804' },
              { id: 4, title: '클린시트', value: '11' },
            ],
          },
          {
            id: 4,
            number: '4',
            numberImage: '/images/d_num4.png',
            name: 'Virgial van Dijk',
            position: 'DEFENDER',
            image: '/images/d_num4_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '41' },
              { id: 2, title: '공중 경합', value: '170' },
              { id: 3, title: '골', value: '3' },
              { id: 4, title: '패스수', value: '3121' },
            ],
          },
          {
            id: 5,
            number: '5',
            numberImage: '/images/d_num5.png',
            name: 'Ibrahima Konate',
            position: 'DEFENDER',
            image: '/images/d_num5_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '24' },
              { id: 2, title: '태클성공', value: '36' },
              { id: 3, title: '패스수', value: '1430' },
              { id: 4, title: '클린시트', value: '9' },
            ],
          },
          {
            id: 21,
            number: '21',
            numberImage: '/images/d_num21.png',
            name: 'Kostas Tsimikas',
            position: 'DEFENDER',
            image: '/images/d_num21_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '28' },
              { id: 2, title: '출전시간', value: '1289' },
              { id: 3, title: 'Clearance off the line', value: '2' },
              { id: 4, title: '어시시트', value: '6' },
            ],
          },
          {
            id: 22,
            number: '22',
            numberImage: '/images/d_num22.png',
            name: 'Calvin Ramsay',
            position: 'DEFENDER',
            image: '/images/d_num22_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '2' },
              { id: 2, title: '출전시간', value: '93' },
              { id: 3, title: '패스수', value: '114' },
              { id: 4, title: '패스수', value: '1' },
            ],
          },
          {
            id: 26,
            number: '26',
            numberImage: '/images/d_num26.png',
            name: 'Andy Robertson',
            position: 'DEFENDER',
            image: '/images/d_num26_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '43' },
              { id: 2, title: '출전시간', value: '3327' },
              { id: 3, title: '어시스트', value: '11' },
              { id: 4, title: '패스수', value: '2264' },
            ],
          },
          {
            id: 32,
            number: '32',
            numberImage: '/images/d_num32.png',
            name: 'Joel Matip',
            position: 'DEFENDER',
            image: '/images/d_num32_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '21' },
              { id: 2, title: '출전시간', value: '1605' },
              { id: 3, title: '공중경합', value: '65' },
              { id: 4, title: '골', value: '2' },
            ],
          },
          {
            id: 47,
            number: '47',
            numberImage: '/images/d_num47.png',
            name: 'Nathaniel Phillips',
            position: 'DEFENDER',
            image: '/images/d_num47_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '5' },
              { id: 2, title: '출전시간', value: '232' },
              { id: 3, title: '공중경합', value: '18' },
              { id: 4, title: '리커버리', value: '27' },
            ],
          },
          {
            id: 66,
            number: '66',
            numberImage: '/images/d_num66.png',
            name: 'Trent Alexander-Arnold',
            position: 'DEFENDER',
            image: '/images/d_num66_p.jpg',
            stats: [
              { id: 1, title: '출전수', value: '47' },
              { id: 2, title: '골', value: '4' },
              { id: 3, title: '어시스트', value: '10' },
              { id: 4, title: '패스수', value: '2847' },
            ],
          },
          {
            id: 72,
            number: '72',
            numberImage: '/images/d_num72.png',
            name: 'Sepp van den Berg',
            position: 'DEFENDER',
            image: '/images/d_num72_p.jpg',
            stats: [
              { id: 1, title: 'No data', value: '' },
              { id: 2, title: 'No data', value: '' },
              { id: 3, title: 'No data', value: '' },
              { id: 4, title: 'No data', value: '' },
            ],
          },
        ],

        // 미드필더
        players_m: [
            {
              id: 3,
              number: '3',
              numberImage: '/images/m_num3.png',
              name: 'Fabinho',
              position: 'MIDFIELDER',
              image: '/images/m_num3_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '49' },
                { id: 2, title: '출전시간', value: '3538' },
                { id: 3, title: '리커버리', value: '234' },
                { id: 4, title: '패스수', value: '2369' },
              ],
            },
            {
              id: 6,
              number: '6',
              numberImage: '/images/m_num6.png',
              name: 'Thiago Alcantara',
              position: 'MIDFIELDER',
              image: '/images/m_num6_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '28' },
                { id: 2, title: '출전시간', value: '1961' },
                { id: 3, title: '리커버리', value: '171' },
                { id: 4, title: '패스수', value: '1577' },
              ],
            },
            {
              id: 8,
              number: '8',
              numberImage: '/images/m_num8.png',
              name: 'Dominik Szoboszlai',
              position: 'MIDFIELDER',
              image: '/images/m_num8_p.jpg',
              stats: [
                { id: 1, title: 'No data', value: '' },
                { id: 2, title: 'No data', value: '' },
                { id: 3, title: 'No data', value: '' },
                { id: 4, title: 'No data', value: '' },
              ],
            },
            {
              id: 10,
              number: '10',
              numberImage: '/images/m_num10.png',
              name: 'Alexis Mac Allister',
              position: 'MIDFIELDER',
              image: '/images/m_num10_p.jpg',
              stats: [
                { id: 1, title: 'No data', value: '' },
                { id: 2, title: 'No data', value: '' },
                { id: 3, title: 'No data', value: '' },
                { id: 4, title: 'No data', value: '' },
              ],
            },
            {
              id: 14,
              number: '14',
              numberImage: '/images/m_num14.png',
              name: 'Jordan Henderson',
              position: 'MIDFIELDER',
              image: '/images/m_num14_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '43' },
                { id: 2, title: '출전시간', value: '2561' },
                { id: 3, title: '리커버리', value: '190' },
                { id: 4, title: '어시스트', value: '3' },
              ],
            },
            {
              id: 17,
              number: '17',
              numberImage: '/images/m_num17.png',
              name: 'Curtis Jones',
              position: 'MIDFIELDER',
              image: '/images/m_num17_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '23' },
                { id: 2, title: '선발', value: '13' },
                { id: 3, title: '골', value: '3' },
                { id: 4, title: '어시스트', value: '1' },
              ],
            },
            {
              id: 19,
              number: '19',
              numberImage: '/images/m_num19.png',
              name: 'Harvey Elliot',
              position: 'MIDFIELDER',
              image: '/images/m_num19_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '46' },
                { id: 2, title: '출전시간', value: '2268' },
                { id: 3, title: '골', value: '5' },
                { id: 4, title: '어시스트', value: '2' },
              ],
            },
            {
              id: 43,
              number: '43',
              numberImage: '/images/m_num43.png',
              name: 'Stefan Bajcetic',
              position: 'MIDFIELDER',
              image: '/images/m_num43_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '19' },
                { id: 2, title: '선발', value: '11' },
                { id: 3, title: '리커버리', value: '68' },
                { id: 4, title: '골', value: '1' },
              ],
            },
          ],

          // 공격수
          players_f: [
            {
              id: 7,
              number: '7',
              numberImage: '/images/f_num7.png',
              name: 'Luis Diaz',
              position: 'FORWARD',
              image: '/images/f_num7_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '21' },
                { id: 2, title: '골', value: '5' },
                { id: 3, title: '어시스트', value: '2' },
                { id: 4, title: '드리블성공', value: '39' },
              ],
            },
            {
              id: 11,
              number: '11',
              numberImage: '/images/f_num11.png',
              name: 'Mohamed Salah',
              position: 'FORWARD',
              image: '/images/f_num11_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '51' },
                { id: 2, title: '골', value: '30' },
                { id: 3, title: '어시스트', value: '16' },
                { id: 4, title: '결승골', value: '10' },
              ],
            },
            {
              id: 18,
              number: '18',
              numberImage: '/images/f_num18.png',
              name: 'Cody Gakpo',
              position: 'FORWARD',
              image: '/images/f_num18_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '26' },
                { id: 2, title: '골', value: '7' },
                { id: 3, title: '어시스트', value: '2' },
                { id: 4, title: '드리블성공', value: '26' },
              ],
            },
            {
              id: 20,
              number: '20',
              numberImage: '/images/f_num20.png',
              name: 'Diogo Jota',
              position: 'FORWARD',
              image: '/images/f_num20_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '28' },
                { id: 2, title: '출전시간', value: '1394' },
                { id: 3, title: '골', value: '7' },
                { id: 4, title: '어시스트', value: '8' },
              ],
            },
            {
              id: 27,
              number: '27',
              numberImage: '/images/f_num27.png',
              name: 'Darwin Nunez',
              position: 'FORWARD',
              image: '/images/f_num27_p.jpg',
              stats: [
                { id: 1, title: '출전수', value: '42' },
                { id: 2, title: '출전시간', value: '2366' },
                { id: 3, title: '골', value: '15' },
                { id: 4, title: '어시스트', value: '4' },
              ],
            },
            
          ],

        modules: [Navigation, Pagination, Mousewheel, Keyboard],
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
    .team_wrap{
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      background: linear-gradient(to bottom right, #f6f6f6 50%, white 50%);
    }
    .player_slide{
      max-width: 1350px;
      width:100%;
      max-height:700px;
      height:100%;
      display: flex;
      justify-content: center;
      margin-bottom:100px;
    }
    .player{
      display: flex;
      justify-content: space-between;
      background-color: #f6f6f6;
    }
    .player_wrap{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .player_num{
      max-width: 100px;
      /* margin-left:100px; */
    }
    .player_num img{
      width:100%;
    }
    .player_name{
      margin-bottom:50px;
    }
    .player_name1{
      font-size: 32px;
      font-weight: bold;
      margin-bottom:0px;
      display: block;
    }
    .player_posi{
      font-size: 24px;
      color:rgba(0,0,0,0.4)
    }
    .player_img{
      max-height:330px;
    }
    .player_img img{
      max-height: 330px;
      height:100%;
    }
    .stat_wrap{
      margin-bottom: 100px;
    }
    .stat_title{
      margin-top:30px;
      margin-bottom: 30px;
      font-size: 24px;
      font-weight: bold;
      max-width: 925px;
      text-align: center;
    }
    .stat{
      display: flex;
      justify-content: center;
      max-width: 1000px;
    }
    .stat_box{
      max-width:200px;
      width:300%;
      height:150px;
      border-right:1px solid rgba(0,0,0,0.2);
      border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    .manager_box{
      max-width:400px;
      width:300%;
      height:320px;
      border-right:1px solid rgba(0,0,0,0.2);
      border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    .key_stat_title{
      margin-top:20px;
      margin-left:20px;
      font-size: 24px;
      font-weight: bold;
    }
    .key_stat_num{
      margin-top:20px;
      margin-left:30px;
      font-size:20px;
      font-weight:bold;
      color:#b71515;
    }
    .manager_nation{
      margin-top:20px;
      margin-left:30px;
      font-size:20px;
      font-weight:bold;
      color:rgba(0,0,0,0.7);
    }
    #app {
      height: 100%;
    }

    .swiper {
      width: 100%;
      height: 100%;
      max-height:750px;
    }

    .swiper-slide {
      /* text-align: center; */
      font-size: 18px;
      /* background: #f6f6f6; */
    }
</style>