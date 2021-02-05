<template>
  <div class="wrap">
    <loading :active.sync="isLoading" loader="dots"></loading>
    <Alert />
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
        <button type="button" class="btn btn-primary" style="margin-right: 15px; opacity: 0.6"
        @click.prevent="$router.push('/products')">
          再逛逛
        </button>
        <button type="button" class="btn btn-primary" @click="nextStep">
          確定捐糧
        </button>
      </div>
      <div v-else class="col text-right">
        <router-link :to="{ name: 'Products' }">
          <button class="btn btn-primary">
            去逛逛
          </button>
        </router-link>
      </div>
    </div>
    <!--Modal-->
    <div class="modal" id="leaveModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">愛心助糧</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><i class="fas fa-exclamation-circle"></i>
            尚未完成助糧流程，請確認是否要離開此頁？
          </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-stay" data-dismiss="modal">否</button>
            <button type="button" class="btn btn-primary btn-leave" style="opacity: 0.6">是</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Alert from '@/components/AlertMessage.vue';

export default {
  name: 'CheckCart',
  data() {
    return {
      isLoading: false,
      cart: [],
      money: 0,
      continue: false,
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
    nextStep() {
      this.continue = true;
      this.addCart();
      this.$router.push('/userinfo');
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.continue) {
      next();
    } else {
      $('#leaveModal').modal('show');
      $('.btn-stay').on('click', () => {
        next(false);
      });
      $('.btn-leave').on('click', () => {
        next();
      });
    }
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
.sop {
  margin: 80px 0 30px 0;
}
.pay {
  margin-bottom: 80px;
}
.modal-header {
  background-color: #bdbdbd;
  h5 {
    font-weight: bold;
  }
}
</style>
