<template>
    <div class="main"  id="ContactMe">
        <nav>
            <router-link class="links" to="/Contact">Contact</router-link>
            <router-link class="links" to="/Cv">Curriculum Vitae</router-link>
        </nav>  
        <router-view/>
    </div>

    <div class="footer">
        <p>© Copyright Piotr Dąbrowski 2023</p>
    </div>
    
</template>
  


<script>

export default {
    data() {
        return {
        };
    }
};
</script>
  

  <style>
    .main{
        height: 95vh;
        width: auto;
        background-color: white;
        text-align: center;
    }
    .footer{
        height: 5vh;
        width: auto;
        background-color: black;
    }
    .footer p{
        color: gray;
        text-align: center;
        margin: 0%;
        padding-top: 1.5vh;
    }

    .links{
    font-size: 25px;
    text-decoration: none;
    color: black;
    padding:1.5vw;
   }

   nav{
    padding-top: 17vh;
   }
   
  </style>
  