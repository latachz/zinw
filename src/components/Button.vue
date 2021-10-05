<template>
  <button @click="handleClick" v-bind="$attrs">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: { type: String, default: "Click" },
    handleClick: Function,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/_colors.scss";
button {
  padding: 10px 30px;
  background: $primary;
  color: $white;
  border: none;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
}
</style>
