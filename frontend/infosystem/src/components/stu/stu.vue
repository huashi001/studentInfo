<template>
  <div class="stu">
    <div class="stu-wrap">
      <router-link tag="div" class="item" to="/user/info">
        <img src="./user.png" alt="个人信息" title="个人信息">
          <p>个人信息</p>
      </router-link>
      <router-link tag="div" class="item" to="/user/course">
        <img src="./search.png" alt="选课查询" title="选课查询">
          <p>选课查询</p>
      </router-link>
      <router-link tag="div" class="item" to="/user/score">
        <img src="./score.png" alt="成绩查询" title="成绩查询">
          <p>成绩查询</p>
      </router-link>
      <router-link tag="div" class="item" to="/user/homework">
        <img src="./homework.png" alt="作业提交" title="作业提交">
          <p>作业提交</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  created(){
   // alert(this.$store.getters.userName);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
  .stu-wrap
    width 80%
    margin 160px 10% 0 10%
    display flex
    height 200px
    box-sizing border-box
    .item 
      flex 1
      margin-left 30px
      background #ccc
      padding 50px 10px 20px 10px
      img 
        width 50px
        height 50px
      p
        margin-top 30px
</style>
