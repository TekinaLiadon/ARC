<script setup lang="ts">
import type { CheckboxGroupProps } from "#ui/components/CheckboxGroup.vue";

interface Props {
  checkboxGroup?: CheckboxGroupProps;
  maxCount: number;
}
const props = withDefaults(defineProps<Props>(), {
  checkboxGroup: {
    variant: "card",
    size: "sm",
    orientation: "horizontal",
    icon: "i-lucide-star",
    labelKey: "invisibleLabel",
    valueKey: "uselessValue",
  },
});

const countArray = computed<number[]>(() => {
  const array: number[] = [];
  for (let i = 0; i < props.maxCount; i++)
    array.push({
      uselessValue: i,
      invisibleLabel: "",
    });
  return array;
});
</script>

<template>
  <UCheckboxGroup v-bind="props.checkboxGroup" :items="countArray" />
</template>

<style scoped></style>
