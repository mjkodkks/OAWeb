<template>
<div class="hero-container mb-4">
    <div class="container padding-article">
        <div class="row justify-content-center ml-2 mr-2">
            <span class="title-why">ทำไมต้องใช้แพลต์ฟอร์ม ONE CA</span>
        </div>
        <div class="row justify-content-center ml-2 mr-2 align-items-center">
            <div class="col-12 col-md align-self-start">
              <div class="row justify-content-center"><img src="~/assets/ICON/approved.svg" class="img-why"></div>
              <div class="row justify-content-center"><span class="topic-why">มาตราฐานสากล</span></div>
              <div class="row"><span class="body-why">บริการออกใบรับรองฯ ของ One CA ได้รับการรับรองมาตรฐานความปลอดภัยสากล ISO27001 และ Webtrust for CA ใบรับรองฯ จาก ONE CA มีความถูกต้อง เที่ยงตรง และปลอดภัย ในระดับเดียวกับ CA สากลทั่วโลก</span></div>
            </div>
            <div class="col-12 col-md align-self-start">
               <div class="row justify-content-center"><img src="~/assets/ICON/running-man.svg" class="img-why"></div>
              <div class="row justify-content-center"><span class="topic-why">สะดวกรวดเร็ว</span></div>
              <div class="row"><span class="body-why">ผู้ใช้บริการสามารถสร้างใบคำขอใบรับรองฯ และรับใบรับรองฯได้ด้วยตนเอง ผ่านทางเว็บไซต์ ทำให้สะดวกและประหยัดเวลา ทั้งนี้ ก่อนใบรับรองฯหมดอายุ ผู้ใช้บริการจะได้รับอีเมล์แจ้งเตือนล่วงหน้าให้มาขอใหม่ ป้องกันปัญหาการใช้งานหยุดชะงัก</span></div>
            </div>
            <div class="col-12 col-md align-self-start">
              <div class="row justify-content-center"><img src="~/assets/ICON/speech-bubble.svg" class="img-why"></div>
              <div class="row justify-content-center"><span class="topic-why">ให้คำปรึกษาและบริการ</span></div>
              <div class="row"><span class="body-why">สามารถให้บริการได้อย่างต่อเนื่อง และมีเจ้าหน้าที่ให้คำปรึกษาตลอดการใช้บริการ </span></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "SectionWhyuse"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-container {
  width: 100%;
  display: block;
  position: relative;
  min-height: 650px;
  background: #fff;
}

.hero-container::before {
  content: "";
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 300px;
  background: #73c9ff;
  -webkit-clip-path: polygon(0 0, 100% 9%, 100% 0);
  clip-path: polygon(0 0, 100% 9%, 100% 0);
}

.title-why {
  font-size: 2em;
  margin: 2.5em 0;
  color: #000;
}

.topic-why {
  font-size: 1.5em;
  margin: 1em 0;
  color: #000;
}

.body-why {
  font-size: 1em;
  color: #000;
  padding: 0 12px;
  text-align: justify;
}

.img-why {
  height: 150px;
}

@media screen and (max-height: 736px) and (max-width: 450px) {
  .footer {
    font-size: 10px;
  }
}
</style>
