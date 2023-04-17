<template>
  <navbar class="all" id="Home"/>
  <secondPage class="all1" id="aboutMe"/>
  <contactCv/>
  
</template>

<script>
import navbar from "./components/FirstPage.vue"
import secondPage from "./components/SecondPage.vue"
import contactCv from "./components/ContactCv.vue"
export default{
  name:"App",
  components:{
    navbar,
    secondPage,
    contactCv
  },
}


</script>

<style>
  html, body{
    margin: 0px;
    padding: 0px;
    height: 100%;
    overflow:hidden;
  }
  
  .all{
    background: url("./assets/background.jpg") no-repeat;
    background-size: 100% 100%;
    width: auto;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    scroll-snap-align: center;
  }
  .all1{
    background-color: #00181a;
    background-size: 100% 100%;
    width: auto;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    scroll-snap-align: center;
  }
 #app{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
</style>
