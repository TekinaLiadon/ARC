<script setup lang="ts">
import LairSidebar from "~/03-widgets/lair/LairSidebar.vue";
</script>

<template>
  <UPage>
    <template #left>
      <LairSidebar />
    </template>
    <template #default>
      <NuxtPage />
    </template>
  </UPage>
</template>

<style scoped></style>
