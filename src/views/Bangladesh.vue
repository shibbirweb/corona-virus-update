<template>
  <div>
    <div class="bangladesh-stats py-2">
      <div class="container">
        <!-- Bangladesh Statistics -->
        <bangladesh-stats-component />
      </div>
    </div>

    <div class="container mt-2">
      <div class="row">
        <div class="col-md-12">
          <country-history-chart-component country="Bangladesh" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BangladeshStatsComponent from "../components/BangladeshStatsComponent";
import CountryHistoryChartComponent from "../components/CountryHistoryChartComponent";
export default {
  name: "Bangladesh",
  components: {
    CountryHistoryChartComponent,
    BangladeshStatsComponent
  }
};
</script>

<style scoped lang="scss">
.bangladesh-stats {
  background-color: #003d6e;
  background-image: url("../assets/images/bangladesh-background.jpg");
  background-position: center;
  background-size: cover;
}
</style>
