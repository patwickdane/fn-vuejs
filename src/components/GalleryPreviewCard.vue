<template>
  <div class="galleryPreviewCardContainer">
    <div class="imagePreviewContainer">
      <transition name="pan" appear>
        <div
          class="imagePreview"
          :key="previewIndex"
          :style="{
            backgroundImage: `url(${baseUrl + '/' + items[previewIndex].url})`
          }"
        />
      </transition>
    </div>
    <span class="cardTitle">{{ title }}</span>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GalleryItem } from "../models/GalleryItem";

@Component
export default class GalleryPreviewCard extends Vue {
  @Prop() title!: string;
  @Prop() items!: GalleryItem[];

  baseUrl = process.env.VUE_APP_RESOURCE_BASE_URL;
  previewIndex = 0;

  mounted() {
    setInterval(() => {
      this.previewIndex =
        this.previewIndex === this.items.length - 1 ? 0 : this.previewIndex + 1;
    }, 5000);
  }
}
</script>

<style>
.pan-enter {
  background-position-x: right;
}
.pan-enter-active {
  transition: background-position-x 50000ms linear;
}
.pan-leave-active {
  transition: all 500ms linear;
}

.pan-leave-to {
  opacity: 0;
}

.imagePreview {
  background-position-y: center;
  width: 100%;
  height: 350px;
  filter: grayscale(1);
  position: relative;
}

.galleryPreviewCardContainer {
  padding: 8px;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: white;
  cursor: pointer;
  box-sizing: border-box;
  transition: 400ms;
  color: #000;
}

.galleryPreviewCardContainer:hover {
  box-shadow: 1px 1px 5px 1px #11111144;
  transform: rotate(1deg);
}

.imagePreviewContainer {
  overflow: hidden;
  max-height: 350px;
}
.imagePreviewContainer > .imagePreview:first-child {
  z-index: 1;
}
.imagePreviewContainer > .imagePreview:not(:first-child) {
  transform: translate(0, -100%);
}
.cardTitle {
  margin-top: 8px;
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>
