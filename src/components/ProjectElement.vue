<template>
  <section>
    <div class="text-wrapper">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <Joined :users="users"/>
    </div>
    <div class="right-wrapper">
      <Button label="Join" :handleClick="click" />
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";
import Joined from "./Joined.vue";

export default {
  components: { Button, Joined },
  name: "ProjectElement",
  props: {
    title: String,
    description: String,
  },
    data: function () {
    return {
      users: [
        {
          id: 1,
          avatarUrl:
            "https://s.redefine.pl/dcs/o2/redefine/cp/br/briep4rtyvwhwbuof62o5urbw58cpovy.jpg",
        },
        {
          id: 2,
          avatarUrl:
            "https://s.redefine.pl/dcs/o2/redefine/cp/br/briep4rtyvwhwbuof62o5urbw58cpovy.jpg",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  display: flex;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.right-wrapper {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
