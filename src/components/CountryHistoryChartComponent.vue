<template>
  <div class="card">
    <div class="card-header text-center">
      <div class="d-md-flex justify-content-between align-items-center">
        <div>Last {{ lastChosenDay }} days history</div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="form-inline">
            <label for="choose-day" class="col-form-label mr-1"
              >See last
            </label>
            <select
              class="form-control-sm form-control"
              id="choose-day"
              v-model="lastChosenDay"
            >
              <option value="60" selected>60 day</option>
              <option value="30" selected>30 day</option>
              <option value="15" selected>15 day</option>
              <option value="10" selected>10 day</option>
              <option value="5" selected>5 day</option>
            </select>
          </div>
          <div class="form-inline">
            <label for="view-type" class="col-form-label mx-1"
              >Chart Type
            </label>
            <select
              class="form-control-sm form-control"
              id="view-type"
              v-model="charType"
            >
              <option value="line">Line</option>
              <option value="bar">Bar</option>
              <option value="radar">Radar</option>
              <option value="pie">Pie</option>
              <option value="doughnut">Doughnut</option>
              <option value="polarArea">Polar Area</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <spinner-component v-if="preloader" />
      <chart-js-component
        v-else
        :labels="chartLabels"
        :data-set="chartDataset"
        :chart-type="charType"
        :chart-title="country"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ChartJsComponent from "./ChartJsComponent.vue";
import SpinnerComponent from "./SpinnerComponent";

export default {
  name: "CountryHistoryChartComponent",
  components: { SpinnerComponent, ChartJsComponent },
  props: {
    country: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapGetters(["getterSpecificCountryHistory"]),
    countryNameInSmallerCase() {
      return this.country.toLowerCase();
    },
    countryHistory() {
      return this.getterSpecificCountryHistory(this.countryNameInSmallerCase);
    }
  },
  watch: {
    countryHistory: {
      handler: "prepareChartData",
      deep: true
    },
    lastChosenDay: {
      handler: "updateChart"
    },
    charType: {
      handler: "updateChart"
    }
  },
  data() {
    return {
      preloader: true,
      lastChosenDay: 30,
      charType: "bar",
      chartLabels: [],
      chartDataset: []
    };
  },
  methods: {
    ...mapActions(["actionLoadSpecificCountryCoronaVirusHistory"]),
    loadSpecificCountryCoronaVirusHistory() {
      this.preloader = true;
      this.actionLoadSpecificCountryCoronaVirusHistory({
        country: this.country
      })
        .then(response => {
          try {
            // object cases
            let casesObj = response.data.timeline.cases;
            // check status
            let objectEmpty =
              Object.keys(casesObj).length === 0 &&
              casesObj.constructor === Object;
            // check object is empty or not
            if (objectEmpty) {
              // if empty then load this function again
              this.loadSpecificCountryCoronaVirusHistory();
            } else {
              // object is correct then hide preloader
              this.preloader = false;
            }
          } catch (e) {
            // if any error occurred load this function again
            this.loadSpecificCountryCoronaVirusHistory();
          }
        })
        .catch(() => this.loadSpecificCountryCoronaVirusHistory());
    },
    updateChart() {
      this.prepareChartData(this.countryHistory);
    },
    prepareChartData(newData) {
      if (newData === undefined) {
        // if new data undefined then load loadSpecificCountryCoronaVirusHistory()
        this.loadSpecificCountryCoronaVirusHistory();
        return;
      }
      // let labels for charts
      let labels = [];
      // for every date key in timeline will be label in chart
      for (let label in newData.timeline.cases) {
        // push the date key in labels array
        labels.push(label);
      }

      // keep last chosen days record
      // find end index of splice
      let restRecordIndexAfterChosenDay = labels.length - this.lastChosenDay;

      // remove rest labels
      labels.splice(0, restRecordIndexAfterChosenDay);

      /*====Case Start====*/
      // let cases
      let cases = newData.timeline.cases;

      // let cases count chart background color
      let casesCountBackgroundColor = [];
      // let cases count chart background border color
      let casesCountBorderColor = [];
      // let cases per day data array
      let casesCountPerDay = [];

      // let r g b variables for color
      let r = 0;
      let g = 0;
      let b = 0;
      // let previous day cases
      let previousDayCases = 0;
      // for first loop
      let isFirstCaseLoop = true;
      // for each cases value will push into array
      for (let day in cases) {
        // let today cases
        let today = cases[day];
        // push the today changes cases value in array
        casesCountPerDay.push(today - previousDayCases);
        // set today into previous day
        previousDayCases = today;

        // if first case loop then generate random color
        if (
          isFirstCaseLoop ||
          this.charType === "pie" ||
          this.charType === "polarArea" ||
          this.charType === "doughnut"
        ) {
          // color generate
          r = this.getRandomInt(170, 220);
          g = this.getRandomInt(170, 220);
          b = this.getRandomInt(170, 220);
        }

        // let background color
        let backgroundColor = `rgba(${r}, ${g}, ${b}, .6)`;
        // push generated background color into array
        casesCountBackgroundColor.push(backgroundColor);

        // let border color
        let borderColor = `rgba(${r}, ${g}, ${b}, 1)`;
        // push border color into array
        casesCountBorderColor.push(borderColor);

        // ser case first loop false
        isFirstCaseLoop = false;
      }

      // keep last selected day cases
      casesCountPerDay.splice(0, restRecordIndexAfterChosenDay);
      // keep last selected day cases background color
      casesCountBackgroundColor.splice(0, restRecordIndexAfterChosenDay);
      // keep last selected day cases border color
      casesCountBorderColor.splice(0, restRecordIndexAfterChosenDay);

      // cases dataset
      let casesDataset = {
        label: "Cases",
        data: casesCountPerDay,
        backgroundColor: casesCountBackgroundColor,
        borderColor: casesCountBorderColor,
        borderWidth: 1
      };
      /*====Case End====*/

      /*====Death Start====*/
      // same as case
      let deaths = newData.timeline.deaths;
      let deathsCountPerDay = [];
      let deathsCountBackgroundColor = [];
      let deathsCountBorderColor = [];
      let previousDayDeaths = 0;
      let isFirstDeathLoop = true;
      for (let day in deaths) {
        let today = deaths[day];
        deathsCountPerDay.push(today - previousDayDeaths);
        previousDayDeaths = today;

        if (
          isFirstDeathLoop ||
          this.charType === "pie" ||
          this.charType === "polarArea" ||
          this.charType === "doughnut"
        ) {
          // color generate
          r = this.getRandomInt(10, 140);
          g = this.getRandomInt(10, 140);
          b = this.getRandomInt(10, 140);
        }

        let backgroundColor = `rgba(${r}, ${g}, ${b}, .4)`;
        deathsCountBackgroundColor.push(backgroundColor);

        let borderColor = `rgba(${r}, ${g}, ${b}, 1)`;
        deathsCountBorderColor.push(borderColor);

        isFirstDeathLoop = false;
      }

      deathsCountPerDay.splice(0, restRecordIndexAfterChosenDay);
      deathsCountBackgroundColor.splice(0, restRecordIndexAfterChosenDay);
      deathsCountBorderColor.splice(0, restRecordIndexAfterChosenDay);

      let deathsDataset = {
        label: "Deaths",
        data: deathsCountPerDay,
        backgroundColor: deathsCountBackgroundColor,
        borderColor: deathsCountBorderColor,
        borderWidth: 1
      };
      /*====Death End====*/

      let allDataset = [casesDataset, deathsDataset];

      // set labels in data
      this.chartLabels = labels;
      // set chart dataset
      this.chartDataset = allDataset;
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  mounted() {
    this.loadSpecificCountryCoronaVirusHistory();
  }
};
</script>

<style scoped></style>
