<script setup lang="ts">
import type { FileUploadProps } from "#ui/components/FileUpload.vue";

const props = withDefaults(defineProps<FileUploadProps>(), {
  class: "aspect-1/1",
  interactive: true,
});
</script>

<template>
  <UFileUpload v-bind.prop="props" />
</template>

<style scoped></style>
