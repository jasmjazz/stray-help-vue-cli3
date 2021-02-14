<template>
  <div>
    <nav class="col-md-2 d-none d-md-block sidebar">
      <div class="sidebar-sticky">
        <h5 class="d-flex justify-content-between
          align-items-center px-3 mt-2 mb-3 text-muted">
          <span>Admin</span>
        </h5>
        <li class="nav-item">
          <router-link class="nav-link" to='/admin/feed' active-class="active">
            <i class="fas fa-box-open"></i>
            糧食列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to='/admin/orders' active-class="active">
            <i class="far fa-list-alt"></i>
            訂單列表
          </router-link>
        </li>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
}
</style>
