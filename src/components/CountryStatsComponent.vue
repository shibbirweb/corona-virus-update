<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card" style="background-color:rgba(255,255,255,0.86);">
        <div class="card-header text-center">
          {{ countryName }} Statistics
          <div class="small text-black">
            Last Update:
            {{ formatLastUpdate(globalStatistics.updated) || "Loading" }}
          </div>
        </div>
        <div class="card-body position-relative p-0">
          <preloader-component :show="preloader" />
          <div class="row">
            <div class="col-md-6">
              <div class="display-4 text-center">
                Total cases:
              </div>
              <h2 class="display-4 font-weight-bolder text-center text-primary">
                {{ formatNumber(countryStatistics.cases) || "Loading" }}
              </h2>
            </div>
            <div class="col-md-6">
              <div class="display-4 text-center">
                New cases:
              </div>
              <h2 class="display-4 font-weight-bolder text-center text-info">
                {{ formatNumber(countryStatistics.todayCases) || "Loading" }}
              </h2>
            </div>
            <div class="col-md-6">
              <div class="display-4 text-center">
                Deaths:
              </div>
              <h2 class="display-4 font-weight-bolder text-center text-danger">
                {{ formatNumber(countryStatistics.deaths) || "Loading" }}
              </h2>
            </div>
            <div class="col-md-6">
              <div class="display-4 text-center">
                New deaths:
              </div>
              <h2
                :class="[
                  'display-4',
                  'font-weight-bolder',
                  'text-center',
                  countryStatistics.todayDeaths ? 'text-danger' : 'text-success'
                ]"
              >
                {{ formatNumber(countryStatistics.todayDeaths) || "Loading" }}
              </h2>
            </div>
            <div class="col-md-12">
              <div class="display-4 text-center">
                Recovered:
              </div>
              <h2 class="display-4 font-weight-bolder text-center text-success">
                {{ formatNumber(countryStatistics.recovered) || "Loading" }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import PreloaderComponent from "./PreloaderComponent";
export default {
  name: "CountryStatsComponent",
  components: { PreloaderComponent },
  props: {
    countryName: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(["globalStatistics"]),
    ...mapGetters(["getterCountryStatistics"]),
    countryStatistics() {
      return this.getterCountryStatistics(this.countryName) || {};
    }
  },
  data() {
    return {
      preloader: true
    };
  },
  methods: {
    ...mapActions([
      "actionLoadCountryWiseStatistics",
      "actionLoadGlobalStatistics"
    ]),
    loadCountryWiseStats() {
      // show preloader
      this.preloader = true;
      // load country wise statistics
      this.actionLoadCountryWiseStatistics()
        .then(() => (this.preloader = false))
        .catch(() => this.loadCountryWiseStats());
    },
    loadDataForCountryStats() {
      // load global statistics
      this.actionLoadGlobalStatistics().catch(() =>
        this.loadDataForCountryStats()
      );

      // load country wise statistics
      this.loadCountryWiseStats();
    },
    formatLastUpdate(date) {
      // format last update date into locale date time string
      if (date) {
        return new Date(date).toLocaleString();
      } else {
        return null; // if date empty or null then return null
      }
    },
    formatNumber(number) {
      try {
        return number.toLocaleString();
      } catch (e) {
        return null;
      }
    }
  },
  mounted() {
    this.loadDataForCountryStats();
  }
};
</script>

<style scoped></style>
