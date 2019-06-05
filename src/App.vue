<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav">
      <router-link to="/">主页</router-link>
      <router-link to="/data">AXIOS</router-link>
      <router-link to="/transition">TRANSITION</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  margin: 10px;
}
</style>
