<template>
<div class="hero-container">
    <div class="container pt-top">
        <div class="row justify-content-center"><span class="contact-title">{{$t('about.titleAbout')}}</span></div>
        <div class="row">
            <div class="col-md-4">
                <div class="row info-title">{{$t('about.title-company')}}</div>
                 <div class="row address-title">{{$t('about.name-company')}}</div>
                <div class="row info-title">{{$t('about.address-company')}}</div>
                <div class="row address-title">{{$t('about.ca')}}</div>
                <div class="row address-title">{{$t('about.mess-address-company')}}</div>
                
                <div class="row tel-title"><span><img src="~/assets/ICON/telephone.svg" alt=""></span>{{$t('about.tel')}}: +66-2257-7000</div>
                <div class="row email-title"><span><img src="~/assets/ICON/send.svg" alt=""></span>{{$t('about.email')}}: ra@inet.co.th</div>
</div>
            <div class="col-md-8 col-xs-12">
              <div class="iframe-container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.89216200304!2d100.56541834193052!3d13.748830221923383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ef116c92c5b%3A0xe916568426b92304!2sThai+Summit+Tower!5e0!3m2!1sth!2sth!4v1540151987446" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
              
              </div>
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
  margin: 30px 0;
  color: #f0f8ff;
}

.info-title {
  font-size: 2em;
  margin-bottom: 20px;
  color: #f0f8ff;
}

.address-title {
  font-size: 1.1em;
  margin-bottom: 20px;
  color: #f0f8ff;
}

.tel-title {
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #f0f8ff;
}

.tel-title img {
  width: 30px;
  margin-right: 11px;
}

.email-title {
  font-size: 1.1em;
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

.iframe-container {
  padding: 15px;
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Ratio 16:9 ( 100%/16*9 = 56.25% ) */
}
.iframe-container > * {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

@media screen and (max-height: 736px) and (max-width: 450px) {
}
</style>
