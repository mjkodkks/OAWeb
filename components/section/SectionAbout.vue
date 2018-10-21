<template>
<div class="hero-container">
    <div class="container pt-top">
        <div class="row justify-content-center"><span class="contact-title">ติดต่อเรา</span></div>
        <div class="row">
            <div class="col">
                <div class="row info-title">ที่อยู่ในการติดต่อ</div>
                 <div class="row address-title">บริษัท วัน ออเทน จำกัด ทะเบียนนิติบุคคลเลขที่ 0105561069151 ที่อยู่ 1768 อาคารไทยซัมมิท ทาวเวอร์ ชั้น 16 ถ.เพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310</div>
                <div class="row tel-title"><span><img src="~/assets/ICON/telephone.svg" alt=""></span>โทรศัพท์ : 02-257-7269</div>
                <div class="row email-title"><span><img src="~/assets/ICON/send.svg" alt=""></span>อีเมล์ : info@oneauthen.in.th</div>
</div>
            <div class="col"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.89216200304!2d100.56541834193052!3d13.748830221923383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ef116c92c5b%3A0xe916568426b92304!2sThai+Summit+Tower!5e0!3m2!1sth!2sth!4v1540151987446" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "SectionAbout"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #ffffff, #35b1ff, #008ce8);
}

.contact-title {
  font-size: 2em;
  margin-bottom: 30px;
  color: #f0f8ff;
}

.info-title {
  font-size: 2em;
  margin-bottom: 30px;
  color: #f0f8ff;
}

.address-title {
  font-size: 1.3em;
  margin-bottom: 30px;
  color: #f0f8ff;
}

.tel-title {
  font-size: 1.3em;
  margin-bottom: 30px;
  color: #f0f8ff;
}

.tel-title img {
  width: 30px;
  margin-right: 11px;
}

.email-title {
  font-size: 1.3em;
  margin-bottom: 30px;
  color: #f0f8ff;
}

.email-title img {
  width: 30px;
  margin-right: 11px;
}

.pt-top {
  padding-top: 10vh;
}

@media screen and (max-height: 736px) and (max-width: 450px) {
}
</style>
