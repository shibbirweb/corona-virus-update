<template>
  <div class="CountryStatsTableComponent">
    <form class="form-inline float-right">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Country Name"
          aria-label="Country Name"
          v-model="countryName"
          aria-describedby="search-icon"
        />
        <div class="input-group-append">
          <span class="input-group-text" id="search-icon">
            <font-awesome-icon icon="search" title="List" />
          </span>
        </div>
      </div>
    </form>
    <div class="table-responsive" style="max-height: 500px;">
      <table class="table table-sm table-hover table-striped table-bordered">
        <thead>
          <tr class="align-middle">
            <th class="bg-white">Sl</th>
            <th class="bg-white">Country</th>
            <th class="bg-white">Cases</th>
            <th class="bg-white">New Cases</th>
            <th class="bg-white">Deaths</th>
            <th class="bg-white">New Deaths</th>
            <th class="bg-white">Recovered</th>
            <th class="bg-white">Active</th>
            <th class="bg-white">Critical</th>
            <th class="bg-white" title="Cases Per Million">Cases/Million</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="preloader">
            <td colspan="11">
              <spinner-component />
            </td>
          </tr>
          <tr v-else v-for="(data, index) in countryWiseData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <!--<img
              :src="data.countryInfo.flag"
              class="rounded"
              width="25"
              :alt="data.country"
            />-->
              {{ data.country }} ({{ data.countryInfo.iso3 }})
            </td>
            <td>{{ data.cases }}</td>
            <td :class="[data.todayCases > 0 ? 'bg-info text-white' : '']">
              {{ data.todayCases > 0 ? "+" : "" }}{{ data.todayCases }}
            </td>
            <td>{{ data.deaths }}</td>
            <td :class="[data.todayDeaths > 0 ? 'bg-danger text-white' : '']">
              {{ data.todayDeaths > 0 ? "+" : "" }}{{ data.todayDeaths }}
            </td>
            <td>{{ data.recovered }}</td>
            <td>{{ data.active }}</td>
            <td>{{ data.critical }}</td>
            <td>{{ data.casesPerOneMillion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import FloatThead from "vue-floatthead";
Vue.use(FloatThead);
import { mapActions, mapGetters } from "vuex";
import SpinnerComponent from "./SpinnerComponent";
export default {
  name: "CountryStatsTableComponent",
  components: { SpinnerComponent },
  computed: {
    ...mapGetters(["getterSearchCountry"]),
    countryWiseData() {
      return this.getterSearchCountry(this.countryName);
    }
  },
  data() {
    return {
      countryName: "",
      preloader: true
    };
  },
  methods: {
    ...mapActions(["actionLoadCountryWiseStatistics"]),
    loadCountryWiseStatistics() {
      this.preloader = true;
      this.actionLoadCountryWiseStatistics()
        .then(() => (this.preloader = false))
        .catch(() => this.loadCountryWiseStatistics());
    }
  },
  mounted() {
    this.loadCountryWiseStatistics();
  }
};
</script>

<style lang="scss" scoped>
.CountryStatsTableComponent {
  th {
    position: sticky;
    top: 0;
    box-shadow: 0 -2px 2px 0px rgb(222, 226, 230);
  }
}
</style>
