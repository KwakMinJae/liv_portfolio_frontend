<template>
    <div class="video_page_all_wrap">
        <div class="game_day_title_wrap_page">
      <div class="game_day_title_page">
        <div class="game_day_title_1_page">영상</div>
      </div>
    </div>
      
        <div v-for="(video, index) in paginatedVideos" :key="index" class="club_video_sub">
          <div class="main_video_sub">
            <div class="main_video-container_sub">
              <iframe :src="video.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button class="prev-btn" @click="goToPreviousPage" :disabled="currentPage === 1">Previous</button>
        <span class="page-number">{{ currentPage }}</span>
        <button class="next-btn" @click="goToNextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [
          { url: "https://www.youtube.com/embed/9fXsANOpOEM" },
          { url: "https://www.youtube.com/embed/1stk7VL9rbA" },
          { url: "https://www.youtube.com/embed/JCNvIC5yE5o" },
          { url: "https://www.youtube.com/embed/DhQbFjydj5g" },
          { url: "https://www.youtube.com/embed/tpyEKCWlmkY" },
          { url: "https://www.youtube.com/embed/jASNK4yvBjg" },
          { url: "https://www.youtube.com/embed/eGBmBIv0EtE" },
          { url: "https://www.youtube.com/embed/gJgden9YjFg" },
          /////
          { url: "https://www.youtube.com/embed/MkRK3KKLLHI" },
          { url: "https://www.youtube.com/embed/RHWPRzSW3vU" },
          { url: "https://www.youtube.com/embed/60gc67VA4S0" },
          { url: "https://www.youtube.com/embed/0Kk3xobQnWI" },
          { url: "https://www.youtube.com/embed/n6T-WFhvwig" },
          { url: "https://www.youtube.com/embed/j0eVVGUHlBY" },
          { url: "https://www.youtube.com/embed/qMTUGJ6cDuk" },
          { url: "https://www.youtube.com/embed/ZA2FVnXORqQ" },
          /////
          { url: "https://www.youtube.com/embed/m3CDiai33Y0" },
          { url: "https://www.youtube.com/embed/lIc4-1dERc4" },
          { url: "https://www.youtube.com/embed/hZznUN_u4-o" },
          { url: "https://www.youtube.com/embed/ftrTyduMBFc" },
        ],
        itemsPerPage: 8,
        currentPage: 1
      };
    },
    computed: {
      paginatedVideos() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.videos.slice(startIndex, endIndex);
      },
      totalPages() {
        return Math.ceil(this.videos.length / this.itemsPerPage);
      }
    },
    methods: {
      goToPreviousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      goToNextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      }
    }
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
  .video_page_all_wrap{
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

  .club_video_sub{
  max-width:1350px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main_video_sub {
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 30px;
  background-color: #f0f0f0;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 0px 8px 33px #999;
  
}

.main_video-container_sub {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 50%;
}

.main_video_sub iframe {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
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
  .video_page_all_wrap{
    height: 100%;
    background: linear-gradient(to bottom right, #f6f6f6 50%, white 50%);
  }
  .video_page_sec_wrap{
    padding-top:200px;
    /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
    max-width: 1350px;
  }
  .club_video_sub{
  max-width:1350px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main_video_sub {
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 30px;
  background-color: #f0f0f0;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 0px 8px 33px #999;
  
}

.main_video-container_sub {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 50%;
}

.main_video_sub iframe {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.pagination {
  max-width: 900px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #ffd700;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-number {
  font-weight: bold;
}
</style>