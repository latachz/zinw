<template>
  <main>
    <form @submit.prevent="signup">
      <input type="email" placeholder="Email" v-model="email" />
      <input
        type="password"
        placeholder="Password"
        minlength="8"
        v-model="password"
      />
      <p
        class="error"
        v-show="this.$store.state.error"
        v-html="this.$store.state.error"
      />
      <Button type="submit" />
    </form>
  </main>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Signup",
  components: {
    Button,
  },
  data: function () {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    signup: function () {
      this.$store.commit("setError", null);

      // email validation
      if (/^[A-Za-z0-9._%+-]+@uczen.zsk.poznan.pl$/.test(this.email) != true) {
        this.$store.commit(
          "setError",
          "<strong>E-mail</strong>must belong to zsk domain."
        );
      }

      if (this.$store.state.error === null) {
        this.$store
          .dispatch("signupAction", {
            email: this.email,
            password: this.password,
          })
          .then(() => {
            if (this.$store.state.error === null) {
              this.$router.push("/");
            }
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_breakpoints.scss";
@import "@/styles/_mixins.scss";
@import "@/styles/_colors.scss";

main {
  width: 100%;
  height: calc(100vh - 82px);
  display: flex;
  justify-content: center;
  align-items: center;

  @include lg {
    max-width: $screen-xl-min;
  }
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  @include lg {
    width: 400px;
  }

  & input {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px 20px;
  }

  & * {
    margin: 10px;
  }

  & .error {
    background: #b20000;
    color: $white;
    padding: 10px 10px;
    border-radius: 8px;
  }
}
</style>
