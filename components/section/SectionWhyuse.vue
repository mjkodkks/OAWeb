<template>
<div class="hero-container">
    <div class="container padding-article">
        <div class="row justify-content-center ml-2 mr-2">
            <span class="title-why">{{$t('home.whyuse-oneca')}}</span>
        </div>
        <div class="row justify-content-center ml-2 mr-2 align-items-center">
            <div class="col-12 col-md align-self-start">
              <div class="row justify-content-center"><img src="~/assets/ICON/approved.svg" class="img-why"></div>
              <div class="row justify-content-center"><span class="topic-why">{{$t('home.standard')}}</span></div>
              <div class="row"><span class="body-why">{{$t('home.mess-standard')}}</span></div>
            </div>
            <div class="col-12 col-md align-self-start">
               <div class="row justify-content-center"><img src="~/assets/ICON/running-man.svg" class="img-why"></div>
              <div class="row justify-content-center"><span class="topic-why">{{$t('home.convenient')}}</span></div>
              <div class="row"><span class="body-why">{{$t('home.mess-convenient')}}</span></div>
            </div>
            <div class="col-12 col-md align-self-start">
              <div class="row justify-content-center"><img src="~/assets/ICON/speech-bubble.svg" class="img-why"></div>
              <div class="row justify-content-center"><span class="topic-why">{{$t('home.advice')}}</span></div>
              <div class="row"><span class="body-why">{{$t('home.mess-advice')}}</span></div>
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
  text-align: -webkit-auto;
  text-align: center;
  margin-bottom: 30px;
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
