export default {
  // set global statistics
  mutationLoadGlobalStatistics(state, payload) {
    state.globalStatistics = payload;
  },
  // set country wise statistics
  mutationLoadCountryWiseStatistics(state, payload) {
    state.countryWiseData = payload;
  },
  // set country wise history
  mutationLoadCountryWiseHistory(state, payload) {
    // let exists country index number null
    let indexNumber = null;

    // find out index number of country if exists in array
    state.countryWiseHistories.forEach((data, index) => {
      if (data.country === payload.country) {
        indexNumber = index;
      }
    });

    // if index number is not null, that's mean this country data is exists in array
    if (indexNumber != null) {
      // remove country from array
      state.countryWiseHistories.splice(indexNumber, 1);
    }

    // push new fresh country data in array
    state.countryWiseHistories.push(payload);
  }
};
