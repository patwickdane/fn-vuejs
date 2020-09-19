<template>
  <button class="backToTopButtonBase" @click="scrollToTop()">
    <i class="fas fa-angle-up" />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default class BackToTopButton extends Vue {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
}
</script>

<style scoped>
.backToTopButtonBase {
  background: none;
  color: #000000aa;
  border: none;
  padding: 12px 20px;
  font-size: 2em;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 200ms;
}

.backToTopButtonBase:hover {
  background-color: white;
  font-size: 2.2em;
  color: #000000;
}
</style>
