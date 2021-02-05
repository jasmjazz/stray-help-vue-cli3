<template>
  <div>
    <div class="wrap">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link :to="{ name: 'Home' }">流浪貓狗助糧平台</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link :to="{ name: 'About' }">關於</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link :to="{ name: 'Products' }">愛心糧食</router-link>
          </a>
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
</style>
