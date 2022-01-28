<template>
  <div>
    <home></home>
    <skills></skills>
    <projects></projects>
    <about></about>
  </div>
</template>

<script>
import home from "./components/Home.vue";
import skills from "./components/Skills.vue"
import projects from "./components/Projects.vue"
import about from "./components/About.vue"
export default {
  name: 'App',
  components: {
    'home': home,
    'skills': skills,
    'projects': projects,
    'about': about
  },
  created() {
    document.body.style.zoom = 0.75;
  }
}

</script>

<style>
</style>
