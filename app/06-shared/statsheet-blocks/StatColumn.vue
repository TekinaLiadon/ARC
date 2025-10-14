<script setup lang="ts">
interface Props {
  spanSize: number;
}
const props = withDefaults(defineProps<Props>(), {
  spanSize: 1,
});
</script>

<template>
  <div :class="`col-span-${props.spanSize}`">
    <slot />
  </div>
</template>

<style scoped></style>
