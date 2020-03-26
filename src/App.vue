<template>
  <div class="container-fluid px-0">
    <!--Navbar Component-->
    <NavBarComponent />
    <!--Body-->
    <router-view />
    <source-component />
    <!--Footer-->
    <footer-component />
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import SourceComponent from "./components/SourceComponent";
export default {
  name: "App",
  components: { SourceComponent, FooterComponent, NavBarComponent }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>
