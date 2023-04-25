
<template>
  <div class="Contact">
    <p style="margin-bottom: 7vh; font-size:1.2vw;">If you are interested, here are options on how to contact me or check out my project</p>
    <div class="links-from-contact">
    <p style="margin-top: 4vh;"><strong style="letter-spacing: 0.13rem;">LinkedIn: </strong><a href="https://www.linkedin.com/in/piotrekdabrowski" target="_blank">https://www.linkedin.com/in/piotrekdabrowski</a></p>
    <p style="margin-top: 4vh;"><strong style="letter-spacing:0.13rem;">GitHub: </strong><a href="https://github.com/PiotrDabrowski232" target="_blank">https://github.com/PiotrDabrowski232</a></p>
  </div>
    <p style="margin-top: 9vh;"><a href="mailto: kontakt@piotrekdabrowski.pl"><strong style="letter-spacing: 0.06rem">kontakt@piotrekdabrowski.pl</strong></a></p>
  </div>
</template>


<style>
.Contact{
color: white;
padding-top: 10vh;
font-size: 1.06vw;
width: 100%;
}
a{
  text-decoration: none;
  color: white;
  padding: 0.2em 0;
  position: relative;
}
.links-from-contact{
text-align: left;
margin-left: auto;
margin-right: auto;
width: 29.9vw;
}
  p a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: #92171c;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

p a:hover::after,
p a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}


</style>