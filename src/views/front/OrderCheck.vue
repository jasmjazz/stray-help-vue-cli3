<template>
  <div>
    <div class="wrap">
      <loading :active.sync="isLoading" loader="dots"></loading>
      <div class="order-banner">
        <img src="../../assets/image/picture05.png" class="img-fluid" alt="流浪貓狗助糧平台">
        <div class="text-box">
          <h1>助糧流程</h1>
        </div>
      </div>
      <div class="row sop">
        <div class="col-md-4 col-sm-12">
          <div class="alert alert-primary" role="alert">
            1. 糧食明細
            <i class="fas fa-check-circle"></i>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="alert alert-primary" role="alert">
            2. 填寫資料
            <i class="fas fa-check-circle"></i>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div v-if="!order.is_paid" class="alert alert-success" role="alert">
            3. 完成捐糧
          </div>
          <div v-else class="alert alert-primary" role="alert">
            3. 完成捐糧
            <i class="fas fa-check-circle"></i>
          </div>
        </div>
      </div>
      <!--Data-->
      <div class="row data">
        <div class="col-lg-7 col-sm-12">
          <div class="card border-1">
            <div class="card-header bg-dark">
              <h5>明細</h5>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <th width="30%">品名</th>
                  <th width="35%">數量</th>
                  <th width="20%">單價</th>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td class="align-middle">{{ item.product.title }}</td>
                    <td class="align-middle" style="padding-left: 20px">
                      {{ item.qty }}
                    </td>
                    <td class="align-middle text-right">
                      {{ Math.floor(item.final_total / item.qty)  | currency }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-right">總計</td>
                    <td class="text-right">{{ order.total | currency }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-sm-12">
          <h4 class="card">
            <div class="card-header bg-dark">
              <h5>捐助人</h5>
            </div>
            <div class="card-body">
              <table class="table">
                <tbody>
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th width="100">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <h6 v-if="!order.is_paid">
                        <span class="badge badge-danger">尚未付款</span>
                      </h6>
                      <h6 v-else>
                        <span class="badge badge-success">付款完成</span>
                      </h6>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-right" v-if="order.is_paid === false">
                <button type="button" class="btn btn-primary" @click="payOrder">
                  確認付款
                </button>
              </div>
            </div>
          </h4>
          <div class="text-right mt-4"  v-if="order.is_paid === true">
            <button type="button" class="btn btn-primary"
              @click="$router.push('/products')">回去逛逛</button>
          </div>
        </div>
      </div>
      <!--payModal-->
      <div class="modal fade" id="payModal" tabindex="-1"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" >
              <h5 class="modal-title">愛心助糧</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-3 d-flex align-items-center justify-content-center">
              <h6>
                <i class="fas fa-check-circle mr-2"></i>付款完成，謝謝你的愛心！
              </h6>
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
                付款尚未完成，離開將會清空所有記錄，確定離開？
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
  </div>
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      isLoading: false,
      orderId: '',
      order: {
        user: {},
      },
      nextPage: false,
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/order/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          vm.order = response.data.order;
        }
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/pay/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.nextPage = true;
          vm.isLoading = false;
          vm.getOrder();
          $('#payModal').modal('show');
        } else {
          vm.isLoading = false;
          vm.$bus.$emit('message: push', '付款失敗', 'danger');
        }
      });
    },
    removeCart() {
      const vm = this;
      vm.getCart();
      vm.carts.carts.forEach((item) => {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/cart/${item.id}`;
        vm.$http.delete(api).then((response) => {
          vm.$bus.$emit('message:push', response.data.message, 'success');
        });
      });
    },
  },
  beforeRouteLeave(to, from, next) {
    const vm = this;
    if (vm.order.is_paid) {
      vm.nextPage = true;
    }
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
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>

<style scoped lang="scss">
.modal-header {
  background-color: #616161;
  color: #ffffff;
}
.modal-body {
  p {
    margin-top: 15px;
    font-size: 18px;
  }
}
.btn-leave {
  opacity: 0.5;
}
tfoot {
  tr {
    font-weight: bold;
  }
}
</style>
