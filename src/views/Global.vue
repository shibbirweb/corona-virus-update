<template>
  <div>
    <div class="global-stats py-2">
      <div class="container">
        <!-- Global Statistics -->
        <GlobalStatsComponent />
      </div>
    </div>

    <div class="container">
      <!-- Country wise status -->
      <county-wise-stats-component />
    </div>
  </div>
</template>

<script>
import GlobalStatsComponent from "../components/GlobalStatsComponent";
import CountyWiseStatsComponent from "../components/CountyWiseStatsComponent";
export default {
  name: "Global",
  components: { CountyWiseStatsComponent, GlobalStatsComponent }
};
</script>

<style scoped lang="scss">
.global-stats {
  background-color: #001d1b;
  background-image: url("../assets/images/world-background.jpg");
  background-size: cover;
}
</style>
