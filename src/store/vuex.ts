// import { createStore } from "vuex";

const Vuex = {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment(state: any) {
      // 变更状态
      state.count++;
    },
  },
};

export default Vuex;
