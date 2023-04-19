<template>
        <div class="main"  id="ContactMe">
            
                <nav>
                    <router-link @click="isActiveCv= true; isActiveContact= false" v-bind:class="isActiveCv && 'active'" style=" text-decoration: none; position: relative;"  class="links" to="/"  exact-path>Contact</router-link>
                    <router-link @click="isActiveCv= false; isActiveContact= true" v-bind:class="isActiveContact && 'active'" style=" text-decoration: none; position: relative;" class="links" to="/Cv">Curriculum Vitae</router-link>
                </nav>  

                <div class="rout-content">
                    <router-view v-slot="{Component}">
                        <transition name="slide-fade" mode='out-in'>
                            <Component :is="Component"/>
                        </transition>
                    </router-view>
                </div>

                <div class="footer">
                    <p>© Copyright Piotr Dąbrowski 2023</p>
                </div>
        </div>
</template>
 
<script>
export default{
    data() {
  return {
    isActiveCv: true,
    isActiveContact: false
  }
}

}
</script>



<style>
    .main{
        height: 100vh;
        width: auto;
        background-color: #040c0d;
        text-align: center;
    }
    .footer{
        height: 5vh;
        width: auto;
        background-color: black;
        margin-top: 32vh;
    }
    .footer p{
        padding: 0;
        height: auto;
        color: white;
        text-align: center;
        margin: 0;
        padding-top: 0.8rem;
    }

        .rout-content{
            height: 43vh;
            width: 100%;
        }

        .links{
        font-size: 1.56rem;
        padding:0;
        margin: 1.5vh;
        padding-bottom: 0.3rem;
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
    height: 0.13rem;
    bottom: 0;
    left: 0;
    background-color: #369ba4;
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
    transition: all 0.3s ease-in-out;
    }

    .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateY(1rem);
    opacity: 0;
    }

  </style>
  