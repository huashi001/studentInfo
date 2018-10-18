<template>
  <div>
    <div class="wrap1" v-if="info">
      <h1>您的个人信息如下</h1>
      <table>
        <tr>
          <td class="left">姓名</td>
          <td>{{info.name}}</td>
        </tr>
        <tr>
          <td>学号</td>
          <td>{{info.number}}</td>
        </tr>
        <tr>
          <td class="left">班级</td>
          <td>{{info.class}}</td>
        </tr>
        <tr>
          <td>手机号</td>
          <td>{{info.phonenum}}</td>
        </tr>
        <tr>
          <td class="left">兴趣爱好</td>
          <td>{{info.hobby}}</td>
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
      info: {}
    };
  },
  created() {
    this._getUserInfo();
  },
  methods: {
    _getUserInfo() {
      axios
        .get("/api/info", {
          params: {
            number: this.$store.getters.userName,
            identity: this.$store.getters.identity
          }
        })
        .then(res => {
          if (res.data.ERR_OK == 0) {
            this.info = res.data.info[0];
          }
        });
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap1
  width 100%
  h1
    font-size 20px
    margin-top 60px
  table
    width 80%
    margin 20px 10% 0 10%
    background #ccc
    tr
      height 40px
      line-height 40px
    tr:nth-child(odd)
      background #3992CA
    td:nth-child(odd)
      border-right 2px solid #678
</style>
