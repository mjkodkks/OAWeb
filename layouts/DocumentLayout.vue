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
</style>
