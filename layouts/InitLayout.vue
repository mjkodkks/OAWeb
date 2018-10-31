<template>
  <div>
    <Navbar />
    <SectionHome />
    <SectionKnowledge />
    <SectionSolution />
    <SectionWhyuse />
    <Footer />
    <Footer_inet />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import SectionHome from "~/components/section/SectionHome.vue";
import SectionKnowledge from "~/components/section/SectionKnowledge.vue";
import SectionSolution from "~/components/section/SectionSolution.vue";
import Footer_inet from "~/components/Footer_inet.vue";
import SectionWhyuse from "~/components/section/SectionWhyuse.vue";

export default {
  name: "InitLayout",
  components: {
    Navbar,
    Footer,
    Footer_inet,
    SectionHome,
    SectionKnowledge,
    SectionSolution,
    SectionWhyuse
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
