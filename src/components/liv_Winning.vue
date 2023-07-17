<template>
    <div class="liv_his_all_wrap">
        <div class="liv_his_wrap">
            <div class="game_day_title_wrap_page">
            <div class="game_day_title_page">
                <div class="game_day_title_1_page">우승 기록</div>
            </div>
            </div>
            <div class="winning_record_wrap_page">
                <div class="winning_record_page">
                    <div class="trophy_page">
                    <img src="../assets/league_title.svg" alt="프리미어 리그">
                    <span>19</span>
                    </div>
                    <div class="trophy_page">
                    <img src="../assets/european_cup.svg" alt="챔피언스 리그">
                    <span>6</span>
                    </div>
                    <div class="trophy_page">
                    <img src="../assets/fa_cup.svg" alt="FA컵">
                    <span>8</span>
                    </div>
                    <div class="trophy_page">
                    <img src="../assets/uefa_cup.svg" alt="유로파 리그">
                    <span>3</span>
                    </div>
                    <div class="trophy_page">
                    <img src="../assets/league_cup.svg" alt="EFL컵">
                    <span>9</span>
                    </div>
                    <div class="trophy_page">
                    <img src="../assets/uefa_super_cup.svg" alt="UEFA 슈퍼컵">
                    <span>4</span>
                    </div>
                    <div class="trophy_page">
                    <img src="../assets/fifa_club_world_cup.svg" alt="FIFA 클럽 월드컵">
                    <span>1</span>
                    </div>
                </div>
            </div>
            <table class="winning_table">
                    <tr class="winning_table_title">
                        <th colspan="2">
                            우승 기록
                        </th>
                    </tr>
                    <tr class="winning_table_text">
                        <th>
                            프리미어 리그 (1부) (19회)
                        </th>
                        <td>
                            1900-01, 1905-06, 1921-22, 1922-23, 1946-47, 1963-64, 1965-66, 1972-73, 1975-76, 1976-77,
                            1978-79, 1979-80, 1981-82, 1982-83, 1983-84, 1985-86, 1987-88, 1989-90, 2019-20
                        </td>
                    </tr>
                    <tr class="winning_table_text">
                        <th>
                            EFL 챔피언십 (2부) (4회)
                        </th>
                        <td>
                            1893-94, 1895-96, 1904-05, 1961-62
                        </td>
                    </tr>
                    <tr class="winning_table_text">
                        <th>
                            FA컵 (8회)
                        </th>
                        <td>
                            1964-65, 1973-74, 1985-86, 1988-89, 1991-92, 2000-01, 2005-06, 2021-22
                        </td>
                    </tr>
                    <tr class="winning_table_text">
                        <th>
                            EFL컵 (9회 / 최다 우승)
                        </th>
                        <td>
                            1980-81, 1981-82, 1982-83, 1983-84, 1994-95, 2000-01, 2002-03, 2011-12, 2021-22
                        </td>
                    </tr>
                    <tr class="winning_table_text">
                        <th>
                            FA 커뮤니티 실드 (16회)
                        </th>
                        <td>
                            1964, 1965, 1966, 1974, 1976, 1977, 1979, 1980, 1982, 1986, 1988, 1989, 1990, 2001, 2006, 2022
                        </td>
                    </tr>
                    <tr class="winning_table_text">
                        <th>
                            UEFA 유로파 리그 (3회)
                        </th>
                        <td>
                            1972-73, 1975-76, 2000-01
                        </td>
                    </tr>
                    <tr class="winning_table_text">
                        <th>
                            UEFA 챔피언스 리그 (6회)
                        </th>
                        <td>
                            1976-77, 1977-78, 1980-81, 1983-84, 2004-05, 2018-19
                        </td>
                    </tr>
                    <tr class="winning_table_text">
                        <th>
                            UEFA 슈퍼컵 (4회)
                        </th>
                        <td>
                            1977, 2001, 2005, 2019
                        </td>
                    </tr>
                    <tr class="winning_table_text">
                        <th>
                            FIFA 클럽 월드컵 (1회)
                        </th>
                        <td>
                            2019
                        </td>
                    </tr>
            </table>
        </div>
        
    </div>
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
  .winning_record_wrap_page{
    width:100%;
    margin-top:50px;
    max-height:300px;
    height:100%;
    display: flex;
    align-items: center;
    margin-bottom:50px;
  }
    .winning_record_page{
    max-width:1350px;
    margin:auto;
    display:flex;
  }
    .trophy_page{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:200px;
    margin:auto;
  }
    .trophy_page span{
    margin-top: 20px;
    font-weight:700;
  }
    .winning_record_page img{
    width:100%;
    max-height:270px;
  }
  .winning_table{
    max-width: 1100px;
  }
  .winning_table_title th{
    padding:40px 20px;
    font-size: 24px;
    font-weight: bold;
  }
  .winning_table_text{
    border-bottom: 3px solid #f6f6f6;
  }
  .winning_table tr{
    border-bottom: 3px solid #f6f6f6;
  }
  .winning_table th{
    background-color: #b71515;
    color:#ffffff;
  }
  .winning_table td{
    padding:40px 20px;
  }
</style>