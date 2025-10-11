<script setup lang="ts">
import type { NavigationMenuItem } from "#ui/components/NavigationMenu.vue";

const { t } = useI18n();

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: t("lair.home"),
      icon: "i-lucide-home",
      to: lp("/lair"),
    },
    {
      label: t("lair.campaignsTitle"),
      icon: "i-lucide-compass",
      defaultOpen: true,
      children: [
        {
          label: t("lair.campaigns.title"),
          icon: "i-lucide-book-copy",
          to: lp("/lair/campaigns"),
        },
        {
          label: t("general.create"),
          icon: "i-lucide-wand-sparkles",
        },
        {
          label: t("general.join"),
          icon: "i-lucide-circle-plus",
        },
      ],
    },
  ],
]);
</script>

<template>
  <UPageAside>
    <UNavigationMenu orientation="vertical" :items="items" />
  </UPageAside>
</template>

<style scoped></style>
