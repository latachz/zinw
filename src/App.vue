<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Barcode />
  </div>
</template>

<script>
import Barcode from "./components/Barcode.vue";

export default {
  name: "App",
  components: {
    Barcode,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
