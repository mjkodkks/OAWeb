<template>
  <div>
    <Navbar></Navbar>
     <SectionDocument></SectionDocument>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import SectionDocument from "~/components/section/SectionDocument.vue";

export default {
  name: "DocumentLayout",
  components: {
    Navbar,
    Footer,
    SectionDocument
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
