//封装网络请求
import axios from "@/utils/axios";
//推荐页面
//轮播图数据
let getBannerData = () => {
  let url = "/banner/mobileWeb/newHomepage3";
  return axios.get(url)
};
//推荐页面的广播剧数据
let getRecommendData = () => {
  let url = "/banner/sound/newhomepagedata";
  return axios.get(url)
}

//分类页面
let getAlbumData = () => {
  let url = "/banner/mobileWeb/catalogroot";
  return axios.get(url)
}

//音单页面
let getMusicData = () => {
  let url = "/banner/explore/tagalbum?order=0";
  return axios.get(url)
}


export {
  getBannerData,
  getRecommendData,
  getMusicData,
  getAlbumData
}