<template>
  <div>
    <Navbar></Navbar>
    <SectionAbout></SectionAbout>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import SectionAbout from "~/components/section/SectionAbout.vue";

export default {
  name: "AboutLayout",
  components: {
    Navbar,
    SectionAbout
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Prompt");
body {
  padding: 0;
  margin: 0;
  width: 100%;
  background: linear-gradient(to top, #ffffff, #35b1ff, #008ce8);
  font-family: "Prompt", sans-serif;
}
</style>
