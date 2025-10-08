<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";
import HeaderDefault from "~/03-widgets/header/HeaderDefault.vue";

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
    <HeaderDefault />
    <NuxtLayout />
  </UApp>
</template>

<style>
/* @import "@/06-shared/assets/css/main.css"; */
</style>
