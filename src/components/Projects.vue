<template>
  <div id="projects">
    <div class="reveal">
      <div id="title">Projects</div>
      <div id="description">Project adalah sebuah aktivitas kerja sementara yang dilakukan <br>
        untuk membuat produk atau jasa dengan waktu (awal sampai akhir) sudah ditentukan dengan jelas.</div>

      <div class="container">
        <div class="project">
          <img id="img1" src="../assets/project-java.png" />
          <div>
            <div class="project-title">
              Project The Uknown Hero
            </div>
            <div class="project-description">
              Project ini adalah sebuah game bertemakan RPG yang dimana terdapat seorang hero yang tidak diketahui namanya, disuruh oleh kesatria untuk menjalankan sebuah quest.
            </div>
          </div>
        </div>
        <div class="project">
          <img id="img2" src="../assets/project-hci.png" />
          <div>
            <div class="project-title">
              Project Bama Studios
            </div>
            <div class="project-description">
              Project ini adalah sebuah website untuk memperlihatkan sebuah tas - tas yang dijual di website Bama Studio.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
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
@media only screen and (min-width: 600px) and (max-width: 800px) {
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

  .project-description {
    font-family: Arial;
    font-size: 18px;
    margin-top: 30px;
    letter-spacing: 2px;
    line-height: 35px;
    text-align: center;
  }

  .project-title {
    font-family: Arial;
    font-size: 30px;
    padding-top: 30px;
    letter-spacing: 2px;
    text-align: center;
  }

  #img2 {
    width: 400px;
    height: 350px;
    padding-top: 100px;
  }

  #img1 {
    width: 100%;
    height: 400px;
    margin-top: 100px;
  }

  img {
    display: block;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
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
    padding-top: 30px;
    letter-spacing: 2px;
  }

  #projects {
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
}
@media only screen and (min-width: 1200px) {
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

  .project-description {
    font-family: Arial;
    font-size: 18px;
    margin-top: 30px;
    letter-spacing: 2px;
    line-height: 35px;
  }

  .project-title {
    font-family: Arial;
    font-size: 30px;
    padding-top: 100px;
    letter-spacing: 2px;
  }

  #img2 {
    width: 400px;
    height: 350px;
    padding-top: 100px;
    margin-right: 180px;
  }

  #img1 {
    width: 400px;
    height: 450px;
    margin-top: 100px;
    margin-right: 195px;
  }

  .project {
    display: flex;
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
    padding-top: 30px;
    letter-spacing: 2px;
  }

  #projects {
    width: 100%;
    height: auto;
    padding-bottom: 100px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
}
</style>
