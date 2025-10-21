<script setup lang="ts"></script>

<template>
  <UPopover :ui="{ content: 'p-2' }">
    <UButton variant="outline" color="neutral" icon="i-lucide-wrench" />
    <template #content>
      <slot />
    </template>
  </UPopover>
</template>

<style scoped></style>
