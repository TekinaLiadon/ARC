<script setup lang="ts">
import LangSwitcher from "~/04-features/lang-switcher/LangSwitcher.vue";
import UserBadge from "~/03-widgets/header/segments/UserBadge.vue";
import type { NavigationMenuItem } from "#ui/components/NavigationMenu.vue";
import ThemeSelect from "~/06-shared/theme-system/ThemeSelect.vue";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Lair",
    to: lp("/lair"),
  },
]);
</script>

<template>
  <UHeader title="ARC">
    <UNavigationMenu :items="items" />
    <template #right>
      <div class="not-lg:hidden flex gap-5">
        <ThemeSelect />
        <LangSwitcher />
        <UserBadge />
      </div>
    </template>
  </UHeader>
</template>

<style scoped></style>
