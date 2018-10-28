<template>
  <div class="footer-inet">
    <div class="container">
      <div class="row justify-content-center">
        <img src="~/assets/ICON/inet-w.jpg" class="img-inet"><span>Copyright © 2018    Internet Thailand Public Company Limited</span>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Footer_inet"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-inet {
  width: 100%;
  background: #459b12;
  display: block;
  position: relative;
  color: #fff;
  font-size: 14px;
  padding: 0.5%;
  line-height: 50px;
}

.img-inet {
  height: 50px;
  margin: 0 10px;
}
@media screen and (max-height: 736px) and (max-width: 450px) {
  .footer-inet {
    font-size: 10px;
  }
}
</style>
