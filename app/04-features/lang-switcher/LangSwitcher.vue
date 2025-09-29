<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const availableLocale = computed(() => {
  return (
    locales.value.filter((i) => i.code !== locale.value)[0]?.code ??
    locale.value
  );
});

function switchAndSave() {
  setLocale(availableLocale.value);
}
</script>

<template>
  <UButton
    color="neutral"
    class="uppercase"
    variant="outline"
    icon="i-lucide-earth"
    @click="switchAndSave"
  >
    {{ availableLocale }}
  </UButton>
</template>
