<template>
  <div>
    <div class="carousel-box">
      <div id="home-carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../assets/image/carousel01.jpg" class="d-block w-100"
            alt="Stray-Help">
            <div class="text-box">
              <div class="carousel-caption d-md-block carousel-first">
                <h1>Stray-Help</h1><br/>
                <p>對你來說<br/>
                牠只是你人生的一部分，</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../../assets/image/carousel02.jpg" class="d-block w-100"
            alt="Stray-Help">
            <div class="text-box second">
              <div class="carousel-caption d-md-block carousel-second">
                <h1>Stray-Help</h1><br/>
                <p>對牠來說<br/>
                你卻是牠的全世界。</p>
              </div>
            </div>
          </div>
          <router-link :to="{ name: 'Products' }">
            <button type="button" class="btn btn-dark">
              <i class="fas fa-chevron-right"></i>
              伸出援手
            </button>
          </router-link>
          <ol class="carousel-indicators">
            <li data-target="#home-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#home-carousel" data-slide-to="1"></li>
          </ol>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="row slogan-one">
        <div class="col-lg-5 col-md-12">
          <div class="heart"></div>
        </div>
        <div class="col-lg-7 col-md-12">
          <h4>「集食，給予最實質的幫助。」</h4>
          <hr/>
        </div>
      </div>
      <div class="content">
        <div class="row up">
          <div class="col-lg-5 col-md-12">
            <figure class="figure">
              <img src="../../assets/image/img09.jpg"
              class="figure-img img-fluid rounded" alt="狗">
            </figure>
          </div>
          <div class="col-lg-7 col-md-12">
            <p>全台有許多流浪貓狗園區面臨缺糧的問題。
              愛爸和愛媽給了流浪貓狗一個家，
              除了讓牠們免於受苦、受餓，
              也大幅減少了社會環境的問題，
              隨著收容的數量急遽上升，
              能力有限的愛爸愛媽需要你我的幫助。
            </p>
            <p>
              由於疫情的關係，目前非常缺糧。
              請援助我們度過難關，至少讓流浪貓狗們吃飽，
              讓牠們有更多時間等待下一個家。
              讓我們集合每一個人的力量，溫飽流浪貓狗們的每一餐，讓牠們不再挨餓。
            </p>
          </div>
        </div>
        <div class="row slogan-two">
          <div class="col-12">
            <h4>—— 「一份糧食，一份希望。」</h4>
          </div>
        </div>
        <div class="row down">
          <div class="col-lg-6 col-md-12">
            <p>支持零安樂的情況下，我們似乎還有事情沒有做完，
              邀請你和我們一起關懷流浪貓狗們，用最基本的食物，照顧牠們的生活。
            </p>
            <p>讓愛不流浪，一起永續流浪貓狗們的生命。<br/>
              收留只是一個過程，希望有一天能夠找到屬於「自己」的家。</p>
          </div>
          <div class="col-lg-6 col-md-12">
            <figure class="figure">
              <img src="../../assets/image/img06.jpg"
              class="figure-img img-fluid rounded" alt="貓">
            </figure>
          </div>
        </div>
      </div>
      <div class="box slogan-three">
        <h4>—— 「能救一隻，就是多一隻。」</h4>
      </div>
      <div class="picture">
        <figure class="figure">
          <img src="../../assets/image/img03.png"
          class="figure-img img-fluid rounded" alt="help">
        </figure>
        <router-link :to="{ name: 'Products' }">
          <button type="button" class="btn btn-dark">
            <i class="fas fa-chevron-right"></i>
            立即愛心捐糧
          </button>
        </router-link>
      </div>
      <div class="question">
        <h3>Q & A</h3>
        <div class="box">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne" data-toggle="collapse"
              data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
              @click="toggle(1)">
                <p class="mb-0">
                  捐助的糧食多久會送達園區呢？
                  <span v-if="type === 1">
                    <i v-if="isOpen" class="fas fa-sort-down"></i>
                    <i v-else class="fas fa-sort-up"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"></i>
                  </span>
                </p>
              </div>
              <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
              data-parent="#accordionExample">
                <div class="card-body">
                  平台約7-15個工作天內配送完成，
                  可加入 LINE@ 或來電詢問進度。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo" data-toggle="collapse"
              data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
              @click="toggle(2)">
                <p class="mb-0">
                  愛心糧食會捐助到哪裡呢？
                  <span v-if="type === 2">
                    <i v-if="isOpen" class="fas fa-sort-down"></i>
                    <i v-else class="fas fa-sort-up"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"></i>
                  </span>
                </p>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
              data-parent="#accordionExample">
                <div class="card-body">
                  全台皆有配合的園區，依缺糧情況優先配送。<br/>
                  非常感謝您與我們一同照顧流浪貓狗。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree" data-toggle="collapse"
              data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              @click="toggle(3)">
                <p class="mb-0">
                  如何證明園區有收到物資呢？
                  <span v-if="type === 3">
                    <i v-if="isOpen" class="fas fa-sort-down"></i>
                    <i v-else class="fas fa-sort-up"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"></i>
                  </span>
                </p>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
              data-parent="#accordionExample">
                <div class="card-body">
                  園區收到物資後會親自簽收，可加入 LINE@ 索取園區簽收單。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFour" data-toggle="collapse"
              data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"
              @click="toggle(4)">
                <p class="mb-0">
                  能夠自行準備物資捐助流浪園區嗎？
                  <span v-if="type === 4">
                    <i v-if="isOpen" class="fas fa-sort-down"></i>
                    <i v-else class="fas fa-sort-up"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"></i>
                  </span>
                </p>
              </div>
              <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
              data-parent="#accordionExample">
                <div class="card-body">
                  可以的，非常歡迎！<br/>
                  加入 Line@ 並把要捐助的物資商品及數量告知我們，以利我們媒合急需園區。
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFive" data-toggle="collapse"
              data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"
              @click="toggle(5)">
                <p class="mb-0">
                  請問可以認養貓狗嗎？
                  <span v-if="type === 5">
                    <i v-if="isOpen" class="fas fa-sort-down"></i>
                    <i v-else class="fas fa-sort-up"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"></i>
                  </span>
                </p>
              </div>
              <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
              data-parent="#accordionExample">
                <div class="card-body">
                  請至<span style="color: red">「全國動物收容系統」</span>認養，
                  上面有各園區的最新資訊。<br/>
                  「以認養代替購買，愛牠就不要拋棄牠！」
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="arrow"><i class="fas fa-angle-double-up"></i></div>
  </div>
</template>


<script>
/* global $ */


export default {
  name: 'Home',
  data() {
    return {
      type: 0,
      show: true,
      isOpen: true,
    };
  },
  methods: {
    toggle(num) {
      this.type = num;
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    $('.carousel').carousel({
      interval: 4000,
    });
    $('.arrow i').click(() => {
      $('html, body').animate({
        scrollTop: 0,
      }, 1000);
    });
  },
};
</script>

<style scoped lang="scss">
.fa-sort-down {
  vertical-align: text-top;
}
.fa-sort-up {
  padding-top: 8px;
}
</style>
