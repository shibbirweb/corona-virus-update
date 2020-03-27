import { apiV1URL, apiV2URL } from "../api";
import axios from "axios";
export default {
  // load global statistics
  actionLoadGlobalStatistics({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(apiV1URL + "all")
        .then(response => {
          commit("mutationLoadGlobalStatistics", response.data);
          resolve(response.data);
        })
        .catch(reason => reject(reason));
    });
  },
  // load country wise statistics
  actionLoadCountryWiseStatistics({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(apiV1URL + "countries")
        .then(response => {
          commit("mutationLoadCountryWiseStatistics", response.data);
          resolve(response.data);
        })
        .catch(reason => reject(reason));
    });
  },
  // load bangladesh corona virus history
  actionLoadSpecificCountryCoronaVirusHistory({ commit }, { country }) {
    return new Promise((resolve, reject) => {
      axios
        .get(apiV2URL + "historical/" + country)
        .then(response => {
          commit("mutationLoadCountryWiseHistory", response.data);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }
};
