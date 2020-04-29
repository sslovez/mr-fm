<template>
  <div class="page-recommend">
    <banner :banners="list"></banner>
    <div class="Panel sounds">
      <div class="panel-head">
        <div class="panel-title">
          <div class="home-panel-title sound">
            <i></i>
            <!-- react-text: 269 -->
            人气M音
            <!-- /react-text -->
          </div>
        </div>
        <div class="panel-nav">
          <a class="home-panel-nav" href="/rank">排行榜</a>
        </div>
      </div>
      <div class="panel-body">
        <a class="Thumbnail sound" href="/sound/418051" v-for="item in list1" :key="item.id">
          <img
            :alt="item.soundstr"
            :src="item.front_cover"
            title="item.soundstr"
            class="lazy-image lazy-loaded cover"
          />
          <div class="title">{{item.soundstr}}</div>
          <div class="detail">
            <span class="item play-times">{{item.view_count_formatted}}</span>
            <span class="item comments">{{item.comment_count}}</span>
          </div>
        </a>
      </div>
    </div>
    <Detail :detail="list2" :detail1='list3'></Detail>
  </div>
</template>

<script>
import Banner from "../Banner";
import Detail from "../Detail";
// import axios from '@/utils/axios'
export default {
  name: "Recommend",
  components: { Banner, Detail },
  data() {
    return {
      list: [],
      list1: [],
      list2: [],
    };
  },
  methods: {
    getBannerData() {
      //请求轮播图数据
      let url = "/banner/mobileWeb/newHomepage3";
      this.$axios.get(url).then(res => {
        // console.log(res);
        this.list = res.info.banner;
        this.list1 = res.info.sound.slice(0, 3);
        // console.log(this.list1)
      });
    },
    getRecommendData() {
      //获取推荐页面的广播剧
      let url = "/banner/sound/newhomepagedata";
      this.$axios.get(url).then(res => {
        this.list2 = res.music
        console.log(this.list2)
        // for (let i = 0; i < res.music.length; i++) {
        //   this.list3.push(res.music[i].objects_point);
        // }
        // console.log(this.list3)
        
      });
    }
  },
  mounted() {
    this.getBannerData();
    this.getRecommendData();
  }
};
</script>
<style lang="scss" scoped>
.Panel {
  background-color: transparent;
  border: none;
  display: block;
  position: relative;
  width: 100%;
  margin: 10px auto;
  .panel-head {
    height: 40px;
    line-height: 40px;
    display: flex;
    position: relative;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0 14px;
    .panel-title {
      font-size: 16px;
      .home-panel-title.sound {
        width: 100px;
        i {
          background-image: url("../../assets/icon/smallicon.png");
          background-size: 166px 166px;
          background-position: -28px 0;
          position: relative;
          top: 7px;
          width: 26px;
          height: 26px;
          display: inline-block;
        }
      }
    }
    .panel-nav {
      font-size: 14px;
      color: #9e9e9e;
      display: inline-block;
      .home-panel-nav {
        display: inline-block;
        max-width: 66px;
        text-align: center;
        font-size: 13px;
        color: #9e9e9e;
        -webkit-appearance: none;
      }
      .home-panel-nav:after {
        background-size: 262px 234px;
        background-position: -223px -132px;
        width: 18px;
        height: 18px;
        background-image: url("../../assets/icon/icon.png");
        content: "";
        display: inline-block;
        position: relative;
        top: 4px;
        right: -3px;
      }
    }
  }
  .panel-body {
    overflow-x: auto;
    min-height: 170px;
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    margin: 0 14px;
    .Thumbnail {
      margin-left: 0;
      margin-right: 0;
      display: inline-block;
      margin: 5px;
      padding: 0;
      .cover {
        display: block;
        overflow: hidden;
        position: relative;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100%;
      }
      .title {
        color: #616161;
        font-size: 13px;
      }
    }
    .Thumbnail.sound {
      width: 106px;
      height: 163px;
      -webkit-appearance: none;
      .cover {
        width: 106px;
        height: 106px;
      }
      .cover:before {
        content: "";
        display: block;
        position: absolute;
        right: 8px;
        bottom: 8px;
        height: 24px;
        width: 24px;
        background-image: url("../../assets/icon/small.png");
        background-position: 0 0;
        background-size: 56px 55px;
      }
      .title {
        width: 100%;
        height: 36px;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-height: 18px;
        margin: 4px 0;
      }
      .detail {
        display: flex;
        justify-content: space-between;
        -webkit-box-pack: justify;
        .item {
          position: relative;
          padding-left: 14px;
          font-size: 11px;
          line-height: 11px;
          color: #bdbdbd;
        }
        .item.play-times:before {
          background-image: url("../../assets/icon/small.png");
          background-size: 56px 55px;
          background-position: -29px -44px;
        }
        .item:before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          height: 10px;
          width: 12px;
        }
        .item.comments:before {
          background-position: -44px -27px;
          background-image: url("../../assets/icon/small.png");
          background-size: 56px 55px;
        }
      }
    }
  }
}
</style>
