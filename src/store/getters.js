const getters = {
  getUserToken(state) {
    return state.userToken;
  },
  isUserAuth(state) {
    return !!state.userToken;
  },
};

export default getters;
