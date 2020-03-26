export default {
  // set global statistics
  mutationLoadGlobalStatistics(state, payload) {
    state.globalStatistics = payload;
  },
  // set country wise statistics
  mutationLoadCountryWiseStatistics(state, payload) {
    state.countryWiseData = payload;
  }
};
