<template>
  <div class="page-classify">
    <div class="Tabs" id="Home">
      <div class="tab-content">
        <div class="catalogs">
          <a class="Catalog" href="/catalog/46" v-for="item in albumlist" :key="item.id">
            <span class="catalog-icon" :style="{backgroundImage:'url(' + item.pic + ')'}"></span>
            <span class="catalog-title">{{item.title}}</span>
          </a>
          <a class="Catalog" href="/catalog/41">
            <span
              class="catalog-icon"
              style="background-image: url(&quot;//static.missevan.com/app/41.png&quot;);"
            ></span>
            <span class="catalog-title">日抓</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAlbumData } from "@/api/api";
export default {
  name: "Classify",
  data() {
    return {
      albumlist: []
    };
  },
  methods: {},
  mounted() {
    getAlbumData().then(res => (this.albumlist = res.info));
  }
};
</script>
<style lang="scss" scoped>
.Tab {
  display: block;
  position: relative;
  min-height: calc(100vh - 120px);
  height: 100%;
  width: 100%;
  // background-color: #f5f5f5;
  .tab-content {
    position: relative;
    min-height: calc(100vh - 160px);
    .tab-content:after {
      content: "";
      display: block;
      position: relative;
      clear: both;
    }
  }
}
#Home {
  .tab-content {
    padding: 0;
    .catalogs {
      display: block;
      width: 100%;
      height: 100%;
      padding: 14px;
      background-color: #f5f5f5;
      .Catalog {
        display: inline-block;
        position: relative;
        width: calc((100% - 48px) / 3);
        height: 104px;
        margin: 0 10px 10px 0;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
        text-align: center;
        -webkit-appearance: none;
        .catalog-icon {
          display: block;
          height: 50px;
          width: 50px;
          margin: 15px auto 8px;
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .catalog-title {
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
}
</style>
