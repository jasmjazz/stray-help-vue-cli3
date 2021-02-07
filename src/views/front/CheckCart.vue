<template>
  <div class="check-cart">
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
          <div class="alert alert-success" role="alert">
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
        <div class="card-body list">
          <h4 v-if="cart.length === 0">還沒有選擇糧食哦！</h4>
          <ul v-else>
            <li v-for="item in cart" :key="item.id">
              <div class="row">
                <div class="col-2 p-0">
                  <a class="icon" href="#" @click.prevent="delCart(item.id)">
                    <i class="fas fa-trash trash"></i>
                  </a>
                </div>
                <div class="col-7 p-0">
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <p>{{ item.title }}</p>
                    </div>
                    <div class="col-12 col-md-6">
                      <i class="far fa-minus-square"
                      @click="editNum(item, -1)">
                      </i>
                      <span>
                        {{ item.qty }}
                      </span>
                      <i class="far fa-plus-square"
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
            <p v-if="cart.length > 0" class="total">
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
          <router-link :to="{ name: 'UserInfo' }">
            <button type="button" class="btn btn-primary">
              確定
            </button>
          </router-link>
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
  },
  created() {
    this.getCart();
  },
};
</script>
<style scoped lang="scss">
.fa-minus-square {
  font-size: 20px;
  vertical-align: text-bottom;
}
.fa-plus-square {
  font-size: 20px;
  vertical-align: text-bottom;
}
.list {
  h4 {
    line-height: 150px;
    text-align: center;
  }
  p{
    font-size: 16px;
  }
  span {
    font-size: 18px;
    margin-left: 15px;
    margin-right: 15px;
  }
}
.fa-trash {
  font-size: 18px;
}
</style>
