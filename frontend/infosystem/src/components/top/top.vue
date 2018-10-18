<template>
  <div>
    <div class="header">
     <div class="title">学生信息管理系统</div>
     <div v-if="!isLoged" class="tip"><router-link tag="div" to="/log">登录</router-link></div>
     <div v-if="isLoged" class="tip" @click='logout'>退出</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    logout(){
      this.$store.commit('changeLog','','');
      this.$router.push('/');
    },
  },
  computed:{
    isLoged(){
      return this.$store.getters.userName;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus'>
.header
  width: 100%;
  height: 80px;
  background: #cccccc
  position relative
  .title
    line-height 80px
    font-size 30px
  .tip
    position absolute
    right 100px
    top 30px
    font-size 20px
    color blue
</style>
