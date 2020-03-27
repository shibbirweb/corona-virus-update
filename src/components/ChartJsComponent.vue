<template>
  <canvas ref="chartJS" :height="height" width="width"></canvas>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "ChartJsComponent",
  props: {
    chartTitle: {
      type: String,
      default: ""
    },
    labels: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
    dataSet: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
    height: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 400
    },
    chartType: {
      type: String,
      default: "bar"
    }
  },
  watch: {
    labels: {
      handler: "updateChartLabels"
    },
    dataSet: {
      handler: "updateChartDataset"
    }
  },
  data() {
    return {
      chartInstance: null
    };
  },
  methods: {
    updateChartLabels(labels) {
      let chart = this.initializeChart();
      chart.data.labels = labels;
      chart.update();
    },
    updateChartDataset(dataSet) {
      let chart = this.initializeChart();
      chart.data.datasets = dataSet;
      chart.update();
    },
    initializeChart() {
      if (this.chartInstance != null) {
        this.chartInstance.destroy();
      }

      const ctx = this.$refs.chartJS;
      this.chartInstance = new Chart(ctx, {
        type: this.chartType,
        data: {
          labels: this.labels,
          datasets: this.dataSet
        },
        options: {
          title: {
            display: true,
            text: this.chartTitle
          }
        }
      });

      return this.chartInstance;
    }
  },
  mounted() {
    this.initializeChart();
  }
};
</script>
