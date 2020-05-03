<template>
  <div class="total">
    <Header></Header>
    <Scroll class="Scroll">
    <Tab></Tab>
    <router-view></router-view>
    </Scroll>
  </div>
</template>
<script>
import Header from '@/views/Header'
import Tab from '@/views/Tab'
import Scroll from '@/components/Scroll'
export default {
  components: { Header, Tab , Scroll }
}
</script>
<style lang='scss'>
@import '@/assets/style/base.scss';
.Scroll{
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
