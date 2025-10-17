<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import type { ThemeKey, Theme } from "~/06-shared/theme-system";
import { themes } from "~/06-shared/theme-system";
import { useUserStore } from "~/05-entities/user/userStore";

const user = useUserStore();

const themeList: Theme & { key: ThemeKey }[] = Object.entries(themes).map(
  (item) => ({ ...item[1], key: item[0] }),
);

const items = computed<DropdownMenuItem[]>(() =>
  themeList.map(
    (item) =>
      ({
        label: item.label,
        onSelect() {
          user.activeTheme = item.key;
        },
        type: "checkbox",
        checked: user.activeTheme === item.key,
      }) as DropdownMenuItem,
  ),
);
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton icon="i-lucide-palette" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>

<style scoped></style>
