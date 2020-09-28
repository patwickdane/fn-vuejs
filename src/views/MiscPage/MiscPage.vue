<template>
  <div
    class="miscPageContainer contentPadding"
    :style="{ justifyContent: hasOverflow ? 'flex-start' : 'center' }"
  >
    <div class="pageTitleContainer">
      <PageTitle
        :titleText="title"
        :noBackground="true"
        :hideBackButton="true"
      />
    </div>
    <div class="contentArea animate__animated animate__fadeIn">
      <slot />
    </div>
    <div
      class="grayscaleBg animate__animated animate__fadeIn"
      :style="{
        backgroundImage: `linear-gradient(130deg, #ffffff00 -50%, #fff 18% 74%, #ffffff00 120%), url(${backgroundUrl})`
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

  hasOverflow = false;

  mounted() {
    this.hasOverflow =
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight;
  }
}
</script>

<style scoped>
.miscPageContainer {
  box-sizing: border-box;
  line-height: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  height: calc(100vh - 50px);
}

.contentPadding {
  padding-left: 30%;
  padding-right: 30%;
  transition: 200ms;
}

.pageTitleContainer {
  position: relative;
}

.grayscaleBg {
  background-position: bottom right;
  background-size: inherit;
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
    padding: 0 10%;
    padding-bottom: 0;
  }
}
</style>
