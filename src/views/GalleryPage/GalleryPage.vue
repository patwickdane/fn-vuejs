<template>
  <div class="galleryPageContainer">
    <div class="galleryPageContent">
      <div class="galleryTitleContainer">
        <h1 class="galleryTitle ">
          {{ makeTitleCase(category.name) }}
        </h1>
        <hr />
      </div>
      <div class="categoryQuote">
        <span class="quoteText">{{ category.quote.text }}</span>
        <span class="quoteCreditText">{{ category.quote.credit }}</span>
      </div>
      <div class="galleryItemContainer">
        <div
          v-for="(item, index) in category.items"
          :key="index"
          class="galleryItemInner"
        >
          <div
            class="galleryItemInner2 animate__animated animate__fadeIn"
            :style="{ animationDelay: `${500 + 200 * index}ms` }"
          >
            <GalleryItemCard :galleryItem="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { GalleryCategory } from "@/models/GalleryCategory";
import { Component, Vue } from "vue-property-decorator";
import GalleryItemCard from "./components/GalleryItemCard.vue";
import { makeTitleCase } from "../../utils/stringUtils";

@Component({
  components: {
    GalleryItemCard
  }
})
export default class GalleryPage extends Vue {
  baseUrl: string = process.env.VUE_APP_RESOURCE_BASE_URL;
  category: GalleryCategory | null = null;

  makeTitleCase = makeTitleCase;
  created() {
    const categoryModel = localStorage.getItem(
      `gallery-${this.$route.params.categoryName}`
    );
    this.category = JSON.parse(categoryModel ?? "{}");
  }
}
</script>

<style>
.categoryQuote {
  margin: 56px;
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
  animation-name: slideRight;
  animation-duration: 1s;
}
@media screen and (max-width: 980px) {
  .galleryItemContainer > * {
    padding: 2px;
  }

  .galleryTitle {
    margin-left: 16px;
  }
}
@media screen and (max-width: 600px) {
  .galleryItemContainer > * {
    padding: 1px;
  }
}
</style>
