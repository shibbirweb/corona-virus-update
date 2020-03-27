<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card" style="background-color:rgba(255,255,255,0.86);">
        <div class="card-header text-center">
          Global Statistics
          <div class="small text-black">
            Last Update:
            {{ formatLastUpdate(globalStatistics.updated) || "Loading" }}
          </div>
        </div>
        <div class="card-body position-relative p-0">
          <PreloaderComponent :show="preloader" />
          <div class="display-4 text-center">
            Corona virus cases:
          </div>
          <h2 class="display-4 font-weight-bolder text-center text-info">
            {{ formatCount(globalStatistics.cases) || "Loading" }}
          </h2>
          <div class="display-4 text-center">
            Deaths:
          </div>
          <h2 class="display-4 font-weight-bolder text-center text-danger">
            {{ formatCount(globalStatistics.deaths) || "Loading" }}
          </h2>
          <div class="display-4 text-center">
            Recovered:
          </div>
          <h2 class="display-4 font-weight-bolder text-center text-success">
            {{ formatCount(globalStatistics.recovered) || "Loading" }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PreloaderComponent from "./PreloaderComponent";
export default {
  name: "GlobalStatsComponent",
  components: { PreloaderComponent },
  computed: {
    ...mapState(["globalStatistics"])
  },
  data() {
    return {
      preloader: true
    };
  },
  methods: {
    ...mapActions(["actionLoadGlobalStatistics"]),
    showPreloader() {
      // show preloader
      this.preloader = true;
    },
    hidePreloader() {
      // hide preloader
      this.preloader = false;
    },
    loadGlobalStatistics() {
      // load global statistics
      // show preloader
      this.showPreloader();
      // call vuex action to load global statistics in state
      this.actionLoadGlobalStatistics()
        .then(() => {
          // hide preloader
          this.hidePreloader();
        })
        .catch(() => {
          // if fail then recall this function
          this.loadGlobalStatistics();
        });
    },
    formatLastUpdate(date) {
      // format last update date into locale date time string
      if (date) {
        return new Date(date).toLocaleString();
      } else {
        return null; // if date empty or null then return null
      }
    },
    formatCount: function(value) {
      try {
        return value.toLocaleString();
      } catch (e) {
        return null;
      }
    }
  },
  mounted() {
    this.loadGlobalStatistics(); // call load global statistics function
  }
};
</script>

<style scoped></style>
