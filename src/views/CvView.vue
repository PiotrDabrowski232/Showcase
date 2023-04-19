<template>
  <div class="Cv">
      <p>I would also encourage you to check out my Curriculum Vitae.</p>
      <a href="Documents/CV.pdf" target="_blank"><ButtonBase class="cvButton" label="Display Cv" rounded></ButtonBase></a>
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
}
.Cv p{
  font-size:1.44rem;
}

.Cv .cvButton{
  margin-top: 7rem;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(1.25rem);
  opacity: 0;
}
</style>