<script setup lang="ts">
import type { InputNumberProps } from "#ui/components/InputNumber.vue";

const props = withDefaults(defineProps<InputNumberProps>(), {
  orientation: "vertical",
  size: "xl",
});
</script>

<template>
  <UInputNumber v-bind="props" />
</template>

<style scoped></style>
