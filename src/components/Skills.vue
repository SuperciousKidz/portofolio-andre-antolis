<template>
  <div id="skills">
    <div class="reveal">
      <div id="title">Skills</div>
      <div id="description">Skill adalah istilah yang mencakup pengetahuan, kompetensi, dan kemampuan untuk melakukan
        tugas-tugas <br> operasional. Skill dapat dikembangkan melalui kehidupan dan pengalaman
        kerja atau dipelajari melalui pelatihan.</div>
      <div id="cards">
        <div class="card">
          <img class="card-img-top mx-auto" src="../assets/logo.png" alt="Card image cap">
          <div class="overlay">
            <div class="text">VUEJS</div>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top mx-auto" src="../assets/html.png" alt="Card image cap">
          <div class="overlay">
            <div class="text">HTML</div>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top mx-auto" src="../assets/css.png" alt="Card image cap">
          <div class="overlay">
            <div class="text">CSS</div>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top mx-auto" src="../assets/javascript.jpg" alt="Card image cap">
          <div class="overlay">
            <div class="text">JAVASCRIPT</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
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
  }
}
</script>

<style scoped>
/*handphone*/
@media only screen and (min-width: 600px) and (max-width: 800px) {
  .reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 3s ease;
  }

  .reveal.active {
    transform: translateY(0px);
    opacity: 1;
  }

  .overlay {
    border-radius: 5%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .card:hover .overlay {
    opacity: 1;
    border-radius: 5%;
  }

  .text {
    color: white;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  img {
    border-radius: 10%;
    width: 200px;
    height: 300px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  #cards {
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    padding-left: 200px;
    padding-right: 200px;
  }

  .card {
    position: relative;
    border-radius: 5%;
    width: 23rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    padding: 0 10px;
    text-decoration: none;
    margin-bottom: 30px;
  }

  .card:after {
    content: "";
    position: absolute;
    background-color: black;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -20px;
    transition: 0.3s;
  }

  .card:hover:after {
    width: 100%;
  }

  #description {
    font-family: Arial;
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
    letter-spacing: 2px;
    line-height: 35px;
  }

  #title {
    font-family: Arial;
    font-size: 40px;
    text-align: center;
    padding-top: 50px;
    letter-spacing: 2px;
  }

  #skills {
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
}

/*pc*/
@media only screen and (min-width: 1200px) {
  .reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 3s ease;
  }

  .reveal.active {
    transform: translateY(0px);
    opacity: 1;
  }

  .overlay {
    border-radius: 5%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .card:hover .overlay {
    opacity: 1;
    border-radius: 5%;
  }

  .text {
    color: white;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  img {
    border-radius: 10%;
    width: 300px;
    height: 400px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  #cards {
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    padding-left: 200px;
    padding-right: 200px;
  }

  .card {
    position: relative;
    border-radius: 5%;
    width: 23rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    padding: 0 10px;
    text-decoration: none;
  }

  .card:after {
    content: "";
    position: absolute;
    background-color: black;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -20px;
    transition: 0.3s;
  }

  .card:hover:after {
    width: 100%;
  }

  #description {
    font-family: Arial;
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
    letter-spacing: 2px;
    line-height: 35px;
  }

  #title {
    font-family: Arial;
    font-size: 40px;
    text-align: center;
    padding-top: 50px;
    letter-spacing: 2px;
  }

  #skills {
    width: 100%;
    height: auto;
    padding-bottom: 100px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
}
</style>
