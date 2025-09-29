<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locales[locale.value].code,
    dir: locales[locale.value].dir,
  },
});
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtLayout />
  </UApp>
</template>

<style>
/* @import "@/06-shared/assets/css/main.css"; */
</style>
