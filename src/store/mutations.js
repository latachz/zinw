const mutations = {
  setUserToken(state, payload) {
    state.userToken = payload;
  },

  setError(state, payload) {
    state.error = payload;
  },
};

export default mutations;
