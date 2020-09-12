<template>
  <h1>{{ $route.params.categoryName }} Gallery</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class GalleryPage extends Vue {}
</script>

<style></style>
