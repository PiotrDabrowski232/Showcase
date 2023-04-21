<template>
    <div class="page-loader">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</template>
  




  <style lang="scss" scoped>
  $colors: #00747b, #00444f, #c42027;
  .page-loader{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color: #00181a;
    z-index: 999;
  }
  .cube{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 10px;

        @for $i from 1 through length($colors){
            &:nth-child(#{$i}){
                background-color: nth($colors, $i);
            }

        }

    &:first-child{
        animation: left 1.5s infinite 0s;
    }
    
    &:nth-child(2){
        animation: middle 1.5s infinite 0.25s;
    }
    &:last-child{
        animation: right 1.5s infinite 0.5s;
    }

    @keyframes left {
        40%{
            transform: translateY(-60px);
        }
        50%{
            transform:translateY(0);
        } 
    }

    @keyframes right {
        40%{
            transform: translateY(-60px);
        }
        50%{
            transform:translateY(0);
        }
        
  }
  @keyframes middle {
    40%{
            transform: translateY(-60px);
        }
        50%{
            transform:translateY(0);
        }
  }
  }

  </style>
  