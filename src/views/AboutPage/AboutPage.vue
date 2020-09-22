<template>
  <div>This is an about page.</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutPage extends Vue {
  created() {
    console.log("!");
  }
}
</script>

<style></style>
