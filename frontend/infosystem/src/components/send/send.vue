<template>
  <div class="wrap">
    <div>
      <select name="" id="" v-model="subjectId">
        <option value="">----请选择学科----</option>
        <option value="" v-for="item in subs" :value="item.courseNum">{{item.name}}</option>
      </select><br/><br/>
      <textarea name="" id="" cols="30" rows="10" placeholder="请输入通知内容(120字以内)" v-model="note"></textarea><br/>
      <input type="button" value="提交" class="submit" @click="send"> 
    </div>
    <h2>我发送的通知</h2>
    <div class="msg" v-if="msgs.length">
      <ul>
        <li v-for="msg in msgs">
          <div class="left">{{msg.time}}</div>
          <div class="middle">{{msg.name}}</div>
          <div class="right">{{msg.note}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      subs:'',
      subjectId: '',
      note:'',
      msgs:[]
    }
  },
  created(){
    this._getMyClass();
    this._getMessage();
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
    },
    send(){
      if(!this.subjectId||!this.note){
        alert("请选择科目或者填写通知内容");
        return;        
      }
      axios('/api/teacher/send',{
        params:{
          num: this.$store.getters.userName,
          subjectId:this.subjectId,
          note:this.note,
          time:new Date().toLocaleDateString()
        }
      }).then(res=>{
        if(res.data.ERR_OK==0){
          alert("通知已经发送成功!");
          this.subjectId='';
          this.note='';
          this._getMessage();
        }
      }).catch(e=>{
        console.log(e)
      })
    },
    _getMessage(){
      axios.get('/api/teacher/message',{
        params:{
          number:this.$store.getters.userName
        }
      }).then(res=>{
        if(res.data.ERR_OK==0){
          this.msgs=res.data.data;
        }
      })
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
  padding 50px 100px
  .submit
    width 230px
    height 30px 
    line-height 30px
    background #00B091
    margin-top 10px
    color white
  h2
    margin 40px 0 10px 0
  .msg
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
</style>
