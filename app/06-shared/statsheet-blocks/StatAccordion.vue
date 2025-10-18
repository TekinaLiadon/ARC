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
    header: "stat-accordion-header px-1 my-2",
    trigger: "text-lg font-bold",
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
  border: var(--ui-border-accented) dashed;
  border-width: 0 0 1px 1px;
  border-radius: 0 0 0 calc(var(--ui-radius) * 1.5);
}
</style>
