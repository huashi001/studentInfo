<template>
  <div class="stu">
    <div class="stu-wrap">
      <router-link tag="div" class="item" to="/user/info">
        <img src="./user.png" alt="个人信息" title="个人信息">
          <p>个人信息</p>
      </router-link>
      <router-link tag="div" class="item" to="/user/teach">
        <img src="./class.png" alt="我的课堂" title="我的课堂">
          <p>我的课堂</p>
      </router-link>
      <router-link tag="div" class="item" to="/user/send">
        <img src="./mail.png" alt="发送通知" title="发送通知">
          <p>发送通知</p>
      </router-link>
      <router-link tag="div" class="item" to="/user/mark">
        <img src="./mark.png" alt="成绩上传" title="成绩上传">
          <p>成绩上传</p>
      </router-link>
      <router-link tag="div" class="item" to="/user/communication">
        <img src="./communication.png" alt="在线交流" title="在线交流">
          <p>在线交流</p>
      </router-link>
      <router-link tag="div" class="item" to="/user/mark">
        <img src="./homework.png" alt="学生作业" title="学生作业">
          <p>学生作业</p>
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
