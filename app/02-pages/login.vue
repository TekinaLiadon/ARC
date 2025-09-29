<script setup lang="ts">
import LogIn from "@/03-widgets/login/LogIn.vue";
import Register from "@/03-widgets/login/Register.vue";

const flow = ref<"login" | "register">("login");
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <LogIn v-if="flow === 'login'" />
      <Register v-else />
    </UPageCard>
  </div>
</template>

<style></style>
