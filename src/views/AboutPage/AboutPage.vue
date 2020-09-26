<template>
  <div
    class="aboutPageContainer contentPadding animate__animated animate__fadeIn"
    :style="{
      backgroundImage: `linear-gradient(130deg, #ffffff00 -30%, #fff 18% 70%, #ffffff00 110%), url(${backgroundUrl})`
    }"
  >
    <article class="aboutText animate__animated animate__fadeIn">
      <p>
        It is nothing short of extraordinary to we have these things called
        photgraphs that give us a glimpse of time gone by.
      </p>
      <p>
        <span class="highlightText">Filipinas Nostalgia</span> aims to walk you
        through the pages of Philippine history -- one photograph at a time. See
        how this wonderful country has evolved from its naissance to its current
        buzzing cities, ravenous mountains, and sparkling seas. Witness how the
        people have braved numerous historical events as well as their everyday
        lives as they are, in turn, carried by the winds of time.
      </p>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutPage extends Vue {
  get backgroundUrl() {
    const url = `${process.env.VUE_APP_RESOURCE_BASE_URL}/static/about_bg.jpg`;
    return url;
  }
}
</script>

<style scoped>
.contentPadding {
  padding: 10% 30%;
  transition: 200ms;
}
.aboutPageContainer {
  box-sizing: border-box;
  line-height: 2em;
  height: calc(100vh - 50px);
  background-position: bottom right;
  background-size: contain;
}

.aboutText {
  animation-delay: 800ms;
}

.aboutPageContainer p {
  margin-top: 32px;
}

.highlightText {
  color: var(--color-main);
}

@media screen and (max-width: 1024px) {
  .contentPadding {
    padding: 28% 15%;
  }
}
</style>
