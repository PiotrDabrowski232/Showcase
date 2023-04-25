<template>
  <div class="Cv">
      <p>I also encourage you to take a look at my Curriculum Vitae.</p>
      <a href="Documents/CV.pdf" target="_blank"><ButtonBase style="color:#92171c; font-size: 1vw"  class="cvButton" label="Display Cv" link></ButtonBase></a>
  </div>
</template>


<script>

export default {
    data() {
        return {
           show:true,
        };
    }
};
</script>

<style>
.Cv{
padding-top: 10vh;
color: white;
width: 100%;
}
.Cv p{
  font-size:1.25vw;
}

.Cv .cvButton{
  margin-top: 7rem;
}

</style>