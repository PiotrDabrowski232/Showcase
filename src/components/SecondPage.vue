<template>
    <div class="aboutMe">
        <h3>MY NAME IS</h3>
        <h1> Piotr Dąbrowski</h1>
        <p>and I'm a fourth-semester student at the Białystok University of Technology. By doing duties involves with my University, I can easily develop my technical and soft skills.</p>
        <p>In my free time, I try to gain knowledge about IT stuff, by achieving extra certificates which confirm my knowledge about a particular issue and doing practice projects.</p>
    </div>
</template>
  


<script>
export default {
    data() {
        return {
        };
    },
};
</script>
  

  <style>
   .aboutMe{
    text-align: center;
    color: wheat;
    font-family: 'Raleway', sans-serif;
   }
   
   .aboutMe h3{
    opacity: 0.4;
    margin: 0;
    padding: 0;
    padding-top: 20vh;
    font-size: 20px;
    font-weight: 100;
   }

   .aboutMe h1{
    opacity: 0.8;
    color: white;
    margin: 0;
    font-size: 65px;
    padding-top: 45px;
    letter-spacing: 5px;
    margin-bottom: 8vh;
   }

   .aboutMe p{
    color: rgb(255, 255, 255);
    letter-spacing: 1px;
    font-size: 25px;
    width: 50vw;
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5vh;
    font-weight: 100;
   }
   

  </style>
  