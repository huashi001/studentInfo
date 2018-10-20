<template>
  <div class="wrap">
    <div>
    <select name="" id="" v-if="subs.length" v-model="subId" @change="_getStudentScore">
      <option value="">---请选择科目---</option>
      <option v-for="sub in subs" :value="sub.courseNum">{{sub.name}}</option>
    </select>
    </div>
    <div v-if="scores.length">
    <ul>
      <li>
        <div class="left" ref='huashi'>学号</div>
        <div class="right">成绩</div>
      </li>
      <li v-for="(item,index) in scores">
        <div class="left" ref="xuehao+index">{{item.number}}</div>
        <div class="right" v-if="item.score">{{item.score}}</div>
        <div class="right" v-if="!item.score">
          <input type="text" placeholder="请输入成绩" @change="check" maxlength="3">
          <img src="./add.png" alt="" v-on:click="add">
        </div>
      </li>
    </ul>
   </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      subs:[],
      subId:"",
      scores:[],
      point:0
    }
  },
  created(){
    this._getMyClass();
    //this._getStudentScore();
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
    _getStudentScore(){
      axios.get('/api/teacher/getscore',{
        params:{
          teacherNum:this.$store.getters.userName,
          courseNum:this.subId
        }
      }).then(res=>{
        this.scores = res.data.data;
      })
    },
    check(e){
      if(e.target.value>100||e.target.value<0){
        alert("分数不合法,请重新输入");
        e.target.value='';
      }else{
        this.point=e.target.value;
      }
    },
    add(){
      alert(this.$refs.xuehao)
        // axios.get("/api/teacher/mark",{
        //   params:{
        //     teacherNum:this.$store.getters.userName,
        //     point: this.point,
        //     stuNum: this.$refs.xuehao.innerTEXT
        //   }
        // })
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
  width 100%
  padding 40px 0
  ul
    width 40%
    margin 50px 30% 0 30%
    color white
    li
      display flex
      height 40px
      line-height 40px
      .left
        width 50%
      .right
        width 50%
        position relative
      img
        position absolute
        top 4px
        left 70%
      input
        position absolute
        top 5px
        left 35%
        height 30px
        width 30%
    li:nth-child(even)
      background #FF4200
    li:nth-child(odd)
      background #0371DF
    li:nth-child(1)
      background #ccc
      color black
</style>
