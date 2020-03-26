<template>
  <div>
    <preloader-component :show="preloader" />
    <div class="row row-cols-1 row-cols-md-3" style="min-height: 100px">
      <single-country-stats-component
        v-for="(data, index) in countryWiseData"
        :key="index"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SingleCountryStatsComponent from "./SingleCountryStatsComponent";
import PreloaderComponent from "./PreloaderComponent";
export default {
  name: "CountryStatsGridComponent",
  components: { PreloaderComponent, SingleCountryStatsComponent },
  computed: {
    ...mapState(["countryWiseData"])
  },
  data() {
    return {
      preloader: true
    };
  },
  methods: {
    ...mapActions(["actionLoadCountryWiseStatistics"]),
    loadCountryWiseStats() {
      this.preloader = true;
      this.actionLoadCountryWiseStatistics()
        .then(() => (this.preloader = false))
        .catch(() => this.loadCountryWiseStats());
    }
  },
  mounted() {
    this.loadCountryWiseStats();
  }
};
</script>

<style scoped></style>
