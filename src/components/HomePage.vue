<template>
    <div style="resize: both">
      <h3>
        Piotr<span style="color: #a61a20">Dabrowski</span>
      </h3>

      <div class="navigation">
        <BarBase style="background-color: darkcyan; color: white;" v-model:visible="visible" position="right">
            <h4 style="top: 1.25rem; padding-left: 1rem; position: absolute; font-size: 1.6rem; margin: 0; letter-spacing: 0.12rem;">Menu</h4>
            <div class="sidebar">
                <a href="#Home" @click="visible = !visible" >Home</a>
                <a href="#aboutMe" @click="visible = !visible">About Me</a>
                <a href="#ContactMe" @click="visible = !visible">Contact</a>
            </div>
        </BarBase>
        <ButtonBase style="background-color: #a61a20; color: white; width: 2.5vw; height: 2.5vw;" icon="pi pi-bars" @click="visible = !visible" />
      </div>

        <div class="reflinks">
            <a href="https://www.linkedin.com/in/piotrekdabrowski" target="_blank" ><i style="color: aliceblue; font-size: 1vw; margin-bottom: 0.7vh;" class="pi pi-linkedin"></i></a>
            <a href="https://github.com/PiotrDabrowski232?tab=repositories" target="_blank" ><i style="color: aliceblue; font-size: 1vw;" class="pi pi-github"></i></a>
        </div>

        <div class="welcomeMessage">
            <h4>WELCOME</h4>
            <p>I'm a young and full-of-energy programmer, who wants to develop skills and abilities by practicing and never giving up. </p>
        </div>
    </div>
</template>
  


<script>
export default {
    data() {
        return {
            visible: false,
        };
    }
};
</script>


  <style>

  .sidebar{
    margin-top:8vh;
  }

  .sidebar a{
        color: white;
        text-decoration: none;
        text-align: left; 
        font-size: 1.5rem;
        letter-spacing: 0.12rem;
        margin-left: 2rem;
        margin-top: 4vh;
        display: block;
        width: max-content;
        padding: 0;
  }
  .sidebar a:hover{
    opacity: 0.4;
    transition: opacity 0.5s;
  }

    h3{
        margin:0px;
        color: white;
        padding: 8vh 0vw 0vh 4vw;
        font-family: 'Chivo Mono', monospace;
        display: inline-block;
        font-size: 1.4vw;
    }
    
    .navigation{
        top: 8vh;
        right: 3vw;
        position: fixed;
        z-index: 10;
    }

    .reflinks{
        position: relative;
        top: 50vh;
        display: inline-block;
        margin-left: 95.5vw;
    }

    .reflinks a{
        text-decoration: none;
        color: azure;
        margin: 0;
        display: block;
    }

    .reflinks a:hover{
        opacity: 0.5;
        transition: opacity 0.7s;
    }

    .welcomeMessage{
        position: absolute;
        color: white;
        margin-top: 11vh;
        margin-left: 20vw;
        margin-right: 25vw;
        width: 55vw;
    }

    .welcomeMessage h4{
        letter-spacing: 0.2rem;
        color: white;
        opacity: 0.65;
        font-size: 0.8vw;
    }
    
    .welcomeMessage p{
        letter-spacing: 0.2rem;
        color: white;
        padding-top: 1.2vh;
        font-weight: 500;
        text-align: justify;
        font-size: 2.4vw;
    }


  </style>
  