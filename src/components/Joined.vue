<template>
  <div class="wrapper">
    <div class="element" v-for="user in users" :key="user.id">
      <img :src="user.avatarUrl" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Joined",
  props: {
    users: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/_colors.scss";
.wrapper {
  display: flex;
}
.element {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  object-position: -50% 0;
  margin-left: -10px;

  &:first-of-type {
    margin-left: 0;
  }
}
img {
  height: 30px;
  object-fit: cover;
  object-position: -15px 0;
}
</style>
