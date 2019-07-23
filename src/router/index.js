import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from "@/pages/home"
import Artists from "@/pages/artists"
import ListCate from "@/pages/listcate"
import Ucenter from "@/pages/ucenter"
import Search from "@/pages/search"
import HotList from "@/pages/musiclist/hot_list"
import KingList from "@/pages/musiclist/king_list"
import NewsList from "@/pages/musiclist/news_list"
import MoreList from "@/pages/morelist"
import MusicPlay from "@/pages/musicplay"
import ArtistsDetails from "@/pages/artistsDetails/artistsDetails"
import LicateDetails from "@/pages/licateDetails/licateDetails"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/musicplay",
      name:"MusicPlay", //因为要传递参数，所以，我必须取个名字..
      component:MusicPlay
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:"/home",
      children:[
        {
          path: "home",
          component: Home,
          redirect:"/home/hot",
          children:[
            {
              path:"hot",
              component:HotList
            },
            {
              path:"king",
              component:KingList
            },
            {
              path:"news",
              component:NewsList
            }
          ]
        },
        {
          path:"artists", //歌手
          component:Artists
        },
        {
          path:"listcate", //榜单
          component:ListCate
        },
        {
          path:"ucenter", //个人中心
          component:Ucenter
        },
        {
          path:"search",//搜索
          component:Search
        },
        {
          path:"more",
          name:"MoreList",
          component:MoreList
        },
        {
          path:"artistsdetails",
          name:"ArtistsDetails",
          component:ArtistsDetails
        },
        {
          path:"licatedetails",
          name:"LicateDetails",
          component:LicateDetails
        }



      ]
    }
  ]
})
