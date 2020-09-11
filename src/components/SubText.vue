<template>
  <span class="animate__animated animate__fadeIn">{{ text }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SubText extends Vue {
  @Prop() private text!: string;
}
</script>

<style scoped>
span {
  font-size: 18px;
  color: var(--color-darker);
}
</style>
