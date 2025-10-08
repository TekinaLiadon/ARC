<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import { useUserStore } from "~/05-entities/user/userStore";

const { t } = useI18n();
const userStore = useUserStore();

const dropdownItems = ref<DropdownMenuItem[][]>([
  [
    {
      label: t("user.profile"),
      icon: "i-lucide-user",
    },
  ],
  [
    {
      label: t("user.logout"),
      icon: "i-lucide-log-out",
      color: "error",
      onSelect: () => userStore.logOut(),
    },
  ],
]);
</script>

<template>
  <UDropdownMenu v-if="userStore.token" :items="dropdownItems">
    <UUser
      class="cursor-default"
      name="John Doe"
      description="Freemium"
      :avatar="{
        src: '',
        icon: 'i-lucide-image',
      }"
    />
  </UDropdownMenu>
  <UButton v-else to="sign-in" icon="i-lucide-door-open">
    {{ $t("login.signIn") }}
  </UButton>
</template>

<style scoped></style>
