<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        Corona Virus Update
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <router-link
            to="/"
            class="nav-item"
            tag="li"
            exact-active-class="active"
          >
            <a class="nav-link">Global</a>
          </router-link>

          <router-link
            :to="{ name: 'region.bangladesh' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">Bangladesh</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComponent",
  mounted() {}
};
</script>

<style scoped></style>
