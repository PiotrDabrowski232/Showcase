<template>
  <div class="Cv">
    <p>I would also encourage you to check out my Curriculum Vitae.</p>
    <ButtonBase label="Display Cv" onclick="location.href='Documents/CV.pdf';" rounded></ButtonBase>
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
font-size: 20px;
color: white;
}
.Cv p{
  font-size: 23px;
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