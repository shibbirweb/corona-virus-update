<template>
  <div class="card mt-2">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Country wise status</h2>
        <div class="d-flex align-items-center">
          View:
          <font-awesome-icon
            :class="[
              'mx-1',
              'pointer',
              viewType === 'list' ? 'text-black' : 'text-black-50'
            ]"
            icon="th-list"
            size="2x"
            title="List"
            @click="viewType = 'list'"
          />
          <font-awesome-icon
            :class="[
              'mx-1',
              'pointer',
              viewType === 'grid' ? 'text-black' : 'text-black-50'
            ]"
            icon="th-large"
            size="2x"
            title="Grid"
            @click="viewType = 'grid'"
          />
        </div>
      </div>
    </div>
    <div class="card-body position-relative">
      <keep-alive>
        <component :is="CountryWiseStatDynamicComponent" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import CountryStatsTableComponent from "./CountryStatsTableComponent";
import CountryStatsGridComponent from "./CountryStatsGridComponent";
import NotFoundComponent from "./NotFoundComponent";
export default {
  name: "CountyWiseStatsComponent",
  components: {
    CountryStatsGridComponent,
    CountryStatsTableComponent
  },
  computed: {
    CountryWiseStatDynamicComponent() {
      if (this.viewType === "list") {
        return CountryStatsTableComponent;
      } else if (this.viewType === "grid") {
        return CountryStatsGridComponent;
      } else {
        return NotFoundComponent;
      }
    }
  },
  data() {
    return {
      viewType: "list"
    };
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
