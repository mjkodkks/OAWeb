<template>
<div class="hero-container">
    <div class="container pt-top">
        <div class="row justify-content-center"><span class="contact-title">เอกสารเผยแพร่</span></div>
        <div class="row justify-content-start"><span class="contact-title-sub">แนวนโยบาย</span></div>
        <div class="row justify-content-center">
            <div class="col">
                <div class="card-document">
                    <div class="open-document">
                      <a class="btn btn-primary mt-2" href="https://drive.google.com/open?id=1slPTfJdtQ7nJAIoT_BaNCgMKECoEtEuq" target="_blank" style="width:100%;">preview</a>
                      <a class="btn btn-success mt-2" href="https://drive.google.com/uc?export=download&id=1slPTfJdtQ7nJAIoT_BaNCgMKECoEtEuq" style="width:100%;">download</a>
                    </div>
                 </div>
                 <div class="row name-document">แนวปฏิบัติของผู้ให้บริการออกใบรับรองอิเล็กทรอนิกส์แห่งชาติ Thailand NRCA (CPS Version 4.0) (SSL Baseline)</div>
                 <div class="row justify-content-center publised">Publish: 31.08.2018</div>
             </div>
            <div class="col"><div class="card-document"></div></div>
            <div class="col"><div class="card-document"></div></div>
            <div class="col"><div class="card-document"></div></div>
        </div>
        <div class="row justify-content-start"><span class="contact-title-sub mt-5">แบบคำขอ</span></div>
        <div class="row justify-content-center mb-5">
            <div class="col"><div class="card-document">
                    <div class="open-document">
                        <div class="btn btn-primary mt-2" style="width:100%;">preview</div>
                        <div class="btn btn-success mt-2" style="width:100%;" >download</div>
                    </div>
                 </div>
                 <div class="row name-document">แนวปฏิบัติของผู้ให้บริการออกใบรับรองอิเล็กทรอนิกส์แห่งชาติ Thailand NRCA (CPS Version 4.0) (SSL Baseline)</div>
                 <div class="row justify-content-center publised">Publish: 31.08.2018</div></div>
            <div class="col"><div class="card-document"></div></div>
            <div class="col"><div class="card-document"></div></div>
            <div class="col"><div class="card-document"></div></div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "SectionDocument"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-container {
  width: 100%;
  height: auto;
  background: linear-gradient(to top, #ffffff, #35b1ff, #008ce8);
}

.contact-title {
  font-size: 2em;
  margin-bottom: 30px;
  color: #f0f8ff;
}

.contact-title-sub {
  font-size: 2em;
  margin-bottom: 30px;
  color: #f0f8ff;
  border-right: solid 3px #fff;
  padding-right: 10px;
}

.card-document {
  width: 220px;
  display: block;
  position: relative;
  height: 300px;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  background-image: url("https://www.nrca.go.th/uploads/Document/16/document_thumbnail.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-document:hover .open-document {
  visibility: visible;
  height: 40%;
  transition: all 0.2s ease-in;
}

.open-document {
  width: 100%;
  height: 0;
  visibility: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #20252961;
  text-align: center;
  padding: 3%;
  color: #ffff;
  overflow: hidden;
  transition: all 0.2s ease-in;
}

.publised {
  font-size: 0.8em;
  color: rgb(96, 97, 97);
}

.name-document {
  text-align: center;
}

.pt-top {
  padding-top: 10vh;
}

@media screen and (max-height: 736px) and (max-width: 450px) {
  .name-document {
    text-align: center;
  }
}
</style>
