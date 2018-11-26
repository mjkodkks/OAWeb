<template>
  <div>
    <Navbar></Navbar>
    <SectionRegister></SectionRegister>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import SectionRegister from "~/components/section/SectionRegister.vue";

export default {
  name: "RegisterLayout",
  components: {
    Navbar,
    SectionRegister
  },
  data() {
    return {
      titleEng: "Register CA | INET ONE AUTHEN | CERTIFICATION AUTHORITY",
      titleTH: "สมัครใช้บริการ รับใบรับรองอิเล็กทรอนิกส์ | INET ONE AUTHEN | CERTIFICATION AUTHORITY"
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
body {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #adcdef, #35b1ff, #008ce8);
}
</style>
