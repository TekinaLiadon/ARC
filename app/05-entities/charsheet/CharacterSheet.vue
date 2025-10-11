<script setup lang="ts">
import StatColumns from "~/06-shared/statsheet-blocks/StatColumns.vue";
</script>

<template>
  <div class="character-sheet">
    <!--  TODO: Попробовать аккордеон  -->
    <!--  TODO: Сюда кароче аватарку, имя и био в двух колонках  -->
    <StatColumns :columns="4">
      <UFormField label="Name">
        <UInput size="xl" />
      </UFormField>
      <UFormField label="Ancestry and heritage">
        <UInput size="xl" />
      </UFormField>
      <UFormField label="Background">
        <UInput size="xl" />
      </UFormField>
      <UFormField label="Alignment">
        <UInput size="xl" />
      </UFormField>
      <UFormField label="Class">
        <UInput size="xl" />
      </UFormField>
      <UFormField label="Deity">
        <UInput size="xl" />
      </UFormField>
      <UFormField label="Size">
        <UInput size="xl" />
      </UFormField>
      <UFormField label="Level">
        <UFieldGroup>
          <UInputNumber size="xl" />
          <UInput size="xl">
            <template #trailing>XP</template>
          </UInput>
        </UFieldGroup>
      </UFormField>
    </StatColumns>
  </div>
</template>

<style scoped></style>
