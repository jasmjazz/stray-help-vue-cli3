<template>
  <div>
    <div class="desk-cart">
      <div class="icon" @click="checkcart">
        <div v-if="sum > 0" class="num"><span>{{ sum }}</span></div>
        <i class="fas fa-shopping-cart cart"></i>
      </div>
    </div>
    <!--mobile-->
    <div class="mobile-cart">
      <div class="icon">
        <div v-if="sum > 0" class="num"><span>{{ sum }}</span></div>
        <i class="fas fa-shopping-cart cart"></i>
      </div>
    </div>
    <!--aside-->
    <div class="aside">
      <div class="list-group">
        <div class="list-group-item title">
          <div class="d-flex w-100 justify-content-between">
            <h5>購物車</h5>
            <i class="fas fa-times close-open"></i>
          </div>
        </div>
        <div v-if="cart.length === 0">
          <div class="d-flex w-100 justify-content-center">
            <h6 class="content">還沒有選購糧食哦</h6>
          </div>
        </div>
        <div v-else class="list-group-item" v-for="item in cart" :key="item.id">
          <div class="d-flex w-100 justify-content-between">
            <h6 class="category">
              <span v-if="item.category === 0" class="badge badge-primary">主食</span>
              <span v-else-if="item.category === 1" class="badge badge-primary">副食</span>
              <span v-else class="badge badge-primary">零食</span>
            </h6>
            <small>
              <a class="icon" href="#" @click.prevent="delCart(item.id)">
                <i class="fas fa-trash"></i>
              </a>
            </small>
          </div>
          <h5>{{ item.title }}</h5>
          <h6>
            {{ item.qty }} x NT{{ item.price | currency }}
          </h6>
        </div>
        <div class="d-flex w-100 justify-content-center">
          <router-link v-if="cart.length === 0" :to="{ name: 'Products' }"
            class="nav-link close-open">
            <button type="button" class="btn btn-primary">
              去逛逛
            </button>
          </router-link>
          <router-link v-else :to="{ name: 'CheckCart' }" class="nav-link close-open">
            <button type="button" class="btn btn-primary">
                付款去
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!--emptyModal-->
    <div v-if="cart.length === 0" class="modal fade desk-modal" id="cartModal" tabindex="-1"
    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">
              購物車
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <h5 style="font-weight: bold">還沒有選擇糧食哦！</h5>
          </div>
          <div class="modal-footer">
            <router-link class="nav-link" :to="{ name: 'Products' }">
              <button type="button" class="btn btn-primary" data-dismiss="modal">
                去逛逛
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!--cartModal-->
    <div v-else class="modal fade desk-modal" id="cartModal" tabindex="-1"
      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">
              購物車
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table cart-table" style="width: 100%">
              <thead>
                <th width="10%"></th>
                <th class="s-no" width="15%">種類</th>
                <th width="20%">品名</th>
                <th width="12%">價格</th>
                <th class="s-no" width="9%"></th>
                <th width="20%">數量</th>
                <th class="s-no" width="14%">小計</th>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.id">
                  <td class="align-middle">
                    <a class="icon" href="#" @click.prevent="delCart(item.id)">
                      <i class="fas fa-trash" style="font-size: 20px"></i>
                    </a>
                  </td>
                  <td v-if="item.category === 0" class="align-middle s-no">
                    <h5>
                      <span class="badge badge-primary">主食</span>
                    </h5>
                  </td>
                  <td v-else-if="item.category === 1" class="align-middle s-no">
                    <h5>
                      <span class="badge badge-primary">副食</span>
                    </h5>
                  </td>
                  <td v-else class="align-middle s-no">
                    <h5>
                      <span class="badge badge-primary">零食</span>
                    </h5>
                  </td>
                  <td class="align-middle">
                    {{ item.title }}
                  </td>
                  <td class="align-middle text-right">
                    {{ item.price | currency }}
                  </td>
                  <td class="s-no"></td>
                  <td class="align-middle" style="padding-left: 23px">
                    {{ item.qty }}
                  </td>
                  <td class="align-middle text-right s-no">
                    {{ item.total | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr style="font-weight: bold">
                  <td colspan="6" class="text-right s-no">總計</td>
                  <td class="text-right">{{ money | currency }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="modal-footer">
            <router-link class="nav-link" :to="{ name: 'CheckCart' }">
              <button type="button" class="btn btn-primary" data-dismiss="modal">
                付款去
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Cart',
  props: ['sum'],
  data() {
    return {
      cart: [],
      money: 0,
      length: 0,
    };
  },
  methods: {
    getCart() {
      const vm = this;
      vm.money = 0;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
      vm.length = vm.cart.length;
      this.$emit('update', this.length);
      if (vm.cart.length > 0) {
        vm.cart.forEach((item) => {
          vm.money += item.total;
        });
      }
    },
    checkcart() {
      const vm = this;
      vm.getCart();
      $('#cartModal').modal('show');
    },
    delCart(id) {
      const vm = this;
      vm.cart.forEach((item, index) => {
        if (item.id === id) {
          vm.cart.splice(index, 1);
        }
      });
      vm.$emit('sum', vm.length);
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.$bus.$emit('message: push', '已刪除糧食');
      vm.getCart();
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    $('.mobile-cart').click((e) => {
      e.preventDefault();
      $('body').toggleClass('open');
    });
    $('.close-open').click((e) => {
      e.preventDefault();
      $('body').removeClass('open');
    });
  },
};
</script>

<style scoped lang="scss">

</style>
