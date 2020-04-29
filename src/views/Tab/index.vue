<template>
  <div class="page-tab">
    <router-link to="/music" tag="div" active-class="sel">
      <span>音单</span>
    </router-link>
    <router-link to="/recommend" tag="div" active-class="sel">
      <span>推荐</span>
    </router-link>
    <router-link to="/classify" tag="div" active-class="sel">
      <span>分类</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// @import 'assets/style/base.scss';
.page-tab {
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
  justify-content: space-around;
  div {
    text-align: center;
    line-height: 40px;
    // background: pink;
    font-size: 14px;
    color: #9e9e9e;
    span{
      height: 38px;
      width: 75px;
      display: inline-block;
      // border-bottom: 1px solid black;
    }
  }
  .sel{
    color: black;
    span{
      border-bottom: 2px solid black;
    }
  }
}
</style>
