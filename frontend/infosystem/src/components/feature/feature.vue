<template>
  <div class="feature" ref='feature'>
    <div class="feature-item" @mouseover="changeColor">
      <h1 @click="">方便</h1>
      <p>让你的信息管理更加方便!</p>
    </div>
    <div class="feature-item" @mouseover="changeColor">
      <h1>快捷</h1>
      <p>享受信息的快捷获取!</p>
    </div>
    <div class="feature-item" @mouseover="changeColor">
      <h1>及时</h1>
      <p>及时获取相关信息<br/>不错过！</p>
    </div>
    <div class="feature-item" @mouseover="changeColor">
      <h1>简单</h1>
      <p>make your life easier!</p>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    changeColor(event){
      const children = this.$refs.feature.children;
      for(let i=0;i<children.length;i++){
          children[i].style.backgroundColor = "white";
      }
      let parent=null;
      parent = event.target.tagName.toUpperCase()=="DIV"?event.target:event.target.parentNode;
      parent.style.backgroundColor = "#ccc";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus'>
.feature
  display flex
  width 80%
  margin 0 10% 0 10%
  .feature-item
    margin 180px 0 0 0
    padding 50px 20px
    box-sizing border-box
    flex 1
    width 25%
    height 200px
    h1
      font-size 25px
    p
      margin-top 60px
      color red
      font-size 20px
</style>
