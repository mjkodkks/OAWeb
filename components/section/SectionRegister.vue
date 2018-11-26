<template>
<div class="hero-container">
    <div class="container pt-top">
        <div class="row justify-content-center"><span class="contact-title">{{ $t('application.title')}}</span></div>
        <div class="row no-mg">
            <div class="card-application">
              <div class="container">
                <div class="row justify-content-center mt-2">
                    <div class="title-form-type" ><span>{{$t('application.type')}}</span></div>
                </div>
                <div class="row justify-content-center mt-4">
                  <div class="col-md-4 col-12 text-center">
                    <div class="radio-warpper" v-bind:class="[selected == 'personal' ? selectRadio : noneselectRadio ]">
                      <input id="radioPersonal" type="radio" v-model="selected" value="personal">
                      <label for="radioPersonal">{{$t('application.personal')}}</label>
                    </div>
                  </div>
                  <div class="col-md-4 col-12 text-center">
                    <div class="radio-warpper" v-bind:class="[selected == 'enterprise' ? selectRadio : noneselectRadio ]">
                      <input id="radioEnterprise" type="radio" v-model="selected" value="enterprise">
                      <label for="radioEnterprise">{{$t('application.enterprise')}}</label>
                    </div>
                  </div>
                </div>
             <div class="row justify-content-center mt-5">
                  <div class="title-form-type" ><span>รายละเอียดเพื่อสร้างใบรับรองอิเล็กทรอนิกส์</span></div>
            </div>
              <div class="row">
                    <div class="detail-information row mt-2" v-if="selected == personal">
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="name-th">ชื่อบุคคลเจ้าของใบรับรอง (ภาษาไทย)</label></div>
                      <div class="col-md-8 col-12"><input id="name-th" type="text" class="form-control" placeholder="คำนำหน้า ชื่อ-นามสกุล" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="name-en">ชื่อบุคคลเจ้าของใบรับรอง (ภาษาอังกฤษ)</label></div>
                      <div class="col-md-8 col-12"><input id="name-en" type="text" class="form-control" placeholder="ชื่อ-นามสกุล" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">บัตรประชาชน</label></div>
                      <div class="col-md-5 col-12"><input id="card-no" type="text" class="form-control" placeholder="1-1001-11001-00-1" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">ออกโดย</label></div>
                      <div class="col-md-5 col-12"><input id="card-no" type="text" class="form-control" placeholder="เขต อำเภอ" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">วันออกบัตร</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="วัน เดือน ปี" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-2 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">สัญชาติ</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">หนังสือเดินทางเลขที่ (Passport No.)</label></div>
                      <div class="col-md-8 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">ประเทศ</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-2 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">วันหมดอายุ</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">ที่อยู่ตามทะเบียนบ้าน</label></div>
                      <div class="col-md-8 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">โทรศัพท์ที่บ้าน</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-2 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">โทรศัพท์มือถือ (Passport No.)</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">อีเมล์</label></div>
                      <div class="col-md-8 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                   </div>
              </div>
              <div class="row justify-content-center mt-5">
                  <div class="title-form-type" ><span>รายละเอียดผู้ขอใบรับรองอิเล็กทรอนิกส์</span></div>
            </div>
              <div class="row">
                    <div class="personal-information row mt-2" v-if="selected == personal">
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="name-th">ชื่อผู้ขอใบรับรองฯ (ภาษาไทย)</label></div>
                      <div class="col-md-8 col-12"><input id="name-th" type="text" class="form-control" placeholder="ชื่อ-นามสกุล" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="name-en">ชื่อผู้ขอใบรับรอง (ภาษาอังกฤษ)</label></div>
                      <div class="col-md-8 col-12"><input id="name-en" type="text" class="form-control" placeholder="ชื่อ-นามสกุล" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">วันเดือนปี (พ.ศ.) เกิด</label></div>
                      <div class="col-md-5 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">เชื้อชาติ</label></div>
                      <div class="col-md-5 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">สัญชาติ</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-2 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">บัตรประชาชน</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">หนังสือเดินทางเลขที่ (Passport No.)</label></div>
                      <div class="col-md-8 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">ประเทศ</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-2 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">วันหมดอายุ</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">ที่อยู่ตามทะเบียนบ้าน</label></div>
                      <div class="col-md-8 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">โทรศัพท์ที่บ้าน</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-2 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">โทรศัพท์มือถือ (Passport No.)</label></div>
                      <div class="col-md-3 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="card-no">อีเมล์</label></div>
                      <div class="col-md-8 col-12"><input id="card-no" type="text" class="form-control" placeholder="1234567891011" aria-label="Username" aria-describedby="basic-addon1"></div>
                      
                   </div>
              </div>
              <div class="row justify-content-center mt-5">
                  <div class="title-form-type" ><span>รายละเอียดใบรับรองอิเล็กทรอนิกส์</span></div>
            </div>
              <div class="row">
                    <div class="personal-information row mt-2" v-if="selected == personal">
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="name-th">ชื่อบุคคลเจ้าของใบรับรอง (CN)</label></div>
                      <div class="col-md-8 col-12"><input id="name-th" type="text" class="form-control" placeholder="ชื่อ-นามสกุล" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="name-en">หมายเลขบัตรประชาชนเจ้าของใบรับรอง (UID)</label></div>
                      <div class="col-md-8 col-12"><input id="name-en" type="text" class="form-control" placeholder="ชื่อ-นามสกุล" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="name-en">ประเทศเจ้าของใบรับรอง (C)</label></div>
                      <div class="col-md-2 col-12"><input id="name-en" type="text" class="form-control" value="TH" disabled placeholder="ชื่อ-นามสกุล" aria-label="Username" aria-describedby="basic-addon1"></div>
                      <div class="col-md-6 col-12" ></div>
                      <div class="col-md-4 col-12 align-self-center text-md-right text-left"><label class="label-text" for="name-th">อายุการใช้บริการ</label></div>
                      <div class="col-md-8 col-12">
                        <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" v-model="certAge" id="customRadioInline1" value="1" name="customRadioInline1" class="custom-control-input">
                          <label class="custom-control-label" for="customRadioInline1">1 ปี</label>
                      </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" v-model="certAge" id="customRadioInline2" value="2" name="customRadioInline2" class="custom-control-input">
                          <label class="custom-control-label" for="customRadioInline2">2 ปี</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" v-model="certAge" id="customRadioInline3" value="3" name="customRadioInline3" class="custom-control-input">
                          <label class="custom-control-label" for="customRadioInline3">3 ปี</label>
                        </div>
                      </div>
                      
                      
                   </div>
              </div>
              </div>
            </div>
        </div>
    </div>
    </div>
</template> 

<script>
export default {
  name: "SectionRegister",
  data() {
    return {
      selected: "personal",
      selectRadio: "select-radio",
      noneselectRadio: "noneselect-radio",
      value: "personal",
      text1: "",
      personal: "personal",
      business: "business",
      certAge: ""
    };
  },
  updated: function() {
    // Fired every second, should always be true
    console.log(this.certAge);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-container {
  width: 100%;
  height: 100%;
}

.card-application {
  display: block;
  padding: 20px;
  width: 100%;
  background: #ffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: #008ce8;
}

.title-form-type {
  font-size: 1.5em;
}

.contact-title {
  font-size: 2em;
  margin: 30px 0;
  color: #f0f8ff;
}

.pt-top {
  padding-top: 10vh;
}

.no-mg {
  margin: 0;
}

.radio-warpper {
  cursor: pointer;
  border-radius: 2rem;
}

.radio-warpper label {
  cursor: pointer;
  width: 100%;
  margin-bottom: 0rem;
  padding: 5px;
}

.select-radio {
  border: solid #008ce8 1px;
  background: #008ce8;
  color: #f0f8ff;
  cursor: pointer;
}
.noneselect-radio {
  border: solid transparent 1px;
  cursor: pointer;
}

.noneselect-radio:hover {
  background: #f1f1f1;
  transition: background 0.2s;
}

#radioPersonal,
#radioEnterprise {
  visibility: hidden;
  opacity: 0;
  display: none;
}

.detail-information {
  padding: 10px;
  width: 100%;
}

.detail-information input {
  margin-bottom: 10px;
}

.personal-information {
  padding: 10px;
  width: 100%;
}

.personal-information input {
  margin-bottom: 10px;
}

.label-text {
}

input::-webkit-input-placeholder {
  color: #e6e4e4;
}

@media screen and (max-height: 736px) and (max-width: 450px) {
}
</style>
