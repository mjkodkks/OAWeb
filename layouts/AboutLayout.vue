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
</style>
