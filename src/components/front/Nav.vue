<template>
  <div>
    <div class="wrap">
      <ul class="nav">
        <li class="nav-item home">
          <router-link class="nav-link" :to="{ name: 'Home' }" exact
          active-class="active">Strap-Help</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'About' }">關於我們</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Products' }">愛心糧食</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped lang="scss">
.nav-link {
  font-size: 17px;
  font-weight: 560;
  color: #8e8e8e;
}
.home {
  font-family: Papyrus;
}
.active {
  color: #333;
}
</style>
