
<template>
  <div class="Contact">
    <p style="margin-bottom: 7vh; font-size:23px;">If you are interested, here you have options on how to contact me or check my project</p>
    <p style="margin-top: 4vh; "><strong style="letter-spacing: 2px;">LinkedIn: </strong><a href="https://www.linkedin.com/in/piotrekdabrowski" target="_blank">https://www.linkedin.com/in/piotrekdabrowski</a></p>
    <p style="margin-top: 4vh;text-align: left;margin-left: 35.9vw;"><strong style="letter-spacing: 2px;">GitHub: </strong><a href="https://github.com/PiotrDabrowski232" target="_blank">https://github.com/PiotrDabrowski232</a></p>
    <p style="margin-top: 9vh;"><a href="mailto: kontakt@piotrekdabrowski.pl"><strong style="letter-spacing: 1px;">kontakt@piotrekdabrowski.pl</strong></a></p>
  </div>
</template>


<style>
.Contact{
color: white;
padding-top: 10vh;
font-size: 20px;
}

a{
  text-decoration: none;
  color: white;
  padding: 0.2em 0;
  position: relative;
}

  p a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: hotpink;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

p a:hover::after,
p a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}


</style>