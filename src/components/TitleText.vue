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
  color: var(--color-main);
  font-size: 120px;
  font-weight: normal;
}
</style>
