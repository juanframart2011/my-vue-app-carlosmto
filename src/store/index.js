import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    filterData: ''
  },
  mutations: {
    setFilterData(state, data) {
      state.filterData = data;
    }
  }
});