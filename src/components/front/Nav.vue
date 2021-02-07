<template>
  <div>
    <div class="wrap">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }">流浪貓狗助糧平台</router-link>
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
  font-size: 16px;
}
</style>
