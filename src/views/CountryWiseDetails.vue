<template>
  <div>
    <div class="country-wise-details py-2">
      <div class="container">
        <!-- Country Statistics -->
        <country-stats-component :country-name="$route.params.countryName" />
      </div>
    </div>

    <div class="container mt-2">
      <div class="row">
        <div class="col-md-12">
          <country-history-chart-component
            :country="$route.params.countryName"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountryHistoryChartComponent from "../components/CountryHistoryChartComponent";
import CountryStatsComponent from "../components/CountryStatsComponent";
export default {
  name: "CountryWiseDetails",
  components: { CountryStatsComponent, CountryHistoryChartComponent }
};
</script>

<style scoped>
.country-wise-details {
  background-color: #003d6e;
  background-position: center;
  background-image: url("../assets/images/world-background.jpg");
  background-size: cover;
}
</style>
