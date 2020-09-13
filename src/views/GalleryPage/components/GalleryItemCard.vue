<template>
  <div>
    <img
      class="itemImage"
      v-if="galleryItem"
      :src="`${baseUrl}/${galleryItem.url}`"
      :alt="galleryItem.description"
    />
  </div>
</template>

<script lang="ts">
import { GalleryItem } from "@/models/GalleryItem";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GalleryItemCard extends Vue {
  @Prop() galleryItem!: GalleryItem;

  baseUrl = process.env.VUE_APP_RESOURCE_BASE_URL;
}
</script>

<style>
.itemImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
