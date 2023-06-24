<template>
  <nav>
    <router-link to="/">login</router-link> |
    <router-link to="/register">register</router-link>|
    <router-link to="/articles">all post</router-link>
  </nav>
  <router-view/>
</template>
<script>
import { setAuthToken } from './views/services.js/AuthService';


export default{
  mounted() {

    const token = localStorage.getItem("token");

    setAuthToken(token);

}
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #408edd;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
