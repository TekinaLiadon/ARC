<script setup lang="ts">
import type { InputProps } from "#ui/components/Input.vue";

const props = withDefaults(defineProps<InputProps>(), {
  ui: {
    root: "w-full",
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
