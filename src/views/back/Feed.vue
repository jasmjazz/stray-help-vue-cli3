<template>
  <div>
    <loading :active.sync="isLoading" loader="dots"></loading>
    <div class="text-right mt-4">
      <button type="button" class="btn btn-primary"
        @click="openModal(true)">建立糧食</button>
    </div>
    <!--table-->
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="6%"></th>
          <th width="8%">分類</th>
          <th width="14%">品名</th>
          <th width="42%">糧食描述</th>
          <th width="10%">價格</th>
          <th width="3%"></th>
          <th width="8%">啟用</th>
          <th width="10%"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>
            <a class="icon" href="#" @click.prevent="delModal(item)">
              <i class="fas fa-trash" style="font-size: 25px"></i>
            </a>
          <td>
            <h5>
              <span v-if="item.category === 0" class="badge badge-dark">
                主食
              </span>
              <span v-else-if="item.category === 1" class="badge badge-info">
                副食
              </span>
              <span v-else class="badge badge-warning">
                副食
              </span>
            </h5>
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td class="text-right" v-if="item.price">{{ item.price | currency }}</td>
          <td v-else></td>
          <td></td>
          <td>
            <h5 v-if="item.is_enabled"><span class="badge badge-success">是</span></h5>
            <h5 v-else><span class="badge badge-primary">否</span></h5>
          </td>
          <td>
            <a class="icon" @click.prevent="openModal(false, item)">
              <i class="far fa-edit" style="font-size: 25px"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @changePage="getProducts"></Pagination>
    <!--add/edit Modal-->
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-if="isNew">新增糧食</span>
              <span v-else>修改糧食</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="row" @submit.prevent="updateProduct">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label for="customFile">請上傳圖片
                    <i class="fas fa-spinner fa-pulse"
                      v-if="status.fileUploading"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadFile">
                </div>
                <img :src="tempProduct.imageUrl" class="img-fluid">
              </div>

              <div class="col-sm-8 mb-5">
                <div class="form-group">
                  <label for="title">品名</label>
                  <input type="text" class="form-control" id="title"
                    v-model="tempProduct.title"
                    placeholder="請輸入糧食名稱">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <select class="form-control" v-model="tempProduct.category"
                      @change="select">
                      <option :value= 0>主食</option>
                      <option :value= 1>副食</option>
                      <option :value= 2>零食</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="price">價格</label>
                    <input type="number" class="form-control" id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入糧食價格">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="unit">單位</label>
                    <select class="form-control" v-model="tempProduct.unit" disabled>
                      <option :value= 0 >包</option>
                      <option :value= 1>罐</option>
                      <option :value= 2>袋</option>
                    </select>
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="description">描述</label>
                  <textarea type="text" class="form-control" id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入糧食描述">
                  </textarea>
                </div>
                <div class="form-group">
                  <label for="content">成分</label>
                  <textarea type="text" class="form-control" id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入糧食成分">
                  </textarea>
                </div>

                <div class="form-group" style="margin-top: 25px">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value='1'
                      :false-value='0'
                      id="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-button">
                <button type="button" class="btn btn-primary"
                style="opacity: 0.5; margin-right: 10px"
                  data-dismiss="modal">取消</button>
                <button type="submit" class="btn btn-primary">確認</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--delModal-->
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除糧食（刪除後將無法恢復）</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品？
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger"
              @click="deleteProduct"
            >確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Feed',
  data() {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    select() {
      const vm = this;
      switch (vm.tempProduct.category) {
        case 0:
          vm.tempProduct.unit = 0;
          break;
        case 1:
          vm.tempProduct.unit = 1;
          break;
        default:
          vm.tempProduct.unit = 2;
          break;
      }
    },
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/products?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.$set(this.tempProduct, 'category', 0);
        this.$set(this.tempProduct, 'unit', 0);
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      $('#updateModal').modal('show');
    },
    uploadFile() {
      const vm = this;
      const uploadedFile = vm.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/upload`;
      vm.status.fileUploading = true;
      vm.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        if (response.data.success) {
          vm.status.fileUploading = false;
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
        } else {
          vm.status.fileUploading = false;
          vm.$bus.$emit('message: push', response.data.message, 'danger');
          vm.$refs.files.value = '';
        }
      });
    },
    updateProduct() {
      const vm = this;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/product`;
      let httpMethod = 'post';
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/product/${vm.tempProduct.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        if (response.data.success) {
          $('#updateModal').modal('hide');
          vm.$bus.$emit('message: push', response.data.message);
          vm.getProducts();
          vm.isLoading = false;
        } else {
          $('#updateModal').modal('hide');
          vm.$bus.$emit('message: push', response.data.message, 'danger');
          vm.getProducts();
          vm.isLoading = false;
        }
      });
    },
    delModal(item) {
      this.tempProduct = { ...item };
      $('#deleteModal').modal('show');
    },
    deleteProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/product/${vm.tempProduct.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#deleteModal').modal('hide');
          vm.getProducts();
        } else {
          $('#deleteModal').modal('hide');
          vm.getProducts();
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.form-control:focus {
  border-color: #aeaeae;
  box-shadow: 0 0 0 0.2rem rgba(238, 216, 216, 0.25);
}
.form-button {
  position: absolute;
  right: 15px;
  bottom: 15px;
}
</style>
