<script setup lang="ts">
import LangSwitcher from "~/04-features/lang-switcher/LangSwitcher.vue";
import UserBadge from "~/03-widgets/header/segments/UserBadge.vue";
</script>

<template>
  <UHeader title="ARC">
    <template #right>
      <div class="not-lg:hidden flex gap-5">
        <LangSwitcher />
        <UserBadge />
      </div>
    </template>
  </UHeader>
</template>

<style scoped></style>
