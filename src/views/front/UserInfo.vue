<template>
  <div class="user-info">
    <div class="wrap">
      <loading :active.sync="isLoading" loader="dots"></loading>
      <div class="banner">
        <img src="../../assets/image/picture04.png" class="img-fluid" alt="流浪貓狗助糧平台">
        <div class="text-box">
          <h1>助糧流程</h1>
        </div>
      </div>
      <div class="row sop">
        <div class="col-md-4 col-sm-12">
          <div class="alert alert-dark" role="alert">
            1. 糧食明細
            <i class="fas fa-check-circle"></i>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="alert alert-success" role="alert">
            2. 填寫資料
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="alert alert-dark" role="alert">
            3. 完成捐糧
          </div>
        </div>
      </div>
      <!--Form-->
      <div class="form">
        <div class="col">
          <div class="card">
            <div class="row justify-content-center">
              <h4 class="title">
                <i class="fas fa-paw"></i>
                捐助人資訊
              </h4>
            </div>
            <div class="card-body">
              <!--表單-->
              <ValidationObserver v-slot="{ handleSubmit }">
              <div class="my-2 row justify-content-center">
                <form class="col-md-6" @submit.prevent="handleSubmit(createOrder)">
                  <div class="form-group">
                    <label for="username">捐助人姓名 *</label>
                    <ValidationProvider rules="required" v-slot="{ errors , classes }">
                      <div :class="classes">
                        <input type="text" id="buyer-name" class="form-control"
                          placeholder="請輸入姓名" v-model="form.user.name">
                        <span class="text-danger">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="username">捐助人電話 *</label>
                    <ValidationProvider rules="required|phone" v-slot="{ errors , classes }">
                      <div :class="classes">
                        <input type="text" id="usertel" class="form-control"
                          placeholder="請輸入電話號碼" v-model="form.user.tel">
                        <span class="text-danger">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="useremail">Email *</label>
                      <ValidationProvider name="email" rules="required|email"
                        v-slot="{ errors , classes }">
                        <div :class="classes">
                          <input type="email" class="form-control" name="email"
                            id="useremail" placeholder="請輸入 Email" v-model="form.user.email">
                          <span class="text-danger">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="useraddress">
                      捐助人地址<span style="color: green">（如需園區簽收單，請務必填寫）</span>
                    </label>
                    <input type="text" class="form-control" name="address" id="useraddress"
                      v-model="form.user.address" placeholder="請輸入地址">
                  </div>
                  <div class="form-group">
                    <label for="comment">想說的話</label>
                    <textarea name="" id="comment" class="form-control"
                      cols="30" rows="10" v-model="form.message"
                      placeholder="說說你的想法吧"></textarea>
                  </div>
                  <div class="text-right">
                    <button type="submit" class="btn btn-primary">填寫完成</button>
                  </div>
                </form>
              </div>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--leaveModal-->
    <div class="modal fade" id="leaveModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-light" id="exampleModalLabel">愛心助糧</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              <i class="fas fa-exclamation-circle"></i>
              助糧流程尚未完成，確定離開此頁？
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-stay" data-dismiss="modal">
              否
            </button>
            <button type="button" class="btn btn-primary btn-leave" data-dismiss="modal">
              是
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */

export default {
  name: 'UserInfo',
  data() {
    return {
      isLoading: false,
      carts: [],
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      nextPage: false,
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      vm.addCart();
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/order`;
      const order = vm.form;
      vm.isLoading = true;
      vm.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          vm.nextPage = true;
          vm.carts = response.data.data;
          vm.$router.push(`/ordercheck/${response.data.orderId}`);
          localStorage.removeItem('cart');
        } else {
          vm.isLoading = false;
        }
      });
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
  beforeRouteLeave(to, from, next) {
    const vm = this;
    if (vm.nextPage) {
      next();
    } else {
      $('#leaveModal').modal('show');
      $('.btn-stay').on('click', () => {
        next(false);
      });
      $('.btn-leave').on('click', () => {
        next();
        // vm.removeCart();
      });
    }
  },
};
</script>

<style scoped lang="scss">
.modal-header {
  background-color: #616161;
}
.btn-leave {
  opacity: 0.5;
}
</style>
