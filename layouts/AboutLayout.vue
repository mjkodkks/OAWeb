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
  },
  data() {
    return {
      titleEng: "Contact Us | INET ONE AUTHEN | CERTIFICATION AUTHORITY",
      titleTH: "ติดต่อเรา | INET ONE AUTHEN | CERTIFICATION AUTHORITY"
    };
  },
  head() {
    return {
      title: this.$i18n.locale == "en" ? this.titleEng : this.titleTH,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$i18n.locale == "en" ? this.titleEng : this.titleTH
        }
      ]
    };
  }
};
</script>

<style>
</style>
