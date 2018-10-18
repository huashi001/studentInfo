<template>
  <div>
    <div class="wrap1">
      <h1>您本学期选择的课程如下</h1>
      <table v-if="courses.length"> 
        <tr>
          <td>课程号</td>
          <td>课程名</td>
          <td>学分</td>
          <td>上课时间</td>
        </tr>
        <tr v-for="course in courses">
          <td>{{course.courseNum}}</td>
          <td>{{course.name}}</td>
          <td>{{course.point}}</td>
          <td>{{course.time}}</td>
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
      courses: []
    };
  },
  created() {
    this._getSelectedCourses();
  },
  methods: {
    _getSelectedCourses() {
      axios
      .get("/api/course", {
        params: {
          number: this.$store.getters.userName
        }
      })
      .then(res => {
        if (res.data.ERR_OK == 0) {
          this.courses=res.data.selectedCourses;
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
