<template>
  <div class="wrap">
    <loading :active.sync="isLoading" loader="dots"></loading>
    <div class="row sop">
      <div class="col-md-4 col-sm-12">
        <div class="alert alert-dark" role="alert">
          1. 糧食明細
          <i class="fas fa-check-circle"></i>
        </div>
      </div>
      <div class="col-md-4 col-sm-12" style="font-weight: bold">
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
                  <button type="button" class="btn btn-primary">填寫完成</button>
                </div>
              </form>
            </div>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserInfo',
  data() {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/order`;
      const order = vm.form;
      vm.isLoading = true;
      vm.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          vm.$router.push(`/ordercheck/${response.data.orderId}`);
          localStorage.removeItem('cart');
        } else {
          vm.isLoading = false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.sop {
  margin: 80px 0 30px 0;
}
.form {
  margin-bottom: 80px;
  .card {
    background-color: inherit;
  }
  .title {
    margin: 30px 0 30px 0;
    font-weight: bold;
  }
  i {
    margin-right: 5px;
  }
  label {
    font-size: 17px;
  }
  input {
    margin-bottom: 5px;
  }
}
</style>
