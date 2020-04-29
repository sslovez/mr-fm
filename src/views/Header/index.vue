<template>
  <div class="page-header">
    <div class="content">
      <a href="/" alt="MissEvan">
        <i class="logo"></i>
      </a>
      <div class="actions">
        <router-link to="/search">
          <i class="search"></i>
        </router-link>
        <i class="menu"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style lang="scss" scoped>
.page-header {
  // background: pink;
  width: 100%;
  height: 40px;
  // position: fixed;
  // z-index: 22;
  // overflow: hidden;
  .content {
    display: flex;
    // position: fixed;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px;
    line-height: 20px;
    background: #000;
    a {
      height: 20px;
      .logo {
        width: 102px;
        height: 20px;
        display: block;
        margin: 0;
        background-position: 50%;
        background-image: url("../../assets/icon/logo.png");
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
    .actions {
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      justify-content: flex-end;
      -webkit-box-align: center;
      align-items: center;
      a {
        height: 20px;
        .search {
          width: 22px;
          height: 20px;
          background-image: url("../../assets/icon/icon.png");
          background-size: 262px 234px;
          background-position: -223px -22px;
          margin: 0 20px;
          display: block;
          background-repeat: no-repeat;
        }
      }
      .menu {
        width: 22px;
        height: 20px;
        margin: 0;
        background-position: -223px 0;
        -webkit-box-flex: 0;
        flex: 0 1 auto;
        background-image: url("../../assets/icon/icon.png");
        background-size: 262px 234px;
        display: inline-block;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>