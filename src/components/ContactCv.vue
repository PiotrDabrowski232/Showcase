<template>
    <div class="main"  id="ContactMe">
        <nav>
            <router-link @click="isActiveCv= true; isActiveContact= false" v-bind:class="isActiveCv && 'active'" style=" text-decoration: none; position: relative;"  class="links" to="/Contact">Contact</router-link>
            <router-link @click="isActiveCv= false; isActiveContact= true" v-bind:class="isActiveContact && 'active'" style=" text-decoration: none; position: relative;" class="links" to="/Cv">Curriculum Vitae</router-link>
        </nav>  
        <router-view v-slot="{Component}">
            <transition name="slide-fade" mode="out-in">
                <Component :is="Component"/>
            </transition>
        </router-view>
    </div>

    <div class="footer">
        <p>© Copyright Piotr Dąbrowski 2023</p>
    </div>
    
</template>
 
<script>
export default{
    data() {
  return {
    isActiveCv: false,
    isActiveContact: false
  }
}
}
</script>



<style>
    .main{
        height: 95vh;
        width: auto;
        background-color: #040c0d;
        text-align: center;
    }
    .footer{
        height: 5vh;
        width: auto;
        background-color: black;
    }
    .footer p{
        color: white;
        text-align: center;
        margin: 0%;
        padding-top: 1.5vh;
    }



        .links{
        font-size: 25px;
        padding:0;
        margin: 1.5vh;
        padding-bottom: 5px;
        }

        .links {
    position: relative;
    color: white;
    text-decoration: none;
    }


    .links::before{
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: lawngreen;
    transform: scaleX(0);
    transition: transform 0.8s ease;
    }

    .links:hover::before {
    transform: scaleX(1);
    }
    .active{ 
        opacity: 0.2;
        transition: opacity 0.8s;
        pointer-events: none;
    }

   nav{
    padding-top: 17vh;
   }
   
    .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
    }

  </style>
  