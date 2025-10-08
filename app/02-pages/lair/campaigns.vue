<script setup lang="ts">
const links = ref([
  {
    label: "Create",
    icon: "i-rpg-ground-sprout",
    color: "secondary",
  },
  {
    label: "Join",
    icon: "i-rpg-magic-gate",
    color: "primary",
  },
]);
</script>

<template>
  <UPageHeader
    :title="$t('lair.campaigns.title')"
    :description="$t('lair.campaigns.description')"
    :links="links"
  />
  <UPageBody>
    <UPageCTA :description="$t('lair.campaigns.none')" variant="soft" />
    <UPageCard
      title="Tailwind CSS"
      description="Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements."
      icon="i-lucide-hand-metal"
      orientation="horizontal"
      spotlight
      spotlight-color="primary"
    >
    </UPageCard>
  </UPageBody>
</template>

<style scoped></style>
