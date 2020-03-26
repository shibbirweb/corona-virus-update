<template>
  <div class="col mb-4">
    <div class="card">
      <img
        :src="data.countryInfo.flag"
        class="card-img-top img-thumbnail"
        :alt="data.country"
      />
      <div class="card-body">
        <h5 class="card-title">{{ data.country }}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item px-0">
            Cases:
            <span class="text-primary font-weight-bold">{{ data.cases }}</span>
          </li>
          <li class="list-group-item px-0">
            Today Cases:
            <span class="text-danger font-weight-bold">{{
              data.todayCases
            }}</span>
          </li>
          <li class="list-group-item px-0">
            Deaths:
            <span class="text-danger font-weight-bold">{{ data.deaths }}</span>
          </li>
          <li class="list-group-item px-0">
            Recovered:
            <span class="text-success font-weight-bold">{{
              data.recovered
            }}</span>
          </li>
          <li class="list-group-item px-0">
            Active:
            <span class="text-black-50 font-weight-bold">{{
              data.active
            }}</span>
          </li>
          <li class="list-group-item px-0">
            Critical:
            <span class="text-danger font-weight-bold">{{
              data.critical
            }}</span>
          </li>
          <li class="list-group-item px-0">
            Cases Per One Million:
            <span class="text-info font-weight-bold">{{
              data.casesPerOneMillion
            }}</span>
          </li>
          <li class="list-group-item px-0">
            Deaths Per One Million:
            <span class="text-danger font-weight-bold">{{
              data.deathsPerOneMillion
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCountryStatsComponent",
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style scoped></style>
