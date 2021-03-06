export default {
  // search country
  getterSearchCountry: state => searchName => {
    if (searchName.length === 0) {
      return state.countryWiseData;
    } else {
      return state.countryWiseData.filter(report => {
        return report.country.toLowerCase().includes(searchName.toLowerCase());
      });
    }
  },
  // country statistics summary
  getterCountryStatistics: state => countryName => {
    return state.countryWiseData.find(data => data.country === countryName);
  },
  // specific country wise history
  getterSpecificCountryHistory: state => countryName => {
    return state.countryWiseHistories.find(
      data => data.country === countryName
    );
  }
};
