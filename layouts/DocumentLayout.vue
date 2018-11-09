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
  },
  data() {
    return {
      titleEng:
        "Dissemination Documents | INET ONE AUTHEN | CERTIFICATION AUTHORITY",
      titleTH: "เอกสารเผยแพร่ | INET ONE AUTHEN | CERTIFICATION AUTHORITY"
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
