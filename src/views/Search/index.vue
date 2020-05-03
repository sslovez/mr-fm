<template>
  <div class="page-search">
   搜索页面
  </div>
</template>

<script>
export default {
  name: 'Search',
  data(){
    return {
      searchList:[]
    }
  },
  methods:{
    getSerachData(){
      let url = '/xixi/api/chatroom/search?q=%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88&p=1&page_size=10'
      this.$axios.get(url).then(res=>{
        console.log(res.info)
      })
    }
  },
  mounted(){
    this.getSerachData()
  }
}
</script>
<style lang="scss" scoped>
.page-search{
  position: fixed;
  top: 30px;
  bottom: 0px;
  background: red;
  left: 0px;
  right: 0px;
}
</style>
