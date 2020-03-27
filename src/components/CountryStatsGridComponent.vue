<template>
  <div>
    <preloader-component :show="preloader" />
    <div class="row">
      <div class="col-md-12">
        <form class="form-inline float-right">
          <div class="form-group mb-3">
            <label for="per-row" class="col-form-label">Per Row</label>
            <select
              v-model="perRow"
              class="form-control form-control-sm mx-2"
              id="per-row"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
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
      </div>
    </div>
    <div
      :class="['row', 'row-cols-1', 'row-cols-md-' + this.perRow]"
      style="min-height: 100px"
    >
      <single-country-stats-component
        v-for="(data, index) in countryWiseData"
        :key="index"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SingleCountryStatsComponent from "./SingleCountryStatsComponent";
import PreloaderComponent from "./PreloaderComponent";
export default {
  name: "CountryStatsGridComponent",
  components: { PreloaderComponent, SingleCountryStatsComponent },
  computed: {
    ...mapGetters(["getterSearchCountry"]),
    countryWiseData() {
      return this.getterSearchCountry(this.countryName);
    }
  },
  data() {
    return {
      preloader: true,
      countryName: "",
      perRow: 3
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
