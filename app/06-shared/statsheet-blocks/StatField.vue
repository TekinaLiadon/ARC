<script setup lang="ts">
interface Props {
  label?: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div>
    <div class="text-sm whitespace-nowrap text-default font-medium">
      {{ props.label }}
    </div>
    <div class="mt-1">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
