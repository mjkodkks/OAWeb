<template>
<div class="hero-container">
    <div class="container padding-article ">
        <div class="row justify-content-center ml-2 mr-2">
            <span class="title-kl">ใบรับรองอิเล็กทรอนิกส์</span>
        </div>
        <div class="row justify-content-center ml-2 mr-2">
            <span class="text-content-kl">ใบรับรองอิเล็กทรอนิกส์ เปรียบเสมือนพาสปอร์ต ที่ใช้ในการยืนยันตนเป็นแหล่งอ้างอิงที่มีความน่าเชื่อถือและเป็นสากล พาสปอร์ตจะอยู่ในรูปแบบของเอกสาร กระดาษ สามารถจับต้องได้ แต่ใบรับรองอิเล็กทรอนิกส์จะอยู่ในรูปของไฟล์ 1 ไฟล์ ซึ่งเป็นชุดข้อมูลที่มีความเฉพาะเจาะจงสำหรับบุคคลหนึ่งๆ เท่านั้น นั่นหมายความว่าชุดข้อมูลของใบรับรองอิเล็กทรอนิกส์ของแต่ละคนจะไม่ซ้ำกันนั่นเอง โดยใบรับรองอิเล็กทรอนิกส์จะถูกออกโดยหน่วยงานผู้ให้บริการใบรับรองอิเล็กทรอนิกส์ที่มีความน่าเชื่อถือ
                ด้วยการเข้ารหัส และ ลายมือชื่อดิจิตอล ในการทำธุรกรรม เราสามารถรักษาความ ลับของข้อมูล สามารถรักษาความถูกต้องของข้อมูล และสามารถระบุตัวบุคคลได้ระดับหนึ่ง เพื่อเพิ่มระดับความปลอดภัยในการระบุตัวบุคคล โดยสร้างความเชื่อถือมากขึ้นด้วย ใบรับรองดิจิตอล (Digital Certificate) ซึ่งออกโดยองค์กรกลางที่เป็นที่เชื่อถือ เรียกว่า องค์กรรับรองความถูกต้อง (Certification Authority) จะถูกนำมาใช้สำหรับยืนยันในการทำ ธุรกรรมว่า เป็นบุคคลนั้นๆจริงตามที่ได้อ้างไว้ ใบรับรองดิจิตอลที่ออกตามมาตรฐาน X.509 Version 3 ซึ่งเป็นมาตรฐานที่ได้รับความนิยมอย่าง แพร่หลายที่สุด</span>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "SectionKnowledge"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padding-article {
  padding: 0 100px;
}

.hero-container {
  width: 100%;
  min-height: 300px;
  display: block;
  position: relative;
  margin-bottom: 1.5rem;
}

.hero-container::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -1.5rem;
  right: 0;
  width: 100%;
  height: 100%;
  background: #008ce8;
  -webkit-clip-path: polygon(100% 90%, 0% 100%, 100% 100%);
  clip-path: polygon(100% 90%, 0% 100%, 100% 100%);
}

.title-kl {
  font-size: 2em;
}

.text-content-kl {
  font-size: 1em;
  padding: 10px;
  text-align: justify;
}

@media screen and (max-width: 450px) {
  .footer {
    font-size: 10px;
  }
  .padding-article {
    padding: 0;
  }
}
</style>

<style>
</style>
