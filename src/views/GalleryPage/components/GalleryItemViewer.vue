<template>
  <Backdrop :onBackdropClick="handleCloseButtonClick"
    ><div class="galleryItemViewerContainer">
      <div class="viewerNav leftNav" @click="viewPreviousItem()">
        <i class="fas fa-angle-left" />
      </div>
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
            {{ galleryItems[currentIndex].description }}
          </div>
        </div>
      </div>
      <div class="viewerNav rightNav" @click="viewNextItem()">
        <i class="fas fa-angle-right" />
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
  lockKeyTrigger = false;

  handleCloseButtonClick() {
    this.handleClose?.();
  }

  viewNextItem() {
    if (this.currentIndex < this.galleryItems.length - 1)
      this.currentIndex += 1;
  }

  viewPreviousItem() {
    if (this.currentIndex > 0) this.currentIndex -= 1;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (!this.lockKeyTrigger) {
      this.lockKeyTrigger = true;

      switch (event.key) {
        case "ArrowRight":
          this.viewNextItem();
          break;
        case "ArrowLeft":
          this.viewPreviousItem();
          break;
      }
    }
  }

  handleKeyUp() {
    this.lockKeyTrigger = false;
  }

  created() {
    this.currentIndex = this.clickIndex;

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  destroyed() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keydown", this.handleKeyUp);
  }
}
</script>

<style>
.viewerNav {
  margin: 8px;
  color: #ffffff55;
  font-size: 3em;
}

.viewerNav > * {
  transition: 200ms;
  cursor: pointer;
}

.viewerNav > *:hover {
  color: #fff;
}

.galleryItemViewerContainer {
  background-color: transparent;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
}

.galleryItemViewerContent {
  background-color: #fff;
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

.imageContainer {
  padding: 8px;
  display: flex;
  align-items: center;
}

.imageContainer > img {
  display: block;
  max-width: 50vw;
  max-height: 50vh;
}

@media screen and (max-width: 460px) {
  .descriptionTextContainer {
    display: none;
  }
  .viewerNav {
    font-size: 1.5em;
  }
  .imageContainer {
    max-width: 80vw;
  }
  .imageContainer > img {
    max-width: 80vw;
  }
}

@media screen and (max-width: 800px) {
  .descriptionTextContainer {
    width: 200px;
  }
}
</style>
