<template>
  <div class="page-music">
    <div class="tab-content">
      <div id="AlbumsTab">
        <div class="Panel trans">
          <div class="panel-head">
            <div class="panel-title">
              <div class="callout">全部音单</div>
            </div>
            <div class="panel-nav">
              <span class="album-panel-type">类型</span>
            </div>
          </div>
          <div class="panel-body">
            <a
              class="Thumbnail album adjust"
              href="/album/129632"
              v-for="item in musiclist"
              :key="item.id"
            >
              <div class="album-cover-bg"></div>
              <div
                :title="item.title"
                class="lazy-image lazy-loaded cover"
                :style="{backgroundImage:'url(' + item.front_cover + ')'}"
              >
                <div class="sound-num">
                  <span>{{item.music_count}}</span>
                </div>
              </div>
              <div class="title">{{item.title}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getMusicData} from '@/api/api'
export default {
  name: "Music",
  data() {
    return {
      musiclist: []
    };
  },
  methods: {
  },
  mounted() {
    getMusicData().then(
      res => (this.musiclist = res.albums)
    );
  }
};
</script>
<style lang="scss" scoped>
.tab-content {
  padding: 0;
  position: relative;
  min-height: calc(100vh - 160px);
  #AlbumsTab {
    overflow: auto;
    background-color: #f5f5f5;
    .Panel {
      overflow: hidden;
      padding-bottom: 0;
      background-color: transparent;
      border: none;
      display: block;
      position: relative;
      width: 100%;
      margin: 10px auto;
      .panel-head {
        height: 24px;
        line-height: 24px;
        display: flex;
        position: relative;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 0 14px;
        .panel-title {
          font-size: 16px;
          display: inline-block;
          .callout {
            display: block;
            position: relative;
            padding-left: 10px;
            margin: 0;
            font-size: 16px;
          }
          .callout:before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 10%;
            height: 80%;
            background-color: #000;
            width: 4px;
            border-radius: 4px;
          }
        }
        .panel-nav {
          font-size: 14px;
          color: #9e9e9e;
          display: inline-block;
          .album-panel-type {
            display: block;
            position: relative;
            float: right;
            background-color: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 20px;
            width: 64px;
            height: 24px;
            line-height: 24px;
            font-size: 13px;
            text-align: center;
            color: #757575;
          }
          .album-panel-type::after {
            content: "";
            display: block;
            position: relative;
            float: right;
            top: 7px;
            right: 12px;
            width: 8px;
            height: 8px;
            box-sizing: border-box;
            border: 1px solid #757575;
            border-bottom: none;
            border-left: none;
            transform: rotate(45deg);
          }
        }
      }
      .panel-body {
        flex-wrap: wrap;
        padding: 10px 0;
        min-height: 320px;
        display: flex;
        justify-content: space-around;
        -webkit-box-align: center;
        align-items: center;
        margin: 0 14px;
        .Thumbnail {
          margin-left: 0;
          margin-right: 0;
          display: inline-block;
          padding: 0;
          -webkit-appearance: none;
          .cover {
            display: block;
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
        .Thumbnail.album.adjust {
          width: calc((100vw - 28px) / 2 - 10px);
          margin: 0 0 10px;
          .cover {
            width: calc((100vw - 28px) / 2 - 28px);
            height: calc((100vw - 28px) / 2 - 28px);
            border: none;
            .sound-num {
              height: 36px;
              line-height: 24px;
              span {
                bottom: 0;
                text-shadow: 0.5px 0 1px #000;
              }
            }
          }
          .title {
            width: 100%;
          }
        }
        .Thumbnail.album {
          position: relative;
          z-index: 0;
          .album-cover-bg {
            display: block;
            position: absolute;
            width: 100%;
            padding-bottom: 100%;
            background: url("../../assets/icon/music-01.png") no-repeat;
            background-size: contain;
          }
          .cover {
            overflow: visible;
            background-color: #e0e0e0;
            .sound-num {
              position: absolute;
              right: 0;
              bottom: 0;
              left: 0;
              border-radius: 0 0 4px 4px;
              background: linear-gradient(
                180deg,
                transparent,
                rgba(0, 0, 0, 0.26)
              );
              span {
                display: block;
                position: absolute;
                right: 5px;
                padding-left: 14px;
                font-size: 12px;
                color: #fff;
              }
              span:before {
                content: "";
                display: block;
                position: absolute;
                margin: 4px 0 3px;
                left: 0;
                height: 11px;
                width: 13px;
                background-image: url("../../assets/icon/small.png");
                background-position: 0 -44px;
                background-size: 56px 55px;
              }
            }
          }
          .title {
            margin-top: 6px;
            height: 40px;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-height: 20px;
            margin: 0;
            white-space: normal;
          }
        }
      }
    }
    .Panel.trans {
      background-color: transparent;
      border: none;
      .panel-head {
        margin: 10px 0;
      }
    }
  }
}
</style>
