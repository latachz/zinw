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
      <Button type="submit" label="Login" />
    </form>
    <div class="right-wrapper">
      <img src="@/assets/logo.png" alt="zsktv socials" />
    </div>
  </main>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Login",
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
          .dispatch("loginAction", {
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
  height: 100vh;
  display: flex;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;

  @include lg {
    width: 30%;
  }

  & input {
    border: 1px solid $primary;
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

.right-wrapper {
  height: 100%;
  display: none;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: $primary;

  @include lg {
    display: flex;
  }

  & img {
    width: 300px;
  }
}
</style>
