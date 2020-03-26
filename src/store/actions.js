import { apiV1URL } from "../api";
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
          console.log(response.data);
          commit("mutationLoadCountryWiseStatistics", response.data);
          resolve(response.data);
        })
        .catch(reason => reject(reason));
    });
  }
};
