<template>
<div class="hero-container">
    <div class="container pt-top">
        <div class="row justify-content-center"><span class="contact-title">เอกสารเผยแพร่</span></div>
        <div class="row justify-content-start"><span class="contact-title-sub">แนวนโยบาย</span></div>
        <div class="row justify-content-center">
            <div class="col">
                <div class="card-document">
                   <div class="text-card">Certificate Policy (CP)</div>
                    <div class="open-document">
                      <div class="btn-warper">
                      <a class="btn btn-primary btn-preview mt-2" href="doc/Certificate Policy.pdf" target="_blank" style="width:100%;">preview</a>
                      <a class="btn btn-success btn-download mt-2" href="doc/Certificate Policy.pdf" style="width:100%;" download>download</a>
                    </div>
                    </div>
                 </div>
                 <div class="row justify-content-center name-document">แนวนโยบายของผู้ให้บริการออกใบรับรองอิเล็กทรอนิกส์ One CA</div>
                 <div class="row justify-content-center publised">Publish: 2.11.2018</div>
             </div>
            <div class="col"><div class="card-document">
              <div class="text-card">Certification Practice Statement (CPS)</div>
                    <div class="open-document">
                      <div class="btn-warper">
                      <a class="btn btn-primary btn-preview mt-2" href="doc/Certification Practice Statement.pdf" target="_blank" style="width:100%;">preview</a>
                      <a class="btn btn-success btn-download mt-2" href="doc/Certification Practice Statement.pdf" style="width:100%;" download>download</a>
                      </div>
                    </div>
                 </div>
                 <div class="row name-document">แนวปฏิบัติของผู้ให้บริการออกใบรับรองอิเล็กทรอนิกส์ One CA</div>
                 <div class="row justify-content-center publised">Publish: 2.11.2018</div></div>
            <div class="col"><div class="card-document">
              <div class="text-card">Privacy Policy</div>
                    <div class="open-document">
                      <div class="btn-warper">
                      <a class="btn btn-primary btn-preview mt-2" href="doc/Data Privacy Policy.pdf" target="_blank" style="width:100%;">preview</a>
                      <a class="btn btn-success btn-download mt-2" href="doc/Data Privacy Policy.pdf" style="width:100%;" download>download</a>
                      </div>
                    </div>
                 </div>
                 <div class="row justify-content-center name-document">นโยบายคุ้มครองข้อมูลส่วนบุคคล</div>
                 <div class="row justify-content-center publised">Publish: 2.11.2018</div></div>
        
        </div>
        <div class="row justify-content-start"><span class="contact-title-sub mt-5">แบบคำขอ</span></div>
        <div class="row justify-content-center mb-5">
            <div class="col"><div class="card-document">
              <div class="text-card">Request</div>
                    <div class="open-document">
                      <div class="btn-warper">
                        <div class="btn btn-primary btn-preview mt-2" style="width:100%;">preview</div>
                        <div class="btn btn-success btn-download mt-2" style="width:100%;" >download</div>
                      </div>
                    </div>
                 </div>
                 <div class="row name-document justify-content-center">
                        แบบคำขอใช้บริการใบรับรองอิเล็กทรอนิกส์</div>
                 <div class="row justify-content-center publised">Publish: 31.08.2018</div></div>
            <div class="col"><div class="card-document">
              <div class="text-card">Revoke</div>
                    <div class="open-document">
                      <div class="btn-warper">
                        <div class="btn btn-primary btn-preview mt-2" style="width:100%;">preview</div>
                        <div class="btn btn-success btn-download mt-2" style="width:100%;" >download</div>
                      </div>
                    </div>
                 </div>
                 <div class="row justify-content-center name-document">แบบคำขอคำขอเพิกถอนใบรับรองอิเล็กทรอนิกส์ภายใต้</div>
                 <div class="row justify-content-center publised">Publish: 31.08.2018</div></div>
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
  margin: 30px 0;
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
  width: 180px;
  display: block;
  position: relative;
  height: 230px;
  background: #f0f0f0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  /*   background-image: url(~assets/ICON/if_pdfs_774684.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
}

.text-card {
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #1196ee;
  text-align: center;
}

.card-document:hover .open-document {
  visibility: visible;
  height: 100%;
  transition: all 0.2s ease-in;
}

.open-document {
  width: 100%;
  height: 0;
  visibility: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgb(191, 231, 255);
  text-align: center;
  padding: 3%;
  color: #ffff;
  overflow: hidden;
  transition: all 0.2s ease-in;
  text-transform: uppercase;
}

.publised {
  font-size: 0.8em;
  color: rgb(96, 97, 97);
}

.name-document {
  text-align: center;
  width: 250px;
  margin: 0 auto;
}

.btn-warper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
}

.btn-preview {
  border: 0;
  border-radius: 1rem;
  padding: 12px 50px;
  border-radius: 1.5rem;
  background: #fff;
  color: #007bff;
  border: 0;
  font-size: 1em;
  text-transform: uppercase;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.btn-download {
  border: 0;
  border-radius: 1rem;
  padding: 12px 0;
  border-radius: 1.5rem;
  background: #fff;
  color: #007bff;
  border: 0;
  font-size: 1em;
  text-transform: uppercase;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.btn-preview:hover {
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  opacity: 0.85;
  transition: opacity 0.15s ease-in;
}
.btn-download:hover {
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  opacity: 0.85;
  transition: opacity 0.15s ease-in;
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
