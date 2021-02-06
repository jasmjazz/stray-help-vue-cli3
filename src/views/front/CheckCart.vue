<template>
  <div>
    <div class="wrap">
      <loading :active.sync="isLoading" loader="dots"></loading>
      <Alert />
      <div class="banner">
        <img src="../../assets/image/picture04.png" class="img-fluid" alt="流浪貓狗助糧平台">
        <div class="text-box">
          <h1>助糧流程</h1>
        </div>
      </div>
      <div class="row sop">
        <div class="col-md-4 col-sm-12">
          <div class="alert alert-success" role="alert" style="font-weight: bold">
            1. 糧食明細
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="alert alert-primary" role="alert">
            2. 填寫資料
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="alert alert-primary" role="alert">
            3. 完成捐糧
          </div>
        </div>
      </div>
      <!--content-->
      <div class="card border-1">
        <div class="card-body checkcart">
          <h4 v-if="cart.length === 0" class="text-center"
            style="padding: 50px">還沒有選擇糧食哦！</h4>
          <ul v-else>
            <li v-for="item in cart" :key="item.id">
              <div class="row">
                <div class="col-2 p-0">
                  <a class="icon" @click.prevent="delCart(item.id)">
                    <i class="fas fa-trash trash" style="font-size: 18px"></i>
                  </a>
                </div>
                <div class="col-7 p-0">
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <p>{{ item.title }}</p>
                    </div>
                    <div class="col-12 col-md-6">
                      <i class="far fa-minus-square"
                        style="font-size: 20px; vertical-align: text-bottom"
                        @click="editNum(item, -1)">
                      </i>
                      <span style="font-size: 18px; margin-left: 15px; margin-right: 15px">
                        {{ item.qty }}
                      </span>
                      <i class="far fa-plus-square"
                        style="font-size: 20px; vertical-align: text-bottom"
                        @click="editNum(item, +1)">
                      </i>
                    </div>
                  </div>
                </div>
                <div class="col-3 p-0 text-right">
                  <p style="padding-right: 15px">
                    NT {{ item.price | currency}}
                  </p>
                </div>
              </div>
              <hr/>
            </li>
            <p v-if="cart.length > 0" class="text-right" style="font-weight: bold; font-size: 18px">
              總計 NT {{ money | currency }}
            </p>
          </ul>
        </div>
      </div>
      <!--Button-->
      <div class="row pay">
        <div v-if="cart.length > 0" class="col text-right">
          <router-link :to="{ name: 'Products' }">
            <button type="button" class="btn btn-primary" style="margin-right: 15px; opacity: 0.6">
              再逛逛
            </button>
          </router-link>
          <button type="button" class="btn btn-primary" @click="addCart">
            確定捐糧
          </button>
        </div>
        <div v-else class="col text-right">
          <router-link :to="{ name: 'Products' }">
            <button class="btn btn-primary">
              <i class="fas fa-chevron-right"></i>
              去逛逛
            </button>
          </router-link>
        </div>
      </div>
      <div class="row message">
        <div class="col">
          <h6><i class="fas fa-exclamation-circle"></i>助糧須知</h6>
          <p>
            ● 請確認資料是否正確，下單後未提供修改服務<br/>
            ● 助糧完成後，7個工作天內送出愛心<br/>
            ● 目前僅提供信用卡付款方式<br/>
            ● 如需簽收單者，請務必填寫地址
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/AlertMessage.vue';

export default {
  name: 'CheckCart',
  data() {
    return {
      isLoading: false,
      cart: [],
      money: 0,
    };
  },
  components: {
    Alert,
  },
  methods: {
    getCart() {
      const vm = this;
      vm.money = 0;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (vm.cart.length > 0) {
        vm.cart.forEach((item) => {
          vm.money += item.total;
        });
      }
    },
    editNum(product, num) {
      const qty = parseInt((product.qty + num), 10);
      this.updateCart(product, qty);
    },
    updateCart(product, num) {
      const vm = this;
      let cartIndex = -1; // 因陣列索引由0開始，不可設置為0
      vm.getCart();
      if (vm.cart.length > 0) { // 購物車內有產品
        vm.cart.forEach((item, index) => {
          if (item.id === product.id) { // 品項已加入過
            cartIndex = index;
          }
        });
      }
      // 設定最多只可選10項
      if (num >= 10) {
        vm.cart[cartIndex].qty = 10;
        vm.$bus.$emit('message: push', '同款糧食不得超過10組！', 'danger');
      } else if (num <= 1) {
        vm.cart[cartIndex].qty = 1;
      } else {
        vm.cart[cartIndex].qty = num;
      }
      const total = parseInt((vm.cart[cartIndex].price * vm.cart[cartIndex].qty), 10);
      vm.cart[cartIndex].total = total;
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.getCart();
    },
    delCart(id) {
      const vm = this;
      vm.cart.forEach((item, index) => {
        if (item.id === id) {
          vm.cart.splice(index, 1);
        }
      });
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.getCart();
    },
    // 加入server購物車
    addCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/cart`;
      vm.isLoading = true;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
      vm.cart.forEach((item) => {
        const product = {
          product_id: item.id,
          qty: item.qty,
        };
        vm.$http.post(api, { data: product }).then((response) => {
          if (response.data.success) {
            vm.isLoading = false;
            vm.$router.push('/userinfo');
          }
        });
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
<style scoped lang="scss">
ul {
  list-style-type: none;
}
.pay {
  margin-bottom: 40px;
}
.modal-header {
  background-color: #bdbdbd;
  h5 {
    font-weight: bold;
  }
}
.modal-body {
  p {
    margin-top: 15px;
    font-size: 18px;
  }
}
.message {
  margin: 0 0 60px 5px;
  letter-spacing: 1px;
  h6 {
    font-size: 20px;
  }
  i {
    margin-right: 5px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    color: #333;
  }
}
.banner {
  img {
  width: 100%;
  height: 45vh;
  object-fit: cover;
  object-position: 50% 60%;
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
