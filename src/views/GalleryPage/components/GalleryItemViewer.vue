<template>
  <Backdrop
    ><div class="galleryItemViewerContainer">
      <div class="galleryItemViewerContent">
        <div class="imageContainer">
          <img :src="`${baseUrl}/${galleryItems[currentIndex].url}`" />
        </div>
        <div class="descriptionTextContainer">
          <div class="closeButtonContainer">
            <button class="viewerCloseButton" @click="handleCloseButtonClick()">
              <i class="fas fa-times" />
            </button>
          </div>
          <div class="descriptionText">
            {{ galleryItems[clickIndex].description }}
          </div>
        </div>
      </div>
    </div>
  </Backdrop>
</template>

<script lang="ts">
import { GalleryItem } from "@/models/GalleryItem";
import { Component, Prop, Vue } from "vue-property-decorator";
import Backdrop from "../../../components/Backdrop.vue";

@Component({
  components: {
    Backdrop
  }
})
export default class GalleryItemViewer extends Vue {
  baseUrl: string = process.env.VUE_APP_RESOURCE_BASE_URL;
  @Prop() galleryItems!: GalleryItem[];
  @Prop() clickIndex!: number;
  @Prop() handleClose!: () => void;

  currentIndex = 0;

  handleCloseButtonClick() {
    this.handleClose?.();
  }

  created() {
    this.currentIndex = this.clickIndex;
  }
}
</script>

<style>
.galleryItemViewerContainer {
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.galleryItemViewerContent {
  display: flex;
  flex-direction: row;
}

.descriptionTextContainer {
  padding: 16px;
  width: 300px;
  display: flex;
  flex-direction: column;
}

.closeButtonContainer {
  margin: 8px 0;
}
.viewerCloseButton {
  background: none;
  border: none;
  outline: none;
  color: #bababa;
  float: right;
  cursor: pointer;
  font-size: 1em;
  transition: 200ms;
}

.viewerCloseButton:hover {
  color: #000;
}

.descriptionText {
  margin: 16px 0;
}

.imageContainer > img {
  display: block;
  max-width: 50vw;
  max-height: 50vh;
}
</style>
