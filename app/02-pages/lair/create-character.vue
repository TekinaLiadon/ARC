<script setup lang="ts">
import CharacterSheet from "~/05-entities/charsheet/CharacterSheet.vue";
</script>

<template>
  <UPageBody>
    <UPageCard class="bg-(--arc-charsheet-bg)" :ui="{ header: 'w-full' }">
      <template #header>
        <div class="flex items-center justify-between">
          <div class="font-bold text-xl">
            {{ $t("lair.characters.newCharacter") }}
          </div>
          <div>
            <UButton color="success" size="lg"
              >{{ $t("general.save") }}
            </UButton>
          </div>
        </div>
      </template>
      <CharacterSheet />
    </UPageCard>
  </UPageBody>
</template>

<style scoped></style>
