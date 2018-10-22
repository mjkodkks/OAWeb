<template>
  <div>
    <Navbar />
    <SectionHome />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import SectionHome from "~/components/section/SectionHome.vue";

export default {
  name: "InitLayout",
  components: {
    Navbar,
    Footer,
    SectionHome
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Prompt");
body {
  padding: 0;
  margin: 0;
  width: 100%;
  background: #ffffff;
  font-family: "Prompt", sans-serif;
}
</style>
