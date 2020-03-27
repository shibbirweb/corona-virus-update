<template>
  <div>
    <div class="bangladesh-stats py-2">
      <div class="container">
        <!-- Bangladesh Statistics -->
        <bangladesh-stats-component />
      </div>
    </div>
  </div>
</template>

<script>
import BangladeshStatsComponent from "../components/BangladeshStatsComponent";
export default {
  name: "Bangladesh",
  components: { BangladeshStatsComponent }
};
</script>

<style scoped lang="scss">
.bangladesh-stats {
  background-color: #003d6e;
  background-image: url("../assets/images/bangladesh-background.jpg");
  background-size: cover;
}
</style>
