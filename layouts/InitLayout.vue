<template>
  <div>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default {
  name: "InitLayout",
  components: {
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Prompt");
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 1000vh;
  background: #2f8ac7;
  font-family: "Prompt", sans-serif;
}
</style>
