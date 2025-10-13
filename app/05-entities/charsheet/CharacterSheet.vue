<script setup lang="ts">
import StatColumns from "~/06-shared/statsheet-blocks/StatColumns.vue";
import StatField from "~/06-shared/statsheet-blocks/StatField.vue";
import StatInput from "~/06-shared/statsheet-blocks/StatInput.vue";
import StatImage from "~/06-shared/statsheet-blocks/StatImage.vue";
</script>

<template>
  <div class="character-sheet">
    <!--  TODO: Попробовать аккордеон  -->
    <!--  TODO: Сюда кароче аватарку, имя и био в двух колонках  -->
    <StatColumns :columns="3">
      <StatImage />
      <div class="col-span-2">
        <StatField label="Name" class="mb-2">
          <StatInput :theme="{ root: '' }" />
        </StatField>
        <StatField label="About">
          <UTextarea class="w-full" autoresize maxrows="15" />
        </StatField>
      </div>
    </StatColumns>
    <StatColumns :columns="4">
      <StatField label="Ancestry and heritage">
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
          <UInputNumber size="xl" orientation="vertical" />
          <StatInput>
            <template #trailing>XP</template>
          </StatInput>
        </UFieldGroup>
      </StatField>
    </StatColumns>
  </div>
</template>

<style scoped></style>
