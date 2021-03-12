<template>
  <div
    class="backdrop"
    id="modalBackdrop"
    @click="
      {
        handleClick($event);
      }
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Backdrop extends Vue {
  @Prop()
  onBackdropClick?: () => void;

  mounted() {
    document.documentElement.style.overflow = "hidden";
  }

  destroyed() {
    document.documentElement.style.overflow = "auto";
  }

  handleClick(event: MouseEvent) {
    if ((event.target as HTMLElement).id === "modalBackdrop") {
      this.onBackdropClick?.();
    }
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
