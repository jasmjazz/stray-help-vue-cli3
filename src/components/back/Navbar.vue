<template>
  <div>
    <nav class="navbar navbar-dark bg-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="col-sm-3 col-md-2 mr-0" href="#" style="color: #ffffff">Stray-Help</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    };
  },
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      const vm = this;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
