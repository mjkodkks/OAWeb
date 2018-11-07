<template>
  <div class="footer">
      <b-container class="bv-example-row">
       <b-row align-h="center">
           <b-col  cols="12">
               <b-row > 
                 <b-col cols="3" md="2" class="text-right">
                    {{$t('address.address')}} :
                 </b-col>
                 <b-col cols="9" md="10" >
                     {{$t('address.mess-address')}}
                 </b-col>
                </b-row>
                 <b-row> 
                 <b-col cols="3" md="2" class="text-right">
                    {{$t('address.tel')}} :
                 </b-col>
                 <b-col cols="8"  >
                   02-257-7269
                 </b-col>
                </b-row>
                 <b-row> 
                 <b-col cols="3" md="2" class="text-right" >
                    {{$t('address.email')}} :
                 </b-col>
                 <b-col cols="9" >
                   ra@inet.co.th
                 </b-col>
                </b-row>
           </b-col>
    </b-row>
</b-container>
  </div>
</template>

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
