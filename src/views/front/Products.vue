<template>
  <div>
    <div class="wrap products">
      <loading :active.sync="isLoading" loader="dots"></loading>
      <div class="banner">
        <img src="../../assets/image/img15.png" class="img-fluid gray" alt="流浪貓狗助糧平台">
        <div class="text-box">
          <h1>愛心糧食</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-11">
          <ul class="nav nav-tabs">
            <li class="nav-item" @click.prevent="getCategory(3)">
              <a class="nav-link" href="#" :class="{ active: category === 3 }">全部</a>
            </li>
            <li class="nav-item" @click.prevent="getCategory(0)">
              <a class="nav-link" href="#" :class="{ active: category === 0 }">主食</a>
            </li>
            <li class="nav-item" @click.prevent="getCategory(1)">
              <a class="nav-link" href="#" :class="{ active: category === 1 }">副食</a>
            </li>
            <li class="nav-item" @click.prevent="getCategory(2)">
              <a class="nav-link" href="#" :class="{ active: category === 2 }">零食</a>
            </li>
          </ul>
        </div>
        <div class="col-1">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link">
                <Cart :sum = 'sum' @update="updateSum"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="products-card">
        <div class="col-11">
          <div class="row">
            <div class="card-group col-md-4"
            v-for="item in products" :key="item.id">
              <div class="card border-0"
              @click="$router.push(`/detail/${item.id}`)">
                <div class="tab"><span>急需</span></div>
                <div style="height: 240px; background-size: cover"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
                </div>
                <div class="card-body">
                  <h6>
                    <span v-if="item.category === 0" class="badge badge-primary">主食</span>
                    <span v-else-if="item.category === 1" class="badge badge-primary">副食</span>
                    <span v-else class="badge badge-primary">零食</span>
                  </h6>
                  <h5>
                    <span style="font-weight: bold">{{ item.title }}</span>
                    <span class="float-right">
                      NT {{ item.price | currency}}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/front/Cart.vue';

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      category: 3,
      itemProducts: [],
      sum: 0,
    };
  },
  components: {
    Cart,
  },
  methods: {
    updateSum(length) {
      this.sum = length;
    },
    getProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/products/all`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products.filter(item => item.is_enabled === 1);
        vm.itemProducts = response.data.products.filter(item => item.is_enabled === 1);
        vm.isLoading = false;
      });
    },
    getCategory(num) {
      const vm = this;
      if (num === 3) {
        vm.products = vm.itemProducts;
      } else {
        vm.products = vm.itemProducts.filter(item => item.category === num);
      }
      vm.category = num;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped lang="scss">
.nav {
  margin: 80px 0 35px 0;
}
.products-card {
  margin-bottom: 100px;
  .card {
    margin-bottom: 35px;
    cursor: pointer;
  }
  .tab {
    padding: 3px 15px;
    background-color: red;
    position: absolute;
    top: -5px;
    left: -5px;
    border-radius: 5px;
    span {
      color: #ffffff;
      letter-spacing: 2px;
      font-weight: bold;
    }
  }
  .card:hover {
    cursor: pointer;
    box-shadow: 6px 6px 6px #757575;
  }
}
</style>
