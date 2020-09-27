<template>
  <div class="miscPageContainer contentPadding">
    <div class="pageTitleContainer">
      <PageTitle :titleText="title" :hideBackButton="true" />
    </div>
    <div class="contentArea animate__animated animate__fadeIn">
      <slot />
    </div>
    <div
      class="grayscaleBg animate__animated animate__fadeIn"
      :style="{
        backgroundImage: `linear-gradient(130deg, #ffffff00 -50%, #fff 18% 70%, #ffffff00 130%), url(${backgroundUrl})`
      }"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageTitle from "../../components/PageTitle.vue";

@Component({
  components: { PageTitle }
})
export default class MiscPage extends Vue {
  @Prop()
  backgroundUrl!: string;

  @Prop()
  title!: string;
}
</script>

<style scoped>
.contentPadding {
  padding: 10% 30%;
  transition: 200ms;
}

.pageTitleContainer {
  position: relative;
}

.miscPageContainer {
  box-sizing: border-box;
  line-height: 2em;
}

.grayscaleBg {
  background-position: bottom right;
  background-size: contain;
  filter: grayscale(1);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.contentArea {
  position: relative;
  z-index: 1;
}

.miscPageContainer p {
  margin-top: 32px;
}

@media screen and (max-width: 1024px) {
  .contentPadding {
    padding: 25% 18%;
  }
}

@media screen and (max-width: 600px) {
  .contentPadding {
    padding: 20% 15%;
  }
}
</style>
