<template>
  <div class="animate__animated animate__fadeIn">
    <div class="texts">
      <TitleText text="Filipinas Nostalgia" />
      <SubText text="history of the Philippines as captured in photographs" />
    </div>
    <div class="categoriesSection">
      <CategoriesSection :categories="categories" />
    </div>
  </div>
</template>

<script lang="ts">
import TitleText from "./components/TitleText.vue";
import SubText from "./components/SubText.vue";
import CategoriesSection from "../../components/CategoriesSection.vue";

import { GalleryItem } from "../../models/GalleryItem";
import { Gallery } from "../../models/Gallery";
import { Component, Vue } from "vue-property-decorator";
import { GalleryCategory } from "../../models/GalleryCategory";

@Component({
  components: {
    TitleText,
    SubText,
    CategoriesSection
  }
})
export default class App extends Vue {
  gallery: Gallery | null = null;
  categories: GalleryCategory[] = [];

  mounted() {
    fetch(
      "https://resource-files-bucket.s3-ap-southeast-1.amazonaws.com/fn/source.json"
    )
      .then(response => response.json())
      .then((data: Gallery) => {
        const transformedData = { ...data };
        const categoryNames = Object.keys(transformedData);

        categoryNames.forEach((categoryName: string) => {
          transformedData[categoryName].name = categoryName;
          transformedData[categoryName].items = transformedData[
            categoryName
          ].items.map((galleryItem: GalleryItem) => {
            return {
              ...galleryItem,
              url: `${categoryName}/${galleryItem.url}`
            };
          });
        });

        categoryNames.forEach((categoryName: string) => {
          this.categories.push(transformedData[categoryName]);
          localStorage.setItem(
            `gallery-${categoryName}`,
            // save to local storage
            JSON.stringify(transformedData[categoryName])
          );
        });
      });
  }
}
</script>

<style scoped>
.categoriesSection {
  margin-top: 80px;
}

.texts {
  text-align: center;
}
</style>
