<template>
  <div id="home">
    <nav-bar></nav-bar>
    <div class="container">
      <div id="body-home">
        <img class="profile" src="../assets/profile.jpg" />
        <div id="body-right">
          <span id="span-right">I'm a</span>
          <ul class="option">
            <li><span>Software Engineer</span></li>
            <li><span>Programmer</span></li>
            <li><span>Frontend Developer</span></li>
            <li><span>Web Developer</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./bar/NavBar.vue";

export default {
  name: 'App',
  components: {
    'nav-bar': navbar
  }
}
</script>

<style scoped>
@media only screen and (min-width: 600px) and (max-width: 800px) {
  /*handphone*/
  #body-right {
    display: flex;
    margin-top: 100px;
  }

  #span-right {
    font-size: 30px;
    font-family: Arial;
    margin-top: 21px;
    letter-spacing: 2px;
    padding-left: 60px;
  }

  .option {
    height: 90px;
    line-height: 90px;
    overflow: hidden;
    letter-spacing: 2px;
  }

  .option li {
    list-style: none;
    font-size: 30px;
    font-family: Arial;
    font-weight: 500;
    position: relative;
    top: 0;
    animation: slide 12s steps(4) infinite;
    letter-spacing: 2px;
  }

  @keyframes slide {
    100% {
      top: -360px;
    }
  }
  .option li span {
    position: relative;
    margin: 5px 0;
    line-height: 80px;
    letter-spacing: 2px;
  }

  .option li span:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 90px;
    background: white;
    border-left: 10px solid darkslategray;
    animation: typing 3s steps(12) infinite;
    letter-spacing: 2px;
  }

  @keyframes typing {
    40%, 60% {
      left: calc(100% + 30px);
    }
    100% {
      left: 0;
    }
  }
  #body-home {
    margin-top: 200px;
  }

  .profile {
    border-radius: 50%;
    width: 400px;
    height: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 5px solid white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  #home {
    width: 100%;
    height: 100vh;
    background: white;
    /*box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;*/
  }
}
/*pc*/
@media only screen and (min-width: 1200px) {
  #body-right {
    margin-top: 50px;
  }
  #span-right {
    margin-left: 50px;
    font-size: 60px;
    font-family: Arial;
    letter-spacing: 2px;
  }
  .option {
    margin-left: 15px;
    height: 90px;
    line-height: 90px;
    overflow: hidden;
    letter-spacing: 2px;
  }

  .option li {
    list-style: none;
    font-size: 60px;
    font-family: Arial;
    font-weight: 500;
    position: relative;
    top: 0;
    animation: slide 12s steps(4) infinite;
    letter-spacing: 2px;
  }
  @keyframes slide {
    100%
    {
      top: -360px;
    }
  }
  .option li span
  {
    position: relative;
    margin: 5px 0;
    line-height: 80px;
    letter-spacing: 2px;
  }
  .option li span:after
  {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 90px;
    background: white;
    border-left: 10px solid darkslategray;
    animation: typing 3s steps(12) infinite;
    letter-spacing: 2px;
  }
  @keyframes typing {
    40%, 60%{
      left: calc(100% + 30px);
    }
    100%
    {
      left: 0;
    }
  }
  #body-home {
    display: flex;
    justify-content: space-between;
    margin-top: 200px;
  }
  .profile {
    border-radius: 50%;
    width: 400px;
    height: 400px;
    border: 5px solid white;
    margin-left: 25px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  #home {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        to right,
        black 0%,
        rgba(0, 0, 0, 0.3) 50%,
        white 50%,
        white 100%
    );
    /*box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;*/
  }
}

</style>
