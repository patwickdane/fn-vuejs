<template>
  <div class="galleryItemCard">
    <img
      class="itemImage"
      v-if="galleryItem"
      :src="`${baseUrl}/${galleryItem.url}`"
      :alt="galleryItem.description"
    />
    <div class="overlay">
      <span>{{ truncatedDescription }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { GalleryItem } from "@/models/GalleryItem";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GalleryItemCard extends Vue {
  @Prop() galleryItem!: GalleryItem;

  get truncatedDescription() {
    const maxLength = 80;
    const fullDescription = this.galleryItem.description;
    const needsEllipsis = fullDescription.length >= maxLength;

    return (
      fullDescription.substring(0, maxLength) + (needsEllipsis ? "..." : "")
    );
  }

  baseUrl = process.env.VUE_APP_RESOURCE_BASE_URL;
}
</script>

<style>
.galleryItemCard {
  cursor: pointer;
  transition: 200ms;
  position: relative;
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: #00000088;
  position: absolute;
  transition: 200ms;
  top: 0;
  opacity: 0;
  transform: translateY(40%);
  color: #fff;
  font-weight: 400;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
}

.galleryItemCard:hover .overlay {
  opacity: 1;
  transform: translateY(0);
}

.itemImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
