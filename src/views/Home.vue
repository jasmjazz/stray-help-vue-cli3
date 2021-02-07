<template>
  <div>
    <Nav />
    <div class="container">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/image/carousel01.png" class="d-block w-100" alt="流浪貓狗助糧平台">
            <div class="text-box">
              <div class="carousel-caption d-md-block carousel-first">
                <h1>流浪貓狗助糧平台</h1>
                <p>對你來說<br/>
                牠只是你人生的一部分</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/image/carousel02.png" class="d-block w-100" alt="流浪貓狗助糧平台">
            <div class="text-box">
              <div class="carousel-caption d-md-block carousel-second">
                <h1>流浪貓狗助糧平台</h1>
                <p>對牠來說<br/>
                你卻是牠的全世界</p>
              </div>
            </div>
          </div>
          <router-link :to="{ name: 'Products' }">
            <button type="button" class="btn">
              <i class="fas fa-chevron-right"></i>
              伸出援手
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="row slogan-one">
        <div class="col-lg-3 col-md-12">
          <div class="heart"></div>
        </div>
        <div class="col-lg-9 col-md-12">
          <h4>「集食，給予最實質的幫助。」</h4>
          <hr/>
        </div>
      </div>
      <div class="content">
        <div class="row up">
          <div class="col-lg-5 col-md-12">
            <figure class="figure">
              <img src="../assets/image/picture09.png"
              class="figure-img img-fluid rounded" alt="流浪貓">
            </figure>
          </div>
          <div class="col-lg-7 col-md-12 text">
            <p>全省有許多流浪貓狗園區面臨缺糧的問題。
              愛爸和愛媽給了流浪貓狗一個家，
              除了讓牠們免於受苦、受餓，
              也大幅減少了社會環境的問題。
              隨著收容的數量急遽上升，
              能力有限的愛爸愛媽需要你我的幫助。
            </p>
            <p>
              因為<span style="color: red; font-weight: bold">疫情</span>關係，
              <span style="color: red; font-weight: bold">目前非常缺糧！</span><br/>
              請援助我們度過難關，
              至少讓牠們吃飽，讓牠們有更多時間等待下一個家。
            </p>
            <p>
              <span style="color: #616161; font-weight: bold">集食溫飽，捐糧不捐款。</span><br/>
              讓我們集合每一個人的力量，溫飽牠們的每一餐，讓牠們不再流浪。
            </p>
          </div>
        </div>
        <div class="row slogan-two">
          <div class="col-12">
            <h4>「一份糧食，一份希望，讓愛不流浪。」</h4>
            <hr/>
          </div>
        </div>
      </div>
      <div class="box" style="text-align: center">
        <figure class="figure">
          <img src="../assets/image/picture02.png"
          class="figure-img img-fluid rounded" alt="助糧流程">
        </figure>
      </div>
      <div class="question">
        <h3>Q & A 常見問題</h3>
        <div class="box">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne" data-toggle="collapse"
              data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
              @click="toggle(1)">
                <p class="mb-0">
                  捐助的糧食多久會送達園區呢？
                  <span v-if="type === 1">
                    <i v-if="isOpen" class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
                    <i v-else class="fas fa-sort-up"
                    style="padding-top: 8px"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
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
                    <i v-if="isOpen" class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
                    <i v-else class="fas fa-sort-up"
                    style="padding-top: 8px"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
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
                    <i v-if="isOpen" class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
                    <i v-else class="fas fa-sort-up"
                    style="padding-top: 8px"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
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
                    <i v-if="isOpen" class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
                    <i v-else class="fas fa-sort-up"
                    style="padding-top: 8px"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
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
                    <i v-if="isOpen" class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
                    <i v-else class="fas fa-sort-up"
                    style="padding-top: 8px"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-sort-down"
                    style="vertical-align: text-top"></i>
                  </span>
                </p>
              </div>
              <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
              data-parent="#accordionExample">
                <div class="card-body">
                  請至<span style="color: red; font-weight: bold">「全國動物收容系統」</span>認養，
                  上面有各園區的最新資訊。<br/>
                  「以認養代替購買，愛牠就不要拋棄牠！」
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row slogan-three">
        <div class="col-12">
          <h4>——— 「能救一隻，就是多一隻。」</h4>
        </div>
      </div>
      <div class="warm">
        <div class="box">
          <div class="card">
            <div class="card-body">
              <h5>
                <span style="color: #fbc02d">
                  <i class="fas fa-exclamation-triangle"></i>
                  165防詐騙宣導<br/>
                  提醒您提高警覺，疑似詐騙請撥打165求證</span><br/>
                <span style="color: #ffffff">
                  ※若需簽收單，請加入 LINE@ 或來電洽詢<br/>
                  ※若需報稅者，請與我們聯繫
                </span><br/>
                <router-link :to="{ name: 'Products' }">
                  <button type="button" class="btn" >
                    <span style="letter-spacing: 1px">
                      <i class="fas fa-chevron-right"></i> 立即愛心助糧
                    </span>
                  </button>
                </router-link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="picture">
        <figure class="figure">
          <img src="../assets/image/picture01.png"
          class="figure-img img-fluid rounded" alt="愛心助糧">
        </figure>
      </div>
    </div>
    <div class="arrow"><i class="fas fa-angle-double-up"></i></div>
    <Footer />
  </div>
</template>


<script>
// @ is an alias to /src
import $ from 'jquery';
import Nav from '@/components/front/Nav.vue';
import Footer from '@/components/front/Footer.vue';


export default {
  name: 'Home',
  data() {
    return {
      type: 0,
      show: true,
      isOpen: true,
    };
  },
  components: {
    Nav,
    Footer,
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

</style>
