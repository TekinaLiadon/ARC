<script setup lang="ts">
import StatColumns from "~/06-shared/statsheet-blocks/StatColumns.vue";
import StatColumn from "~/06-shared/statsheet-blocks/StatColumn.vue";
import StatField from "~/06-shared/statsheet-blocks/StatField.vue";
import StatInput from "~/06-shared/statsheet-blocks/StatInput.vue";
import StatImage from "~/06-shared/statsheet-blocks/StatImage.vue";
import StatTextarea from "~/06-shared/statsheet-blocks/StatTextarea.vue";
import StatInputNumber from "~/06-shared/statsheet-blocks/StatInputNumber.vue";
import StatCheckCounter from "~/06-shared/statsheet-blocks/StatCheckCounter.vue";
import StatRow from "~/06-shared/statsheet-blocks/StatRow.vue";
import type { AccordionItem } from "@nuxt/ui";
import StatAccordion from "~/06-shared/statsheet-blocks/StatAccordion.vue";

const accordionItems: AccordionItem[] = [
  {
    label: "Bio",
    icon: "i-rpg-character",
  },
];
</script>

<template>
  <div>
    <StatRow class="justify-between">
      <StatField label="Hero points">
        <StatCheckCounter :max-count="3" />
      </StatField>
      <StatField label="Hit points">
        <UFieldGroup>
          <StatInputNumber
            class="w-min min-w-[6em]"
            color="error"
            :highlight="true"
          />
          <UBadge color="neutral" variant="outline" size="lg">20</UBadge>
        </UFieldGroup>
      </StatField>
    </StatRow>
    <StatAccordion :items="accordionItems" :default-value="['0']">
      <template #content="{ item }">
        <StatColumns :columns="3">
          <StatImage label="Character art" />
          <StatColumn class="col-span-2">
            <StatField label="Name" class="mb-2">
              <StatInput :ui="{ root: '' }" />
            </StatField>
            <StatField label="About">
              <StatTextarea :rows="9" />
            </StatField>
          </StatColumn>
        </StatColumns>
        <StatColumns :columns="4">
          <StatField label="Ancestry">
            <StatInput />
          </StatField>
          <StatField label="Heritage">
            <StatInput />
          </StatField>
          <StatField label="Background">
            <StatInput />
          </StatField>
          <StatField label="Alignment">
            <StatInput />
          </StatField>
          <StatField label="Class">
            <StatInput />
          </StatField>
          <StatField label="Deity">
            <StatInput />
          </StatField>
          <StatField label="Size">
            <StatInput />
          </StatField>
          <StatField label="Level">
            <UFieldGroup>
              <StatInputNumber />
              <StatInput>
                <template #trailing>XP</template>
              </StatInput>
            </UFieldGroup>
          </StatField>
        </StatColumns>
      </template>
    </StatAccordion>
  </div>
</template>

<style scoped></style>
