<template>
  <MiscPage :backgroundUrl="`${baseUrl}/static/contact_bg.jpg`" title="Contact">
    <article class="pageText animate__animated animate__fadeIn">
      <p>
        All gallery contents in this site are sourced from the official
        <span class="highlightText">Filipinas Nostalgia</span> social media
        accounts. I do not own any of it.
      </p>
      <p>
        You can connect with them through the links below.
      </p>
      <div class="socialLinksContainer">
        <a href="https://www.facebook.com/filipinasnostalgia" target="_blank"
          ><i class="fab fa-facebook"
        /></a>
        <a href="https://www.instagram.com/filipinasnostalgia/" target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="https://twitter.com/phnostalgia" target="_blank"
          ><i class="fab fa-twitter"></i
        ></a>
      </div>
    </article>
  </MiscPage>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MiscPage from "../MiscPage/MiscPage.vue";

@Component({
  components: { MiscPage }
})
export default class ContactPage extends Vue {
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
.pageText {
  animation-delay: 800ms;
}

.highlightText {
  color: var(--color-main);
}

.socialLinksContainer {
  margin-top: 64px;
  text-align: center;
  font-size: 2em;
  width: 100%;
}

.socialLinksContainer > a {
  margin: 16px;
  cursor: pointer;
  transition: 200ms;
  color: var(--color-main);
}

.socialLinksContainer > a:hover {
  color: var(--color-darker);
}

@media screen and (max-width: 320px) {
  .socialLinksContainer {
    margin-top: 32px;
  }
  .socialLinksContainer > a {
    margin: 8px;
  }
}
</style>
