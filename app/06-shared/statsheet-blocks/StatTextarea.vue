<script setup lang="ts">
import type { TextareaProps } from "#ui/components/Textarea.vue";

const props = withDefaults(defineProps<TextareaProps>(), {
  class: "w-full",
});
</script>

<template><UTextarea v-bind="props" /></template>

<style scoped></style>
