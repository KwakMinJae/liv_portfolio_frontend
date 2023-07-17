<template>
  <liv_Header></liv_Header>
  <v-slide-x-transition mode="out-in">
    <router-view></router-view>
  </v-slide-x-transition>
  <liv_Footer></liv_Footer>
</template>

<script>
import liv_Header from './components/liv_Header.vue'
import liv_Footer from './components/liv_Footer.vue'

export default {
  name: 'App',

  components:{
    liv_Header,
    liv_Footer,
  },
}
</script>
<style>
*{
  list-style: none;
  margin:0 auto;
  padding:0;
  font-family: 'IBM Plex Sans KR', sans-serif;
}
a{
  text-decoration: none;
}

</style>
