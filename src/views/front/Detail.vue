<template>
  <div>
    <div class="wrap">
      <loading :active.sync="isLoading" loader="dots"></loading>
      <Alert />
      <div class="products-banner">
        <img src="../../assets/image/products.png" class="img-fluid" alt="流浪貓狗助糧平台">
        <div class="text-box">
          <h1>愛心糧食</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-11">
          <nav class="nav">
            <a class="nav-link" href="#">
              <router-link :to="{ name: 'Products' }">糧食列表</router-link>
            </a>
            <span>/</span>
            <p class="nav-link" href="#" style="font-weight: bolder">詳細</p>
          </nav>
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
      <div class="row detail-card">
        <div class="col-md-6 col-sm-12">
          <div class="picture">
            <img :src="product.imageUrl" class="figure-img img-fluid rounded" alt="糧食">
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="card border-0">
            <div class="card-body">
              <h5 class="category">
                <span v-if="product.category === 0" class="badge badge-primary">主食</span>
                <span v-else-if="product.category === 1" class="badge badge-primary">副食</span>
                <span v-else class="badge badge-primary">零食</span>
              </h5>
              <h3>{{ product.title }}</h3>
              <p>
                成分｜ {{ product.content }}
              </p>
              <p>
                {{ product.description }}
              </p>
              <h4 class="price float-right">
                NT {{ product.price | currency }} │
                <span v-if="product.unit === 0">包</span>
                <span v-else-if="product.unit === 1">罐</span>
                <span v-else>袋</span>
              </h4>
              <select class="form-control" v-model="num">
                <option :value="num" v-for="num in 10" :key="num">
                  {{ num }}
                </option>
              </select>
              <div></div>
              <div class="float-right">
                <button type="button" class="btn btn-primary"
                @click="addCart(product, num)">
                  <i v-if="loadingItem"
                  class="fas fa-spinner fa-spin">
                  </i>
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <p class="text">※同個糧食至多選10組哦</p>
        </div>
      </div>
      <div class="row info">
        <div class="col">
          <div class="title">
            <h4><span>—— </span>需要你的幫忙<span> ——</span></h4>
          </div>
          <p>
            「滴水之情，激起漣漪。」<br/>
            歲末寒冬之際，流浪貓狗園區依然為糧食奔波與追尋；
            請與我們一起愛護浪浪家園，
            部分園區因為距離問題，物資取得不容易，所以我們親自配送你的心意直達園區。
            眼下發生的事情還有很多，你的愛心是對牠們大大的幫助。
          </p>
        </div>
      </div>
      <h4 class="subtitle">同系列糧食</h4>
      <hr/>
      <div class="row same-card">
        <div class="card-group col-lg-4 col-md-6"
        v-for="item in getSame" :key="item.id">
          <div class="card border-0" @click.prevent="takeSame(item.id)">
            <div class="tab"><span>急需</span></div>
            <div style="height: 250px; background-size: cover"
            :style="{backgroundImage: `url(${item.imageUrl})`}">
            </div>
            <div class="card-body">
              <h6>
                <span v-if="item.category === 0" class="badge badge-primary">主食</span>
                <span v-else-if="item.category === 1" class="badge badge-primary">副食</span>
                <span v-else class="badge badge-primary">零食</span>
              </h6>
              <h5>
                <span class="title">{{ item.title }}</span>
                <span class="float-right">
                  NT {{ item.price | currency}}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/AlertMessage.vue';
import Cart from '@/components/front/Cart.vue';

export default {
  name: 'Detail',
  data() {
    return {
      isLoading: false,
      loadingItem: false,
      products: [],
      productId: '',
      product: [],
      num: 1,
      cart: [],
      sum: 0,
    };
  },
  components: {
    Alert,
    Cart,
  },
  methods: {
    updateSum(length) {
      this.sum = length;
    },
    getAllProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/products/all`;
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products.filter(item => item.is_enabled === 1);
      });
    },
    getProduct() {
      const vm = this;
      vm.productId = vm.$route.params.id;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/product/${vm.productId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.isLoading = false;
      });
    },
    getCart() {
      const vm = this;
      vm.sum = vm.cart.length;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    addCart(product, qty) {
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
      // 判斷品項是否重複加入
      if (cartIndex === -1) { // NO
        const total = parseInt((product.price * qty), 10);
        vm.$set(product, 'qty', qty);
        vm.$set(product, 'total', total);
        vm.cart.push(product); // 將此品項加入購物車
        vm.$bus.$emit('message: push', '已加入購物車');
      } else { // Yes
        // 使用cartIndex找到此品項在購物車中的位置，並將data放入tempProduct
        const tempProduct = { ...vm.cart[cartIndex] };
        if (tempProduct.qty + qty > 10) {
          vm.$bus.$emit('message: push', '同個糧食不得超過10組哦', 'danger');
        } else {
          tempProduct.qty += qty;
          vm.$bus.$emit('message: push', '已加入購物車');
        }
        tempProduct.total = parseInt((product.price * tempProduct.qty), 10);
        // 使用cartIndex找到此品項在購物車中的位置並刪除
        vm.cart.splice(cartIndex, 1);
        vm.cart.push(tempProduct); // 由tempProduct建立new data
      }
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.getCart();
    },
    takeSame(id) {
      this.$router.push(`/detail/${id}`);
      this.getProduct(); // 轉換至對應商品的路徑並接住商品id，從api取得該商品資料，呈現於畫面上
    },
  },
  computed: {
    getSame() {
      const vm = this;
      return vm.products.filter(item => (item.id !== vm.productId)
        && (item.category === vm.product.category));
    },
  },
  created() {
    this.getAllProducts();
    this.getProduct();
    this.getCart();
  },
};
</script>

<style scoped lang="scss">
.nav {
  margin: 60px 0 30px 0;
  font-size: 16px;
  color: #616161;
  span {
    padding-top: 7px;
    cursor: default;
  }
  p {
    cursor: default;
  }
}
h3 {
  font-weight: bold;
}
</style>
