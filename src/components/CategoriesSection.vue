<template>
  <div class="categoriesSectionContainer">
    <router-link
      class="galleryCategoryCard"
      :to="`gallery/${category.name}`"
      v-for="(category, index) in categories"
      :key="index"
      :style="{ animationDelay: `${500 + 200 * index}ms` }"
    >
      <GalleryPreviewCard :items="category.items" :title="category.name" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { GalleryCategory } from "@/models/GalleryCategory";
import { Component, Prop, Vue } from "vue-property-decorator";
import GalleryPreviewCard from "./GalleryPreviewCard.vue";

@Component({
  components: {
    GalleryPreviewCard
  }
})
export default class CategoriesSection extends Vue {
  @Prop() categories!: GalleryCategory[];
}
</script>

<style>
.categoriesSectionContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.categoriesSectionContainer > .galleryCategoryCard {
  width: 16%;
  height: 400px;
  min-width: 320.78px;
  margin: 16px;
  animation-name: fadeIn;
  animation-duration: 800ms;
  animation-fill-mode: both;
  box-sizing: border-box;
}
</style>
