<script setup lang="ts">
interface Props {
  theme: {
    root: string;
  };
}
const props = withDefaults(defineProps<Props>(), {
  theme: {
    root: "w-full",
  },
});
</script>

<template>
  <UInput size="xl" :ui="props.theme">
    <template #trailing>
      <slot name="trailing" />
    </template>
  </UInput>
</template>

<style scoped></style>
