<script setup lang="ts"></script>

<template>
  <UPopover :ui="{ content: 'p-1 gap-2 flex flex-col' }">
    <UButton
      variant="outline"
      color="neutral"
      icon="i-lucide-ellipsis-vertical"
    />
    <template #content>
      <slot />
    </template>
  </UPopover>
</template>

<style scoped></style>
