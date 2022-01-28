<template>
  <div v-if="window.width > 800" id="navbar">
    <div class="navbar">
      <b-nav>
        <b-nav-item href="#home"><p class="font-left">Portofolio</p></b-nav-item>
      </b-nav>
      <b-nav>
        <b-nav-item href="#home"><span class="text-black font-right">Home</span></b-nav-item>
        <b-nav-item href="#skills"><span class="text-black font-right">Skills</span></b-nav-item>
        <b-nav-item href="#projects"><span class="text-black font-right">Projects</span></b-nav-item>
        <b-nav-item href="#aboutme"><span class="text-black font-right">About me</span></b-nav-item>
      </b-nav>
    </div>
  </div>
  <div v-else id="navbar">
    <b-navbar toggleable type="dark" variant="dark">
      <b-nav>
        <b-nav-item href="#home"><p class="font-left">Portofolio</p></b-nav-item>
      </b-nav>

      <b-navbar-toggle class="position-navbar" target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" class="navbar-toggler-icon"></b-icon>
          <b-icon v-else class="navbar-toggler-icon"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#home"><span class="text-white font-right">Home</span></b-nav-item>
          <b-nav-item href="#skills"><span class="text-white font-right">Skills</span></b-nav-item>
          <b-nav-item href="#projects"><span class="text-white font-right">Projects</span></b-nav-item>
          <b-nav-item href="#aboutme"><span class="text-white font-right">About me</span></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      window: {
        width: 0,
      }
    }
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    }
  },
  created() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByClassName("navbar").style.top = "0";
      } else {
        document.getElementsByClassName("navbar").style.top = "-50px";
      }
    }
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style scoped>
.position-navbar {
  margin-top: -15px;
}
@media only screen and (min-width: 600px) and (max-width: 800px) {

  span {
    position: relative;
    text-decoration: none;
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
    padding-bottom: 30px;
    display: block;
  }

  .navbar {
    display: flex;
    position: fixed;
    width: 100%;
    margin-top: -100px;
    z-index: 1000;
    justify-content: space-evenly;
    transition: 0.5s ease;
  }

  .navbar:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  #navbar {
    padding-top: 100px;
  }

  .font-left {
    font-family: Arial;
    font-weight: bold;
    font-size: 50px;
    background-image: linear-gradient(
        to right,
        white 0%,
        rgba(0, 0, 0, 0.3) 50%,
        darkslategray 50%,
        lightgreen 100%
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
@media only screen and (min-width: 1200px) {
  span {
    position: relative;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 0.5px;
    padding: 0 10px;
  }

  span:after {
    content: "";
    position: absolute;
    background-color: black;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  span:hover:after {
    width: 100%;
  }

  .navbar {
    display: flex;
    position: fixed;
    width: 100%;
    margin-top: -100px;
    z-index: 1000;
    justify-content: space-evenly;
    transition: 0.5s ease;
  }

  .navbar:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  #navbar {
    padding-top: 100px;
  }

  .font-right {
    font-family: Arial;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: 2px;
  }

  .font-left {
    font-family: Arial;
    font-weight: bold;
    margin-left: 80px;
    font-size: 50px;
    background-image: linear-gradient(
        to right,
        black 0%,
        rgba(0, 0, 0, 0.3) 50%,
        darkslategray 50%,
        lightgreen 100%
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
</style>
