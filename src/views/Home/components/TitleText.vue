<template>
  <h1>{{ text }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TitleText extends Vue {
  @Prop() private text!: string;
}
</script>

<style scoped>
h1 {
  transition: 200ms;
  color: var(--color-main);
  font-size: 120px;
  font-weight: normal;
}

@media screen and (max-width: 460px) {
  h1 {
    font-size: 70px;
  }
}
@media screen and (max-width: 600px) and (min-width: 460px) {
  h1 {
    font-size: 90px;
  }
}

@media screen and (max-width: 320px) {
  h1 {
    font-size: 60px;
  }
}
</style>
