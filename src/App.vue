<template>
  <div id="app">
      <ul class="router">
        <router-link to="/" tag="li">首页</router-link>
        <router-link to="/index" tag="li">表格</router-link>
        <router-link to="/about" tag="li">关于</router-link>
      </ul>
      <router-view class="routerview"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}
#app {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#app .routerview{
    position: absolute;
    width:100%;
    margin-top: 30px;
}
ul {
    list-style: none;
}
#app .router{
    height: 30px;
    line-height: 30px;
}
#app .router li {
    display: inline-block;
    width: 90px;
    cursor:pointer;
    border-bottom: 1px solid #eae3e6;
}

#app .router li.router-link-exact-active{
    border-bottom: 1px solid #84767c;
}
#app .router> li:hover {
    color: #00ABFF;
}

</style>
