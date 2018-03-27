<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-link to="/error" class="nav">Error</router-link>
    <router-link to="/table" class="nav">列表</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
<style scoped>
  .nav{
    font-size: 18px;
    margin-right: 50px;
    padding-bottom: 50px;
    display: inline-block;
  }
  .nav.router-link-active{
    color: aqua;
  }
</style>
