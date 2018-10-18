<template>
  <div>
    <div class="wrap1">
      <h1>您本学期课程成绩如下</h1>
      <table> 
        <tr>
          <td>课程名</td>
          <td>成绩</td>
          <td>学分</td>
        </tr>
        <tr v-for="item in scores">
          <td>{{item.name}}</td>
          <td>{{item.score}}</td>
          <td>{{item.point}}</td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      scores: []
    };
  },
  created() {
    this._getScore();
  },
  methods: {
    _getScore() {
      axios
        .get("/api/score", {
          params: {
            number: this.$store.getters.userName
          }
        })
        .then(res => {
          if (res.data.ERR_OK == 0) {
            let _scores=res.data.scores;
            this.scores=_scores.filter(item=>{
              return item.score!==null
            });
          }
        });
    }
  }
};
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
.wrap1
  width 100%
  h1
    font-size 20px
    margin-top 60px
  table
    width 80%
    margin 20px 10% 0 10%
    tr
      height 40px
      line-height 40px
    tr:nth-child(odd)
      background #3992CA
    tr:nth-child(even)
      background #ccc
    tr:nth-child(1)
      background white
      color red
      td
        border 1px solid #ccc
        box-size border-box
</style>
