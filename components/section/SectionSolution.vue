<template>
<div class="hero-container pt-5 pb-5">
    <div class="container padding-article">
        <div class="row justify-content-center ml-2 mr-2">
            <span class="title-sl">{{ $t('home.title-solution') }}</span>
        </div>
        <div class="row justify-content-center ml-2 mr-2 align-items-center">
            <div class="col-12 col-md-6 order-first"><img src="~/assets/ICON/solutionType.png" alt="" class="img-thumbnail"></div>
            <div class="col-12 col-md-6">
                <div class="row justify-content-start">
                    <span class="title-solution">{{ $t('home.title-caservice') }}</span>
                </div>
                <div class="row">
                    <span class="body-solution-left">{{ $t('home.mess-caservice') }}</span>
                    <ul class="list-sollution">
                        <li>{{ $t('home.caservice-enterprise') }}</li>
                        <li>{{ $t('home.caservice-personal') }}</li>
                    </ul>
                </div>
                <div class="row justify-content-md-start justify-content-center"><a class="btn btn-primary mt-4 btn-home" rel="noreferrer">{{ $t('home.btn-submit-form') }}</a></div>
            </div>
        </div>
        <div class="row justify-content-center ml-2 mr-2 mt-5 align-items-center">
            <div class="col-12 col-md-6"><div class="row justify-content-end">
                    <span class="title-solution">{{ $t('home.title-digitalsignature') }}</span>
                </div>
                <div class="row">
                    <span class="body-solution-right">{{ $t('home.mess-digitalsignature') }}</span>
                </div>
                <div class="row justify-content-md-end justify-content-center"><a class="btn btn-primary mt-4 btn-home" href="https://sign.one.th" rel="noreferrer" target="_blank">{{ $t('home.login-digitalsignature') }}</a></div></div>
            <div class="col-12 col-md-6 order-first order-md-last"><img src="~/assets/ICON/digitalsignature.png" alt="digitalsignature" class="img-thumbnail"></div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "SectionSolution"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-container {
  width: 100%;
  min-height: 900px;
  background: linear-gradient(to top, #73c9ff, #35b1ff, #008ce8);
}

.title-sl {
  font-size: 2em;
  margin: 1em 0;
  color: #fff;
}

.title-solution {
  font-size: 1.8em;
  margin: 1em 0;
  color: #fff;
}

.body-solution-left {
  font-size: 1em;
  color: #fff;
  text-align: left;
}

.body-solution-right {
  font-size: 1em;
  color: #fff;
  text-align: right;
}
.btn-home {
  padding: 12px 50px;
  border-radius: 1.5rem;
  background: #fff;
  color: #000;
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

.list-sollution {
  color: #fff;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: transparent;
  border: 0;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

@media screen and (max-width: 450px) {
  .footer {
    font-size: 10px;
  }
  .hero-container {
    min-height: 1320px;
  }
  .img-why {
    margin-top: 20px;
  }
  .title-why {
    font-size: 2em;
    margin: 2.5em 0 0 0;
    text-align: center;
  }
  .body-why {
    text-align: center;
  }
}
</style>
