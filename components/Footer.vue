<template>
  <div class="footer">
      <b-container class="bv-example-row">
       <b-row align-h="center">
           <b-col  cols="12">
               <b-row > 
                 <b-col cols="3" md="2" class="text-right">
                    ที่อยู่ :
                 </b-col>
                 <b-col cols="9" md="10" >
                     บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน) หน่วยงานออกใบรับรองอิเล็กทรอนิกส์ ที่อยู่  1768 อาคารไทยซัมมิท ทาวเวอร์ ชั้น 16 ถ.เพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310 
                 </b-col>
                </b-row>
                 <b-row> 
                 <b-col cols="3" md="2" class="text-right">
                    โทร :
                 </b-col>
                 <b-col cols="8"  >
                   02-257-7269
                 </b-col>
                </b-row>
                 <b-row> 
                 <b-col cols="3" md="2" class="text-right" >
                    อีเมล์ :
                 </b-col>
                 <b-col cols="9" >
                   info@oneauthen.in.th
                 </b-col>
                </b-row>
           </b-col>
    </b-row>
</b-container>
  </div>
</template>

<i18n>
  {
  "th": {
    "Address": "ที่อยู่",
    "Tel": "โทรศัพท์",
    "E-mail": "อีเมล์",
    "Address_body": "บริษัท วัน ออเทน จำกัด ทะเบียนนิติบุคคลเลขที่  0105561069151 ที่อยู่  1768 อาคารไทยซัมมิท ทาวเวอร์ ชั้น 16 ถ.เพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310"
  },
  "en": {
    "Address": "Address",
    "Tel": "Tel",
    "E-mail": "E-mail",
    "Address_body": "One Authen Company limited"
  }
}
</i18n>


<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  background: #2dabfb;
  display: block;
  position: relative;
  color: #fff;
  font-size: 1em;
  padding: 2%;
}

.row {
  padding: 0 0 0 0;
}

.information {
  display: block;
}

.information > div > ul {
  list-style: none;
  padding: 0;
  display: inline-block;
}

.information > div > ul:nth-child(2) {
  list-style: none;
  padding-left: 20px;
  font-weight: bolder;
}

.information > div > ul:nth-child(3) {
  list-style: none;
  padding-left: 20px;
}

.address {
  text-align: right;
}

.custom-file-label {
  overflow: hidden;
}

@media screen and (max-height: 736px) and (max-width: 450px) {
  .footer {
    font-size: 10px;
  }
}
</style>
