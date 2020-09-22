<template>
  <div class="galleryPageContainer">
    <GalleryItemViewer
      v-if="itemViewerIndex >= 0"
      :galleryItems="category.items"
      :clickIndex="itemViewerIndex"
      :handleClose="handleGalleryItemViewerClose"
    />
    <div class="galleryPageContent">
      <div>
        <div class="galleryTitleContainer">
          <router-link :to="`/`">
            <span class="backButton" type="button" role="button"
              ><i class="fas fa-chevron-left"></i
            ></span>
          </router-link>
          <h1 class="galleryTitle ">
            {{ makeTitleCase(category.name) }}
          </h1>
        </div>
        <div class="categoryQuote">
          <span class="quoteText">{{ category.quote.text }}</span>
          <span class="quoteCreditText">{{ category.quote.credit }}</span>
        </div>
      </div>
      <div class="galleryItemContainer">
        <div
          v-for="(item, index) in category.items"
          :key="index"
          class="galleryItemInner"
        >
          <div
            class="galleryItemInner2 animate__animated animate__fadeIn"
            :style="{ animationDelay: `${500 + 50 * index}ms` }"
            @click="handleGalleryItemClick(index)"
          >
            <GalleryItemCard :galleryItem="item" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="backToTopContainer"
      :style="{
        visibility: showBackToTopButton ? 'visible' : 'hidden',
        opacity: showBackToTopButton ? 1 : 0
      }"
    >
      <BackToTopButton />
    </div>
  </div>
</template>

<script lang="ts">
import { GalleryCategory } from "@/models/GalleryCategory";
import { Component, Vue, Watch } from "vue-property-decorator";
import GalleryItemCard from "./components/GalleryItemCard.vue";
import { makeTitleCase } from "../../utils/stringUtils";
import BackToTopButton from "../../components/BackToTopButton.vue";
import GalleryItemViewer from "./components/GalleryItemViewer.vue";

@Component({
  components: {
    GalleryItemCard,
    BackToTopButton,
    GalleryItemViewer
  }
})
export default class GalleryPage extends Vue {
  baseUrl: string = process.env.VUE_APP_RESOURCE_BASE_URL;
  category: GalleryCategory | null = null;
  showBackToTopButton = true;
  itemViewerIndex = -1;

  makeTitleCase = makeTitleCase;

  onScroll() {
    this.showBackToTopButton = document.documentElement.scrollTop > 0;
  }

  handleGalleryItemClick(itemIndex: number) {
    this.itemViewerIndex = itemIndex;
  }

  handleGalleryItemViewerClose() {
    this.itemViewerIndex = -1;
  }

  created() {
    console.log("!@#");
    const categoryModel = localStorage.getItem(
      `gallery-${this.$route.params.categoryName}`
    );
    this.category = JSON.parse(categoryModel ?? "{}");
    document.addEventListener("scroll", this.onScroll);
  }

  destroyed() {
    document.removeEventListener("scroll", this.onScroll);
  }
}
</script>

<style>
.categoryQuote {
  margin: 56px;
  margin-top: 100px;
  animation-name: slideLeft;
  animation-duration: 1s;
}
.quoteCreditText {
  font-weight: bold;
  color: var(--color-main);
  display: block;
  text-align: right;
  margin: 16px 0;
}
.quoteCreditText::before {
  content: "~";
}

.quoteText {
  font-style: italic;
  text-align: left;
}
.quoteText::before,
.quoteText::after {
  content: '"';
}
.galleryPageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.galleryItemContainer {
  display: flex;
  flex: 1 0 0;
  width: 100%;
  flex-wrap: wrap;
}
.galleryItemContainer > * {
  padding: 8px;
  transition: 200ms;
}
.galleryItemInner {
  width: 33.33%;
  box-sizing: border-box;
}
.galleryItemInner2 {
  display: block;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
}

.galleryItemInner2 > div {
  position: absolute;
  height: 100%;
}

.galleryPageContent {
  justify-content: center;
  max-width: 960px;
}

.galleryTitle {
  font-weight: bold;
  font-size: 24px;
  transition: 200ms;
}

@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  80% {
    opacity: 1;
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  80% {
    opacity: 1;
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
  }
}

.galleryTitleContainer {
  display: flex;
  align-items: center;
  animation-name: slideRight;
  animation-duration: 1s;
  position: fixed;
  top: 50px;
  background-color: #fafafa;
  z-index: 999;
  width: 100%;
  max-width: 960px;
}

.backButton {
  font-size: 1.5em;
  margin-right: 16px;
  cursor: pointer;
  color: var(--color-main);
}
@media screen and (max-width: 980px) {
  .galleryItemContainer > * {
    padding: 2px;
  }

  .galleryTitleContainer {
    margin-left: 8px;
  }
}
@media screen and (max-width: 600px) {
  .galleryItemContainer > * {
    padding: 1px;
  }
}

.backToTopContainer {
  position: fixed;
  right: 50px;
  bottom: 50px;
  transition: 300ms;
}
</style>
