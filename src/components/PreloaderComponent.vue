<template>
  <div
    class="PreloaderComponent"
    v-if="show"
    :style="{
      backgroundColor: backgroundColor
    }"
  >
    <div class="lds-ripple">
      <div
        :style="{
          borderColor: preloaderColor
        }"
      ></div>
      <div
        :style="{
          borderColor: preloaderColor
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreloaderComponent",
  props: {
    show: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: "rgba(97, 95, 95, 0.32)"
    },
    preloaderColor: {
      type: String,
      default: "#3bbdfb"
    }
  }
};
</script>

<style scoped>
.PreloaderComponent {
  position: absolute;
  background-color: rgba(97, 95, 95, 0.32);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: black;
  text-align: center;
  z-index: 2;
}
.lds-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #cef;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
