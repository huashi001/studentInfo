<template>
  <div class="wrap">
    <h1>在线交流</h1>
    <div class="inp">
      <input name="" id="" placeholder="请输入内容" v-model="note" class="content"/>
      <input type="button" value="提交" class="submit" @click="send"/> 
    </div>
    <div class="msg" v-if="msgs.length">
      <ul>
        <li v-for="msg in msgs"  :class="{self:isSelf(msg.number)}">
          <div class="number">{{msg.number}}:&nbsp&nbsp&nbsp&nbsp</div>
          <div class="note">{{msg.note}}&nbsp&nbsp&nbsp</div>
          <div class="time">({{msg.time}})</div>
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
      note:'',
      msgs:[],
      timer:null
    }
  },
  created(){
    this._getMessage();
    let that = this;
    this.timer=setInterval(function(){
      that._getMessage();
    },2000)
  },
  destroyed(){
    this.timer=null;
  },
  methods:{
    //提交留言
    send(){
      if(!this.note){
        return;        
      }
      //提交到数据库
      axios('/api/submitcommu',{
        params:{
          num: this.$store.getters.userName,
          note:this.note,
          time:new Date().toLocaleDateString()
        }
      }).then(res=>{
        if(res.data.ERR_OK==0){
          this.note='';
          this._getMessage();
        }
      }).catch(e=>{
        console.log(e)
      })
    },
    //获取留言
    _getMessage(){
      axios.get('/api/commu').then(res=>{
        if(res.data.ERR_OK==0){
          this.msgs=res.data.communication;
        }
      })
    },
    //计算样式
    isSelf(name){
      return this.$store.getters.userName==name;
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
  position relative
  width 350px
  height 500px
  background #999
  margin 40px auto;
  box-size border-box
  border 1px solid #789
  h1
    color white
    border-bottom 1px solid white
    font-size 20px
    background #EC6149
    line-height 40px
    height 40px
    width 100%
  .inp
    position absolute
    display flex
    bottom 0
    width 100%
    border-radius 5px 
    .content
      height 30px
      width 90%
    .submit
      width 10%
      height 30px 
      line-height 30px
      background #00B091
      color white
  h2
    margin 40px 0 10px 0
  .msg
    li
      color white
      height 40px
      line-height 40px
      border-bottom 1px solid #798
      text-align center
      display flex
      background #FB7C2F
    .left
      flex 1
    .middle 
      flex 1
    .right
      flex 4
    .self
      background #0D78E3
</style>
