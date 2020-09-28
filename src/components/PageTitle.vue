<template>
  <div
    class="pageTitleContainer"
    :style="{ background: noBackground ? 'transparent' : '#fafafa' }"
  >
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

  @Prop()
  noBackground!: boolean;

  get title() {
    return makeTitleCase(this.titleText);
  }
}
</script>

<style>
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
.pageTitleContainer {
  display: flex;
  align-items: center;
  animation-name: slideRight;
  animation-duration: 1s;
  z-index: 999;
  width: 100%;
  max-width: 960px;
}

.pageTitle {
  font-weight: bold;
  font-size: 24px;
  transition: 200ms;
}

.backButton {
  font-size: 1.5em;
  margin-right: 16px;
  cursor: pointer;
  color: var(--color-main);
}
</style>
