<template>
  <div class="wrap">
    <div class="log">
     <div class="head">
       <h1>用户登录</h1>
       <p v-if="flag" v-text="msg"></p>
     </div>
     <input type="text" placeholder="请输入用户名" v-model="name"/><br/>
     <input type="password"  placeholder="请输入密码" v-model='password'/><br/>
     <label for="stu">学生</label><input type="radio" name='job' id="stu" value="stu" v-model="checkedValue"/>
     <label for="teacher">教师</label><input type="radio" name='job' id="teacher" value="teacher"  v-model="checkedValue"/><br/>
     <input type="submit" value="提交" @click="check"/>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      msg: "请输入完整信息!",
      flag: false,
      name:'',
      password:'',
      checkedValue: 'stu'
    }
  },
  methods:{
    check(){
       if(!this.name||!this.password){
         this.flag=true;
       }else{
         this.flag=false;
         axios.post('/api/log',{
           name: this.name,
           psd: this.password,
           identity: this.checkedValue
         }).then((res)=>{
           if(res.data.ERR_OK===1){
             this.msg = res.data.msg;
             this.flag=true;
           }else{
             let {userName,identity}=res.data;
             this.$store.commit("changeLog",userName,identity);
             this.$router.push(`/user/${identity}`);
           }
         })
       }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus'>
  .log
    width: 40%;
    height: 300px;
    border 2px solid #999
    text-align center
    font-size: 20px
    line-height 60px
    margin 60px 30%
    .head
      height 60px
      width 80%
      margin-left 10%
      h1
        height 30px
      p
        color red
        font-size 15px
        text-align left
    input[type='text'],input[type='password'],input[type='submit']
      width 80%
      height 40px
      border 1px solid #ccc
    input[type='submit']
      background #007fff
      color white
</style>
