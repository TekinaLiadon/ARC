<script setup lang="ts">
import type { InputProps } from "#ui/components/Input.vue";

const props = withDefaults(defineProps<InputProps>(), {
  ui: {
    root: "w-full",
    base: "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
  },
  size: "xl",
});
</script>

<template>
  <UInput v-bind="props">
    <template #trailing>
      <slot name="trailing" />
    </template>
  </UInput>
</template>

<style scoped></style>
