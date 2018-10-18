<template>
  <div v-if="courses.length">
    <span>请选择课程</span>
    <form method="POST" action="/api/homework" enctype="multipart/form-data">
      <select name="" id="">
        <option v-for="item in courses">{{item.name}}</option>
      </select>
      <input name="file" type="file" /><br/><br/>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      courses:[],
      file: ''
    }
  },
  created(){
    this._getSelectedCourses();
  },
  methods:{
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
    },
    change(event){
      this.file = event.target.files[0];
      console.log(this.file)
    },
    upFile(){
      let data = new FormData();
      data.append("inputFile",this.file);
      data.append("name",this.file.name);
      //let headers = {headers: {"Content-Type": "multipart/form-data"}};
      axios.post('/api/homework',{
        data,
        name:'huashi'
      }).then(res=>{
        console.log(res);
      }).catch(e=>{
         console.log(e);
      })
    }
  }
}
// <select name="" id="">
//       <option v-for="item in courses">{{item.name}}</option>
//     </select>
//     <input type="file" name="" id="" value="上传" @change='change'>
//     <input type="submit" value="提交" @click="upFile">
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  input[type="submit"]
    background #3992CA
</style>
