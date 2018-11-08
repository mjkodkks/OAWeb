<template>
<div class="hero-container">
    <div class="container padding-article ">
        <div class="row justify-content-center ml-2 mr-2">
            <span class="title-kl">{{ $t('home.title-introduction') }}</span>
        </div>
        <div class="row justify-content-center ml-2 mr-2">
            <span class="text-content-kl">{{ $t('home.mess-introduction') }}</span> 
            <span class="text-content-kl no-pd">{{ $t('home.mess-introduction-2') }}</span> 
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
.no-pd {
  padding: 0 !important;
}

span {
  white-space: pre;
}
.padding-article {
  padding: 0 100px;
}

.hero-container {
  width: 100%;
  background: #fff;
  min-height: 200px;
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
  font-size: 1.3em;
  padding: 10px;
  text-align: center;
}

@media screen and (max-width: 450px) {
  .footer {
    font-size: 10px;
  }
  .padding-article {
    padding: 0;
  }
  .hero-container {
    min-height: 300px;
  }
}
</style>

<style>
</style>
