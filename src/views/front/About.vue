<template>
  <div class="wrap">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">關於</h4>
        <hr>
        <div class="row">
          <div class="col">
            <h5>
              <i class="far fa-calendar-alt"></i>
              <span>服務時段</span>
            </h5>
            <h6>
              周一至周五<br/>
              早上9:30-晚上5:30
            </h6>
          </div>
        </div>
        <div class="card-text">
          <p>
            全台皆有配合的流浪貓狗園區<span>［物資皆由缺糧嚴重程度依序配送］</span><br/>
            近日因全球病情肆虐情勢嚴峻，募糧的數量也大幅減少。<br/>
            希望可以藉由此平台，讓有心人能協助到更多流浪貓狗，<br/>
            讓園區的愛爸愛媽們能減少一些負擔。<br/>
            一同認養貓狗每一餐，讓牠們免於安樂死，免於流浪在街頭。
          </p>
        </div>
      </div>
    </div>
    <div class="iframe">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item"
          src="https://www.youtube.com/embed/l9itdKFvMz4?rel=0&autoplay=1&loop=1&playlist=l9itdKFvMz4"
          allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
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
.card {
  margin: 80px 15px 30px 15px;
  .card-body {
    padding: 15px 30px 15px 30px;
    color: #333;
    letter-spacing: 1px;
  }
  h4 {
    text-align: center;
    font-weight: bold;
  }
  span {
    padding-left: 10px;
  }
  h6 {
    line-height: 1.75;
    margin-left: 30px;
  }
  .card-text {
    margin-top: 30px;
    p {
      line-height: 2.5;
    }
    span {
      color: red;
    }
  }
}
.iframe {
  margin: 50px 15px 80px 15px;
}
</style>
