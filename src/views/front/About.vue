<template>
  <div>
    <div class="wrap">
      <div class="banner">
        <img src="../../assets/image/carousel01.png" class="img-fluid" alt="流浪貓狗助糧平台">
        <div class="text-box">
          <h1>關於我們</h1>
        </div>
      </div>
      <div class="row text">
        <div class="box">
          <h4>
            <i class="fas fa-paw" style="margin-right: 5px"></i>
            流浪貓狗助糧平台
          </h4>
          <p>
            全台皆有配合的流浪貓狗園區<span>［物資皆由缺糧嚴重程度依序配送］</span><br/>
            近日因全球病情肆虐情勢嚴峻，募糧的數量也大幅減少。<br/>
            希望可以藉由此平台，讓有心人能協助到更多流浪貓狗，<br/>
            讓園區的愛爸愛媽們能減少一些負擔。<br/>
            一同認養貓狗每一餐，讓牠們免於安樂死，免於流浪在街頭。
          </p>
        </div>
      </div>
      <div class="row content">
        <div class="col">
          <h5>
            <i class="far fa-calendar-alt"></i><br/>
            <span>服務時段</span>
          </h5>
          <p>
            周一至周五<br/>
            早上9:30-晚上5:30<br/>
            <i class="fas fa-phone" style="font-size: 15px"></i>0809-095-995
          </p>
        </div>
        <div class="col">
          <h5>
            <i class="far fa-list-alt"></i><br/>
            <span>助糧名單</span>
          </h5>
          <p>
            每月10號於 FB 公布<br/>
            請記得鎖定粉絲專頁<br/>
            感謝你的愛心
          </p>
        </div>
        <div class="col">
          <h5>
            <i class="fas fa-exclamation-triangle"></i><br/>
            <span>注意事項</span>
          </h5>
          <p>
            我們不會主動請你提供金融資料<br/>
            若你接到可疑電話<br/>
            請撥打165反詐騙專線求證
          </p>
        </div>
      </div>
      <div class="row image">
        <figure class="figure">
            <img src="../../assets/image/img03.gif"
            class="figure-img img-fluid rounded" alt="一起幫助浪浪">
          </figure>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
.text {
  margin: 100px 0 80px 0;
  text-align: center;
  h4 {
    margin-bottom: 30px;
    font-weight: 550;
    color: #616161;
  }
  p {
    font-size: 18px;
    line-height: 50px;
    letter-spacing: 1px;
  }
  span {
    color: red;
  }
}
.content {
  text-align: center;
  h5 {
    font-size: 24px;
    margin-bottom: 20px;
    letter-spacing: 2px;
    color: #616161;
    font-weight: 550;
  }
  i {
    font-size: 40px;
    margin: 0 5px 20px 0;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 2px;
  }
}
.image {
  margin: 80px 0 80px 0;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover; // 填滿容器
    object-position: 50% 50%;
  }
}
.banner {
  img {
  width: 100%;
  height: 45vh;
  object-fit: cover;
  object-position: 50% 75%;
  border-radius: 5px;
  opacity: 0.9;
  }
  .text-box {
    position: absolute;
    margin: 0;
    top: 30%;
    left: 46%;
    transform: translate(-38%, -46%);
    width: calc(100% - 70%);
    height: calc(100% - 80%);
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 10px;
    h1 {
      font-weight: bold;
      letter-spacing: 3px;
      font-size: 60px;
      color: #ffffff;
      line-height: 150px;
      text-align: center;
    }
  }
}
</style>
