export default {
  getterSearchCountry: state => searchName => {
    if (searchName.length === 0) {
      return state.countryWiseData;
    } else {
      return state.countryWiseData.filter(report => {
        return report.country.toLowerCase().includes(searchName.toLowerCase());
      });
    }
  },
  getterBangladeshStatistics: state => {
    return state.countryWiseData.find(data => data.country === "Bangladesh");
  }
};
