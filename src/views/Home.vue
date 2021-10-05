<template>
  <main>
    <project-element
      :title="project.title"
      :description="project.description"
      v-for="project in projects"
      :key="project.title"
    />
  </main>
</template>

<script>
import ProjectElement from "@/components/ProjectElement.vue";

export default {
  name: "Home",
  components: {
    ProjectElement,
  },
  data: function () {
    return {
      projects: [
        {
          title: "Nowy design projektu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra ante at libero bibendum lobortis. Ut ultrices neque sit amet odio vulputate, in vulputate mi lobortis.",
        },
        {
          title: "Montaz filmu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra ante at libero bibendum lobortis. Ut ultrices neque sit amet odio vulputate, in vulputate mi lobortis.",
        },
      ],
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

<style lang="scss" scoped>
@import "@/styles/_breakpoints.scss";
@import "@/styles/_mixins.scss";

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;

  @include lg {
    max-width: $screen-xl-min;
  }
}
</style>
