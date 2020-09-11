<template>
  <div class="categoriesSectionContainer">
    <div
      v-for="(category, index) in categories"
      :key="index"
      :style="{ animationDelay: `${1000 + 200 * index}ms` }"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { Gallery } from "../models/Gallery";

@Component
export default class CategoriesSection extends Vue {
  categories = Array.from(new Array(3));
}
</script>

<style>
.categoriesSectionContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.categoriesSectionContainer > div {
  width: 20%;
  height: 400px;
  min-width: 377px;
  margin: 12px;
  background-color: gray;
  animation-name: fadeIn;
  animation-duration: 800ms;
  animation-fill-mode: both;
}
</style>
