<template>
  <div class="Cv">
      <p>I would also encourage you to check out my Curriculum Vitae.</p>
      <a href="Documents/CV.pdf" target="_blank"><ButtonBase style="color:#369ba4;"  class="cvButton" label="Display Cv" link></ButtonBase></a>
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
  font-size:1.44rem;
}

.Cv .cvButton{
  margin-top: 7rem;
}

</style>