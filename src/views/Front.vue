<template>
  <div>
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/front/Nav.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  name: 'Front',
  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped lang="scss">
</style>
