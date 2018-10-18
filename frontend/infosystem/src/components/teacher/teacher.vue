<template>
  <div>
    教师中心
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag:this.$store.getters.userName?true:false
    }
  },
  created(){
   // alert(this.$store.getters.userName);
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
