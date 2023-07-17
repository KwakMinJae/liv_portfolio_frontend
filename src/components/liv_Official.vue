<template>
  <div class="all_wrap">
    <div v-for="(page, index) in paginatedNews" :key="index" class="news_section">
      <router-link :to="getNewsLink(index)" class="sub_news_link" @click="handleNewsClick(index)">
        <div class="news_section_wrap">
          <div class="news_img"><img :src="page.image" :alt="page.altText"></div>
          <div class="news_text_wrap">
            <div class="news_title">{{ page.title }}</div>
            <div class="news_date">
              <div class="jour">{{ page.author }}</div>
              <div class="news_date1">
                <img src="../assets/news_date.svg" alt="뉴스 업로드">
                <span>{{ page.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="pagination">
      <button class="prev-btn" @click="goToPreviousPage" :disabled="currentPage === 1">Previous</button>
      <span class="page-number">{{ currentPage }}</span>
      <button class="next-btn" @click="goToNextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [
        {
          title: "[오피셜] 리버풀 새로운 NO.8 왔다…소보슬러이 영입",
          author: "강동훈 기자",
          date: "2023년 7월 03일",
          image: "/images/news_1.jpg",
          altText: "1번 뉴스기사",
          link: ""
        },
        {
          title: "[오피셜] 리버풀 새로운 NO.10…'월드컵 위너' 맥 앨리스터 영입",
          author: "강동훈 기자",
          date: "2023년 6월 09일",
          image: "/images/news_4.jpg",
          altText: "4번 뉴스기사",
          link: ""
        },
        
      
      ],
      itemsPerPage: 8,
      currentPage: 1
    };
  },
  computed: {
      paginatedNews() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.news.slice(startIndex, endIndex);
      },
      totalPages() {
        return Math.ceil(this.news.length / this.itemsPerPage);
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
      },
      getNewsLink(index) {
        return `/official_cont/:${index}`;
      },
      handleNewsClick(index) {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const actualIndex = startIndex + index;
        this.$router.push({ name: 'official_cont', params: { index: actualIndex.toString() } });
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
router-link{
  cursor: pointer;
}
router-link:hover{
    color: rgba(0,0,0,0.5);
}
.all_wrap{
    padding-top:150px;
}
.news_section{
    margin-bottom: 10px;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
}
.news_section_wrap{
    max-width: 1350px;
    display: flex;
    align-items: center;
}
.news_img{
    max-width:300px;
    width:fit-content;
    margin-left:0px;
    margin-right:0;
    display: flex;
    align-items: center;
    width:100%;
}
.news_img img{
    max-width:300px;
    width: 100%;
    max-height: 170px;
    height:100%;
}
.news_text_wrap{
    max-width: calc(100vw - 15vw);
    margin-left:0px;
    max-width: 895px;
    width:100vw;
}
.news_title{
    font-size:28px;
    max-height: 85px;
    height:100vh;
    margin-left:20px;
    margin-top: 20px;
}
.news_date{
    margin-left:20px;
    max-width: 895px;
    width:100%;
    max-height: 85px;
    height:100%;
    font-size:20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right:0;
    padding-bottom: 20px;
    padding-top:20px;
}
.jour{
  max-width: 200px;
  width:100%;
    margin-left:20px;
    padding:0;
}
.news_date1{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    width:100vh;
}
.news_date1 img{
    max-width:24px;
    padding-top:20px;
    margin:0;
    padding:0;
}
.news_date1 span{
    margin-left:10px;
}
.news_date_day{
  margin-right:0;
  padding-right:0;
}
.sub_news_link{
  color:rgb(0,0,0)
}
.sub_news_link:hover{
  color:rgba(0,0,0,0.4)
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
@media (max-width:768px){
  .news_section_wrap{
    max-width: 1350px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .news_img{
      max-width:600px;
      width:fit-content;
      margin-left:0px;
      margin-right:0;
      display: flex;
      align-items: center;
      width:100%;
  }
  .news_img img{
      max-width:600px;
      width: 100%;
      max-height: 340px;
      height:100%;
  }
    .news_title{
      font-size:24px;
      max-height: 85px;
      height:100vh;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      margin-left:0px;
  }
  .news_date{
    margin-left:0px;
    max-width: 600px;
    width:100%;
    max-height: 85px;
    height:100%;
    font-size:16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:auto;
    padding-bottom: 20px;
    padding-top:20px;
  }
  .jour{
    max-width: 200px;
    width:100%;
    margin-left:0px;
    padding:0;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .news_date1{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    width:100vh;
  }
}
</style>