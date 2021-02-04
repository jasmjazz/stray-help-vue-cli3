<template>
  <div>
    <Nav />
    <div class="container">
      <img src="../assets/image/picture04.png" class="img-fluid" alt="流浪貓狗助糧平台">
      <div class="text-box">
        <h1>流浪貓狗助糧平台</h1>
      </div>
    </div>
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
img {
  width: 100%;
  height: 55vh;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 5px;
  opacity: 0.9;
}
.text-box {
  position: absolute;
  margin: 0;
  top: 38%;
  left: 46%;
  transform: translate(-38%, -46%);
  width: calc(100% - 70%);
  height: calc(100% - 80%);
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 10px;
  h1 {
    position: absolute;
    margin: 0;
    top: 35%;
    left: 15%;
    color: #ffffff;
  }
}
</style>
