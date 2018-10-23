<template>
  <div v-if="msgs.length">
    <h1 class="h1">我的通知</h1>
    <ul>
      <li>
        <div class="left">通知时间</div>
        <div class="middle">学科</div>
        <div class="right">通知内容</div>
      </li>
      <li v-for="msg in msgs">
        <div class="left">{{msg.time}}</div>
        <div class="middle">{{msg.name}}</div>
        <div class="right">{{msg.note}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      msgs:[],
    }
  },
  created(){
    this._getSelectedCourses();
  },
  methods:{
    _getSelectedCourses() {
      axios
        .get("/api/message", {
          params: {
            number: this.$store.getters.userName
          }
        })
        .then(res => {
          if (res.data.ERR_OK == 0) {
            this.msgs=res.data.msgs;
          }
        });
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .h1
    margin 100px 0 0 0
    font-size 25px
  ul
    margin 10px 0 0 0
    li
      background #00B091
      color white
      height 40px
      line-height 40px
      border-bottom 1px solid #798
      text-align center
      display flex
      .left
        flex 1
      .middle 
        flex 1
      .right
        flex 4
    li:first-child
      background #EC6149
</style>
