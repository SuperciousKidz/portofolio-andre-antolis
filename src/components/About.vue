<template>
  <div id="aboutme">
    <div class="container reveal">
      <div id="title">About Me</div>
      <div id="about">
        <div id="description">Hi, nama saya Andre Antolis, saya adalah seorang software engineer bagian frontend. Saya mempunyai
          pengalaman dalam memakai framework vue.js, html, css, scss / sass, javascript, jest dan unit test. Jika kamu tertarik untuk mempunyai sebuah website
          yang baik dan bagus, mungkin bisa coba langsung contact saya dibagian bawah description ini.
        </div>
        <div v-if="window.width > 800">
          <img src="../assets/profile.jpg" />
        </div>
      </div>
      <div class="wrapper">
        <div class="social-links">
          <a href="https://www.linkedin.com/in/andre-antolis-2984271b8/"><i class="fab fa-linkedin-in"></i></a>
          <a href="http://line.me/ti/p/~andreantolis10"><i class="fab fa-line"></i></a>
          <a href="https://www.instagram.com/andreantolis/"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
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
    window.addEventListener('scroll', reveal);
    function reveal() {
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
        else {
          reveals[i].classList.remove('active');
        }
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
@media only screen and (min-width: 600px) and (max-width: 800px) {
  .social-links {
    display: flex;
    margin-top: 50px;
    margin-left: 45px;
  }

  .social-links a {
    width: 80px;
    height: 80px;
    text-align: center;
    text-decoration: none;
    color: #000;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
    margin: 0 30px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s;
  }

  .social-links a .fa-linkedin-in {
    font-size: 30px;
    margin-top: 25px;
    position: relative;
    z-index: 10;
    transition: color 0.5s;
  }

  .social-links a .fa-line {
    font-size: 30px;
    margin-top: 25px;
    position: relative;
    z-index: 10;
    transition: color 0.5s;
  }

  .social-links a .fa-instagram {
    font-size: 30px;
    margin-top: 25px;
    position: relative;
    z-index: 10;
    transition: color 0.5s;
  }

  .social-links a::after {
    content: '';
    width: 100%;
    height: 100%;
    top: -90px;
    left: 0;
    background: linear-gradient(
        -45deg, #ed1c94, #ffec17
    );
    position: absolute;
    transition: 0.5s;
  }

  .social-links a:hover::after {
    top: 0;
  }

  .social-links a:hover .fa-linkedin-in {
    color: #fff;
  }

  .social-links a:hover .fa-line {
    color: #fff;
  }

  .social-links a:hover .fa-instagram {
    color: #fff;
  }

  .social-links a:hover {
    transform: translateY(-10px);
  }

  .reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 2s ease;
  }

  .reveal.active {
    transform: translateY(0px);
    opacity: 1;
  }

  #about {
    display: block;
  }

  #description {
    font-family: Arial;
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 35px;
    margin-top: 50px;
    text-align: justify;
  }

  #title {
    font-family: Arial;
    font-size: 40px;
    text-align: center;
    padding-top: 50px;
    letter-spacing: 2px;
  }

  #aboutme {
    width: 100%;
    height: auto;
    padding-bottom: 100px;
    background: linear-gradient(
        to right,
        white 0%,
        white 30%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.6) 100%
    );
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
}

@media only screen and (min-width: 1200px) {

  .social-links {
    display: flex;
    margin-top: 50px;
  }

  .social-links a {
    width: 80px;
    height: 80px;
    text-align: center;
    text-decoration: none;
    color: #000;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
    margin: 0 30px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s;
  }

  .social-links a .fa-linkedin-in {
    font-size: 30px;
    margin-top: 25px;
    position: relative;
    z-index: 10;
    transition: color 0.5s;
  }

  .social-links a .fa-line {
    font-size: 30px;
    margin-top: 25px;
    position: relative;
    z-index: 10;
    transition: color 0.5s;
  }

  .social-links a .fa-instagram {
    font-size: 30px;
    margin-top: 25px;
    position: relative;
    z-index: 10;
    transition: color 0.5s;
  }

  .social-links a::after {
    content: '';
    width: 100%;
    height: 100%;
    top: -90px;
    left: 0;
    background: linear-gradient(
        -45deg, #ed1c94, #ffec17
    );
    position: absolute;
    transition: 0.5s;
  }

  .social-links a:hover::after {
    top: 0;
  }

  .social-links a:hover .fa-linkedin-in {
    color: #fff;
  }

  .social-links a:hover .fa-line {
    color: #fff;
  }

  .social-links a:hover .fa-instagram {
    color: #fff;
  }

  .social-links a:hover {
    transform: translateY(-10px);
  }

  .reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 2s ease;
  }

  .reveal.active {
    transform: translateY(0px);
    opacity: 1;
  }

  img {
    border-radius: 50%;
    width: 400px;
    height: 400px;
    border: 5px solid white;
    margin-top: 100px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  #about {
    display: flex;
    justify-content: space-between;
  }

  #description {
    font-family: Arial;
    font-size: 18px;
    margin-top: 200px;
    letter-spacing: 2px;
    line-height: 35px;
    width: 40%;
    text-align: justify;
  }

  #title {
    font-family: Arial;
    font-size: 40px;
    text-align: center;
    padding-top: 50px;
    letter-spacing: 2px;
  }

  #aboutme {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        to right,
        white 0%,
        white 50%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.6) 100%
    );
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
}
</style>
