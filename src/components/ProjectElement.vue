<template>
  <section>
    <div class="text-wrapper">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <div class="bottom-wrapper">
      <Joined :users="users" />
      <Button label="Join" @click="click" />
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
  methods: {
    click: function () {
      console.log("click");
    },
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
  flex-direction: column;
  margin: 20px 20px;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  text-align: left;

  h1 {
    line-height: 0;
  }

  & * {
    margin: 10px 0;
  }
}

.bottom-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
</style>
