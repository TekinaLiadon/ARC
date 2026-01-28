<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <div class="border-1 border-(--ui-border-accented) rounded-md">
    <div class="bg-(--ui-border-accented) rounded-t-sm font-bold text-center">
      {{ props.title }}
    </div>
    <div class="flex flex-wrap p-1 gap-2">
      <slot />
    </div>
  </div>
</template>

<style></style>
