<template>
  <div class="backdrop">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Backdrop extends Vue {
  mounted() {
    document.documentElement.style.overflow = "hidden";
  }

  destroyed() {
    document.documentElement.style.overflow = "auto";
  }
}
</script>

<style>
@keyframes flash {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000000aa;
  z-index: 1500;
  animation-duration: 200ms;
  animation-name: flash;
}
</style>
