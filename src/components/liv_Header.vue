<template>
    <header dark>
    <div class="top_wrap">
      <div class="header_logo_wrap">
        <div class="header_logo">
          <transition name="image-transition">
          <router-link to="/"><h1><img :key="logoImage" :src="logoImage" alt="로고"></h1></router-link>
          </transition>
        </div>
      </div>
      <div class="header_right">
        <div class="login">
          <div class="never_walk">
            <img src="../assets/walk_alone_white.png" alt="you'll never walk alone">
          </div>
        </div>
        <nav class="nav">
          <div id="nav_bg_wrap" :style="{ display: isSlideDown ? 'block' : 'none'}" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
            <div id="nav_bg"></div>
            <div id="nav_bg_logo">
              <a href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.liverpoolfc.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F27056138%2F" target="_blank"><img src="../assets/linked_red.svg" alt="linked"></a>
              <a href="https://www.facebook.com/LiverpoolFC" target="_blank"><img src="../assets/facebook_red.svg" alt="facebook"></a>
              <a href="https://www.tiktok.com/@liverpoolfc" target="_blank"><img src="../assets/tictok_red.svg" alt="linked"></a>
              <a href="https://www.instagram.com/liverpoolfc/" target="_blank"><img src="../assets/insta_red.svg" alt="linked"></a>
              <a href="https://twitter.com/lfc" target="_blank"><img src="../assets/twitter_red.svg" alt="linked"></a>
              <a href="https://www.youtube.com/liverpoolfc" target="_blank"><img src="../assets/youtube_red.svg" alt="linked"></a>
            </div>
          </div>
          <ul class="nav_all">
            <li class="nav_1dep" :class="{ active: isActive }" @mouseover="handleMouseOver" @mouseout="handleMouseOut"><router-link to="" class="nav_1dep_link">뉴스</router-link>
              <ul class="nav_2dep" :style="{ display: isSlideDown ? 'block' : 'none' }">
                <li><router-link to="/news" class="nav_2dep_link"><span>뉴스</span></router-link></li>
                <li><router-link to="/official" class="nav_2dep_link"><span>Official</span></router-link></li>
              </ul>
            </li>
            <li class="nav_1dep" :class="{ active: isActive }" @mouseover="handleMouseOver" @mouseout="handleMouseOut"><router-link to="" class="nav_1dep_link">일정/순위/선수단</router-link>
              <ul class="nav_2dep" :style="{ display: isSlideDown ? 'block' : 'none' }">
                <li><router-link to="/schedule" class="nav_2dep_link"><span>경기 일정</span></router-link></li>
                <li><router-link to="/ranking" class="nav_2dep_link"><span>순위</span></router-link></li>
                <li><router-link to="/team" class="nav_2dep_link"><span>선수단</span></router-link></li>
              </ul>
            </li>
            <li class="nav_1dep" :class="{ active: isActive }" @mouseover="handleMouseOver" @mouseout="handleMouseOut"><router-link to="" class="nav_1dep_link">미디어</router-link>
              <ul class="nav_2dep" :style="{ display: isSlideDown ? 'block' : 'none' }">
                <li><router-link to="/video" class="nav_2dep_link"><span>영상</span></router-link></li>
                <li><router-link to="/gallery" class="nav_2dep_link"><span>갤러리</span></router-link></li>
                <li><router-link to="/song" class="nav_2dep_link"><span>응원가</span></router-link></li>
              </ul>
            </li>
            <li class="nav_1dep" :class="{ active: isActive }" @mouseover="handleMouseOver" @mouseout="handleMouseOut"><router-link to="" class="nav_1dep_link">역사</router-link>
              <ul class="nav_2dep" :style="{ display: isSlideDown ? 'block' : 'none' }">
                <li><router-link to="/history" class="nav_2dep_link"><span>구단역사</span></router-link></li>
                <li><router-link to="/stadium" class="nav_2dep_link"><span>홈구장</span></router-link></li>
                <li><router-link to="/winningrecord" class="nav_2dep_link"><span>우승기록</span></router-link></li>
                <li><router-link to="/Kop" class="nav_2dep_link"><span>The Kop</span></router-link></li>
                <li><router-link to="/disaster" class="nav_2dep_link"><span>참사</span></router-link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <v-card class="v_card_display">
    <v-layout>

      <v-app-bar
        color="#dc0714"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" color="white"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <div class="v-toolbar-title">
            <router-link to="/" class="v-toolbar-title1">
              <img src="../assets/app_logo.svg" alt="로고">
            </router-link>
          </div>
        </v-toolbar-title>
      
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
        class="nav_drawer"
        height="100%"
      >
      <v-list class="nav_list">
    <v-list-item :to="items[0].link" @click="navigate(items[0])">
      <v-list-item-content>
        {{ items[0].title }}
      </v-list-item-content>
    </v-list-item>
    <v-list-item :to="items[1].link" @click="navigate(items[1])">
      <v-list-item-content>
        {{ items[1].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[2].link" @click="navigate(items[2])">
      <v-list-item-content>
        {{ items[2].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[3].link" @click="navigate(items[3])">
      <v-list-item-content>
        {{ items[3].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[4].link" @click="navigate(items[4])">
      <v-list-item-content>
        {{ items[4].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[5].link" @click="navigate(items[5])">
      <v-list-item-content>
        {{ items[5].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[6].link" @click="navigate(items[6])">
      <v-list-item-content>
        {{ items[6].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[7].link" @click="navigate(items[7])">
      <v-list-item-content>
        {{ items[7].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[8].link" @click="navigate(items[8])">
      <v-list-item-content>
        {{ items[8].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[9].link" @click="navigate(items[9])">
      <v-list-item-content>
        {{ items[9].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[10].link" @click="navigate(items[10])">
      <v-list-item-content>
        {{ items[10].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[11].link" @click="navigate(items[11])">
      <v-list-item-content>
        {{ items[11].title }}
      </v-list-item-content>
  </v-list-item>
  <v-list-item :to="items[12].link" @click="navigate(items[12])">
      <v-list-item-content>
        {{ items[12].title }}
      </v-list-item-content>
  </v-list-item>

</v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
    </div>
  </header>
</template>
<script>

export default {
  // name: 'App',

  data(){
    return{
      scrollPosition: 0,
      logoImage: '/images/liverpoolfc_crest.png',
      isSlideDown: false,
      isActive: false,
      drawer: false,
      group: null,
      items: [
        {
          title: '뉴스',
          value: '뉴스',
          link: '/news',
        },
        {
          title: 'Official',
          value: 'Official',
          link: '/official'
        },
        {
          title: '경기일정',
          value: '경기일정',
          link: '/schedule'
        },
        {
          title: '순위',
          value: '순위',
          link: '/ranking'
        },
        {
          title: '선수단',
          value: '선수단',
          link: '/team'
        },
        {
          title: '영상',
          value: '영상',
          link: '/video'
        },
        {
          title: '갤러리',
          value: '갤러리',
          link: '/gallery'
        },
        {
          title: '응원가',
          value: '응원가',
          link: '/song'
        },
        {
          title: '구단역사',
          value: '구단역사',
          link: '/history'
        },
        {
          title: '홈구장',
          value: '홈구장',
          link: '/stadium'
        },
        {
          title: '우승기록',
          value: '우승기록',
          link: '/winningrecord'
        },
        {
          title: 'The Kop',
          value: 'The Kop',
          link: '/kop'
        },
        {
          title: '참사',
          value: '참사',
          link: '/disaster'
        },
      ],
    }
    
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
    this.scrollPosition = window.scrollY;
    },
    handleMouseOver() {
      this.isSlideDown = true;
      this.isActive = true;
    },
    handleMouseOut() {
      this.isSlideDown = false;
      this.isActive = false;
    },
    navigate(item) {
      // 해당 항목의 경로로 이동합니다.
      this.$router.push(item.link);
    }
  },
  watch: {
  scrollPosition(newPosition) {
    if (newPosition <= 100) {
      this.logoImage = '/images/liverpoolfc_crest.png';
      
    } else {
      this.logoImage = '/images/liverpool_tran_logo.png';

    }
    
  },
  group () {
        this.drawer = false
      },
  
  },
  
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

.image-transition-enter-active,
.image-transition-leave-active {
  transition: opacity 0.5s;
}

.image-transition-enter,
.image-transition-leave-to {
  opacity: 0;
}
header{
  width:100%;
  max-height:100px;
  height:100vh;
  background: #DC0714;
  position:fixed;
  z-index:1000;
  top:0;
}
.top_wrap{
  max-width:1350px;
  display:flex;
  justify-content: space-between;
  margin:auto;
}
.header_logo_wrap{
  width:calc(100vw - 80vw);
  display:flex;
  justify-content:center;
  align-items:center;
  max-height:100px;
}
.header_logo img{
  max-height:90px;
}
.header_right{
  width:calc(100vw - 20vw);
}
.login{
  max-height:50px;
  height:50vh;
  display:flex;
  align-items:center;
  margin-right:200px
}
.account>ul{
  display:flex;
  margin-right:0px;
}
.login li{
  max-width:150px;
  margin-left:20px;
  margin-right:20px;
  cursor:pointer;
  font-weight:500;
}
.account_link{
  color:#000;
}
.account_link:hover{
  font-weight: bold;
  text-decoration: underline;
}
.nav{
  height:50%;
  text-align:center;
  margin-left:280px;
  position:relative;
}
.nav li{
  max-height:50px;
  height:100vh;
}
.nav>ul{
  display:flex;
}
.nav_1dep{
  max-width:200px;
  width:100%;
  display:flex;
  align-items: center;
  position:relative;
}

.nav_1dep.active{
  background:#b71515
}

.nav_1dep_link{
  color:#ffffff;
  
}
.nav_1dep_link:hover{
  opacity:0.5
}
.nav_1dep>ul{
  position:absolute;
  top:50px;
  z-index:10;
  max-width:200px;
  width:100%;
}
.nav_1dep>ul>li{
  display:flex;
  align-items:center;
}
.nav_2dep_link{
  color:rgba(0,0,0,0.8);
}
.nav_2dep_link:hover{
  font-weight: bold;
  text-decoration:underline
}
.nav_2dep #nav_bg_wrap {
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease;

}

#nav_bg_wrap{
  background:#f6f6f6;
  max-width:800px;
  width:100vw;
  z-index:9;
  max-height:410px;
  height:100vh;
  position:absolute;
  top:50px;
  
}
#nav_bg{
  max-width:800px;
  width:100vw;
  z-index:9;
  max-height:350px;
  height:100vh;
}

#nav_bg_logo{
  max-width:800px;
  width:100%;
  z-index:9;
  max-height:60px;
  height:100%;
  border-top:1px solid rgba(0,0,0,0.1);
  display:flex;
  align-items:center;
}
#nav_bg_logo a{
  max-width: 35px;
    margin:10px;
}
#nav_bg_logo img{
  max-width: 35px;
    width:100%;
}
.min_menu{
  display: none;
}
.v_card_display{
  display: none;
}

@media (max-width: 768px) {
  header{
    display: flex;
    align-items: center;
    position:fixed;
    max-height:65px;
  }
  .top_wrap {  
    position: relative;
  }

  .header_logo_wrap {
    display:flex;
    justify-content:center;
    align-items:center;
    max-height:100px;
  }
  .header_logo{
    display: flex;
    justify-content:center;
    align-items:center;
    max-height:90px;
    height:100vh
  }
  .header_logo img{
    max-height:90px;
  }
  .min_menu{
    display: block;
    position: absolute;
    top:20%;
    left:-170%;
  }
  .header_logo_wrap{
    display: none;
  }
  .min_menu{
    display: none;
  }
  .header_right {
    display: none;
  }

  .v_card_display{
    display: block;
  }
  .v-toolbar-title{
    padding:0;
    max-height:30px;
    max-width:150px;

  }
  .v-toolbar-title1{
    display: flex;
    justify-content: center;

  }
  .v_card_display img{
    max-height: 30px;
    margin-left:0;
  }
}
</style>
