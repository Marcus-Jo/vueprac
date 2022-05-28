<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/todo">Todo</router-link>
      <a @click="ajaxTest">ajax-Test</a>
    </nav>
    <div class="container">
      <router-view />
    </div>
    
  </div>
</template>

<script>

import {getTest} from "@/utils/axios";

export default {
  name: 'App',
  components: {
  },
  methods: {
    ajaxTest: async () => {
      console.log(await getTest());
    }
  }
}
</script>

<style lang="scss">
body, html{
  margin: 0;
  padding: 0;
  background:#F5F5F5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0 auto;
  display: flex;
  width: 100%;
  max-width: 500px;
  background-color: #FFFFFF;
  min-height: 100vh;
  padding: 0;

  nav{
    position: fixed;
    display:flex;
    flex-direction: column;
    top: 20px;
    left: 20px;
    width: 100px;
    background-color: #555;
    font-weight: 700;
    border-radius: 15px;
    a {
      display: block;
      color:#CCC;
      text-decoration: none;
      padding: 10px;
      border-bottom: 1px solid #FFF;
      margin: 0;
      transition: 0.5s color;
      &:last-child {
        border-bottom: 0;
      }
      &:hover {
        color:#FFF;
      }
    }
  }
  .container {
  }
}
</style>
