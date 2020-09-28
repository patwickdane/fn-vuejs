<template>
  <MiscPage :backgroundUrl="`${baseUrl}/static/about_bg.jpg`" title="About">
    <article class="aboutText animate__animated animate__fadeIn">
      <p>
        It is nothing short of extraordinary to have these things called
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
  </MiscPage>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import PageTitle from "../../components/PageTitle.vue";
import MiscPage from "../MiscPage/MiscPage.vue";

@Component({
  components: { MiscPage }
})
export default class AboutPage extends Vue {
  get baseUrl() {
    return process.env.VUE_APP_RESOURCE_BASE_URL;
  }
  get backgroundUrl() {
    const url = `${process.env.VUE_APP_RESOURCE_BASE_URL}/static/about_bg.jpg`;
    return url;
  }
}
</script>

<style scoped>
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

@media screen and (max-width: 600px) {
  .aboutText {
    padding: 0;
  }
}
</style>
