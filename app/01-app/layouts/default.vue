<script setup lang="ts">
import LangSwitcher from "~/04-features/lang-switcher/LangSwitcher.vue";
</script>

<template>
  <div>
    <UHeader title="ARC">
      <template #right>
        <LangSwitcher />
      </template>
    </UHeader>
    <UContainer>
      <NuxtPage />
    </UContainer>
  </div>
</template>

<style scoped></style>
