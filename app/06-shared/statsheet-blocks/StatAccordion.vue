<script setup lang="ts">
import type {
  AccordionProps,
  AccordionSlots,
} from "#ui/components/Accordion.vue";

const props = withDefaults(defineProps<AccordionProps>(), {
  collapsible: true,
  unmountOnHide: false,
  modelValue: undefined,
  type: "multiple",
  disabled: false,
  defaultValue: undefined,
  ui: {
    header: "stat-accordion-header rounded-lg px-1 my-2",
  },
});
const slots = defineSlots<AccordionSlots>();
</script>

<template>
  <UAccordion v-bind="props">
    <template v-for="(_, name) in slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </UAccordion>
</template>

<style>
.stat-accordion-header {
  border: var(--ui-border-accented) dashed 1px;
  background-color: var(--ui-bg-accented);
}
</style>
