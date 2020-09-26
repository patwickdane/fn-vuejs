<template>
  <div class="pageTitleContainer">
    <router-link :to="`/`" v-if="!hideBackButton">
      <span class="backButton" type="button" role="button">
        <i class="fas fa-chevron-left"></i>
      </span>
    </router-link>
    <h1 class="pageTitle">
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts">
import { makeTitleCase } from "@/utils/stringUtils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageTitle extends Vue {
  @Prop()
  titleText!: string;

  @Prop({ default: false })
  hideBackButton!: boolean;

  get title() {
    return makeTitleCase(this.titleText);
  }
}
</script>

<style>
.pageTitleContainer {
  display: flex;
  align-items: center;
  animation-name: slideRight;
  animation-duration: 1s;
  /* top: 50px; */
  background-color: transparent;
  z-index: 999;
  width: 100%;
  max-width: 960px;
}

.pageTitle {
  font-weight: bold;
  font-size: 24px;
  transition: 200ms;
}
</style>
