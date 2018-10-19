<template>
  <div>
    <h1>本学期您教授的课程如下:</h1>
    <table>
      <tr>
        <td>学科</td>
        <td>学分</td>
        <td>上课时间</td>
      </tr>
      <tr v-for='item in subs'>
        <td>{{item.name}}</td>
        <td>{{item.point}}</td>
        <td>{{item.time}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      subs:''
    }
  },
  created(){
    this._getMyClass();
  },
  methods:{
    _getMyClass(){
      axios.get('/api/teacher/teach',{
        params:{
          number:this.$store.getters.userName
        }
      }).then(res=>{
        if(res.data.ERR_OK==0){
          this.subs = res.data.data;
        }
      })
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
h1
  margin 100px 0 0 10%
  font-size 20px
  text-align left
table
  width 80%
  background #ccc
  margin 10px 10% 0 10%
  tr
    border-bottom 1px solid #789
  td
    height 60px
    line-height 60px
</style>
