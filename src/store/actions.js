import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const actions = {
  async signupAction({ commit }, payload) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((res) => {
        commit("setUserToken", res.user.uid);
        localStorage.setItem("userToken", res.user.uid);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          commit("setError", "User already signed up");
        } else {
          commit("setError", error.message);
        }
      });
  },
  async loginAction({ commit }, payload) {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((res) => {
        commit("setUserToken", res.user.uid);
        localStorage.setItem("userToken", res.user.uid);
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },
};

export default actions;
