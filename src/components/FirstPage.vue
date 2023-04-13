<template>
    <div>
      <h3>
        Piotr<span style="color: #c82128">Dabrowski</span>
      </h3>

      <div class="navigation">
        <BarBase style="background-color: darkcyan; color: white;" v-model:visible="visible" position="right">
            <h4 style="top: 1rem; padding-left: 2rem; position: absolute;">Menu</h4><br>
            <a style="color: white; text-decoration: none; text-align: center; font-size: 1.5rem; letter-spacing: 2px; padding-left: 2rem;" href="#Home" @click="visible = !visible" >Home</a><br><br>
            <a style="color: white; text-decoration: none; text-align: center; font-size: 1.5rem; letter-spacing: 2px; padding-left: 2rem;" href="#aboutMe" @click="visible = !visible">About Me</a>
        </BarBase>
        <ButtonBase style="background-color: #c82128; color: black;" icon="pi pi-bars" @click="visible = !visible" />
      </div>

        <div class="reflinks">
            <a href="https://www.linkedin.com/in/piotrekdabrowski" target="_blank" ><i class="pi pi-linkedin"></i></a>
            <a href=" https://github.com/PiotrDabrowski232" target="_blank" ><i class="pi pi-github"></i></a>
        </div>

        <div class="welcomeMessage">
            <h4>WELCOME</h4>
            <p>I'm a young and full-of-energy programmer<br> who wants to develop skills and abilities<br> by practicing and never giving up. </p>
        </div>

        <div class="return-to-home">
            <ButtonBase icon="pi pi-arrow-up" rounded aria-label="Filter"/>
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
    .return-to-home{
        position: fixed;
        top: 90vh;
        right: 8vh;
        padding: 0px;
        margin: 0px;
    }

    h3{
        margin:0px;
        color: white;
        padding: 8vh 0vw 0vh 4vw;
        font-family: 'Chivo Mono', monospace;
        display: inline-block;
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
        padding-left: 90vw;
    }

    .reflinks a{
        text-decoration: none;
        color: azure;
        padding-top: 1vh;
        padding-left: 5vw;
        display: block;
    }
    .welcomeMessage{
        color: white;
        position: absolute;
        top: 30vh;
        left: 13vw;
    }

    .welcomeMessage h4{
        letter-spacing: 3.2px;
        font-family: 'Chivo Mono', monospace;
        font-family: 'Sono', sans-serif;
        color: lightgrey;
    }
    .welcomeMessage p{
        letter-spacing: 3.2px;
        font-family: 'Noto Serif', serif;
        color: burlywood;
        font-size: 45px;
        padding-left: 3.2vw;
        padding-top: 1.2vh;
    }
  </style>
  