<template>
  <div class="jumbotron">
      <div class="jumbotron jumbotron-fluid" style="background-repeat:no-repeat">
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {};
  },
};
</script>

<style scoped>
  .jumbotron{
    background-image: linear-gradient(rgba(0, 0, 0, 0.272),rgba(0, 0, 0, 0.518)),url("../../../img/banner.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    height: 85vh;
    margin: 0;
    border-radius: 0;
  }
</style>
