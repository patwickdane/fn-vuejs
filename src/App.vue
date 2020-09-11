<template>
  <div id="app">
    <div class="texts">
      <TitleText text="Filipinas Nostalgia" />
      <SubText text="history of the Philippines as captured in photographs" />
    </div>
    <div class="categoriesSection">
      <CategoriesSection />
    </div>
  </div>
</template>

<script lang="ts">
import TitleText from "./components/TitleText.vue";
import SubText from "./components/SubText.vue";
import CategoriesSection from "./components/CategoriesSection.vue";

import { GalleryItem } from "./models/GalleryItem";
import { Gallery } from "./models/Gallery";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    TitleText,
    SubText,
    CategoriesSection
  }
})
export default class App extends Vue {
  gallery: Gallery | null = null;

  mounted() {
    fetch(
      "https://resource-files-bucket.s3-ap-southeast-1.amazonaws.com/fn/source.json"
    )
      .then(response => response.json())
      .then((data: Gallery) => {
        const transformedData = { ...data };
        const categoryNames = Object.keys(transformedData);

        categoryNames.forEach((categoryName: string) => {
          transformedData[categoryName].items = transformedData[
            categoryName
          ].items.map((galleryItem: GalleryItem) => {
            return {
              ...galleryItem,
              url: `${categoryName}/${galleryItem.url}`
            };
          });
        });
      });
  }
}
</script>

<style>
:root {
  --color-main: #cc9966;
  --color-darker: #63512b;
}

#app {
  font-family: Lora, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.categoriesSection {
  margin-top: 80px;
}

.texts {
  text-align: center;
}
</style>
