<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";
import HeaderDefault from "~/03-widgets/header/HeaderDefault.vue";
import { fallbackThemeKey, themes } from "~/06-shared/theme-system";
import { useUserStore } from "~/05-entities/user/userStore";

const { locale } = useI18n();
useHead({
  htmlAttrs: {
    lang: locales[locale.value].code,
    dir: locales[locale.value].dir,
  },
});

const user = useUserStore();
const activeThemeClass = computed(() => {
  return themes[user.activeTheme || fallbackThemeKey].classes.join(" ");
});
useHead({
  htmlAttrs: {
    class: activeThemeClass,
  },
});
</script>

<template>
  <div class="bg-(image:--arc-bg-pattern) bg-size-(--arc-bg-size) bg-fixed">
    <UApp>
      <HeaderDefault />
      <UMain>
        <NuxtLayout />
      </UMain>
    </UApp>
  </div>
</template>

<style>
/* @import "@/06-shared/assets/css/main.css"; */
</style>
