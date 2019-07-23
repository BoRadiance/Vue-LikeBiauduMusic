<template>
  <div>
    <TodayRecommend title="今日榜单" type="1"/>
    <NewsMusic />
    <SwiperBanner />
    <MusicListNav />

    <!--这里因为榜单没必要每次都刷新去获取数据,所以我们用了keep-alive-->
    <keep-alive>
      <router-view />
    </keep-alive>
    <TodayRecommend title="热门歌单" type="24"/>
  </div>
</template>

<script>
  import TodayRecommend from "../components/Today_Recommend"
  import NewsMusic from "../components/News_Music"
  import SwiperBanner from "../components/Swiper_Banner"
  import MusicListNav from "./musiclist/music_listnav"


    export default {
        name: "home",
      components:{
        TodayRecommend,
        NewsMusic,
        SwiperBanner,
        MusicListNav
      }
    }
</script>

<style scoped>

</style>
