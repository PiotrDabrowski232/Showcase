<template>
  <PageLoader  v-if="isloaded"/>
  <HomePage id="Home"/>
  <AboutMe  id="aboutMe"/>
  <contactCv id="ContactMe"/>
  
</template>

<script>
import HomePage from "./components/HomePage.vue"
import AboutMe from "./components/AboutMe.vue"
import contactCv from "./components/ContactCv.vue"
import PageLoader from "./components/PageLoader.vue"

export default{
  name:"App",
  components:{
    HomePage,
    AboutMe,
    contactCv,
    PageLoader
  },
  data(){
        return{
            isloaded: false,
        }
    },
    mounted(){
        document.onreadystatechange = () =>{
            if(document.readyState == 'complete'){
                this.isloaded = true;
            }
        }
        
    }
}


</script>

<style>
  html, body{
    font-family: 'Raleway', sans-serif;
    margin: 0px;
    padding: 0px;
    height: 100%;
    overflow:hidden;
  }
  
  #Home{
    background: url("./assets/background.jpg") no-repeat;
    background-size: 100% 100%;
    width: auto;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    scroll-snap-align: center;
  }
  #aboutMe{
    background-color: #036871;
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
    scroll-snap-type: y mandatory;
  }
  #ContactMe{
    scroll-snap-align:center;
  }
</style>
