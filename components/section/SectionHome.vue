<template>
    <div class="hero-container">
        <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-12 mx-auto">
                <div class="title-hero">
                   <div class="home-title"><span>INET</span> ONE CA CERTIFICATION AUTHORITY</div>
                   <div class="sup-home-tilte">ผู้ให้บริการออกใบรับรองอิเล็กทรอนิกส์</div>
                   <a href="#" class="btn btn-primary mt-4 btn-home">กรอกใบคำขอ รับใบรับรอง</a>
                </div>
              </div>
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

.btn-home {
  padding: 12px 50px;
  border-radius: 1.5rem;
  background: #fff;
  color: #007bff;
  border: 0;
  font-size: 1em;
  text-transform: uppercase;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.btn-home:hover {
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  opacity: 0.85;
  transition: opacity 0.15s ease-in;
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

.hero-container::after {
  content: "";
  width: 100%;
  height: 100%;
  background: #007bff;
}

@media screen and (max-height: 736px) and (max-width: 450px) {
  .footer {
    font-size: 10px;
  }
}
</style>
