<template>
    <div class="hero-container">
        <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-12 mx-auto"> <div class="title-hero">
                 <div class="home-title"><span style="font-weight:bolder;">INET</span> ONE CA CERTIFICATION AUTHORITY</div>
                 <div class="sup-home-tilte">ผู้ให้บริการออกใบรับรองอิเล็กทรอนิกส์</div>
              </div></div>
            </div>
        </div>
        <div class="document-warper">
          <img class="doc-img-1" src="~/assets/ICON/document.svg" alt=":)" >
          <img class="doc-img-2" src="~/assets/ICON/document.svg" alt=":)">
          <img class="medal-img" src="~/assets/ICON/medal.svg" alt=":)">
          </div>
    </div>
</template>

<script>
export default {
  name: "SectionHome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #ffffff, #35b1ff, #008ce8);
}

.home-title {
  font-size: 2.2em;
  color: #fff;
}
.sup-home-tilte {
  font-size: 1.5em;
  color: #fff;
}
.fullheight {
  height: 100%;
}

.document-warper {
  display: block;
  position: absolute;
  right: 10vw;
  top: 30vh;
}

.medal-img {
  width: 160px;
  display: block;
  position: absolute;
  right: 31px;
  top: 250px;
  transform: perspective(400px) rotateY(-30deg) rotateX(-5deg);
}

.doc-img-1 {
  width: 350px;
  display: block;
  position: absolute;
  top: -20px;
  right: 0;
  filter: brightness(90%);
  transform: perspective(400px) rotateY(164deg);
}

.doc-img-2 {
  width: 350px;
  display: block;
  position: absolute;
  top: 0;
  right: 20px;
  transform: perspective(400px) rotateY(-16deg);
}

@media screen and (max-height: 736px) and (max-width: 450px) {
  .footer {
    font-size: 10px;
  }
}
</style>
