<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const fields = [
  {
    name: "email",
    type: "text" as const,
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password" as const,
    placeholder: "Enter your password",
  },
  {
    name: "remember",
    label: "Remember me",
    type: "checkbox" as const,
  },
];

const toast = useToast();
const providers = [
  {
    label: "Google",
    icon: "i-simple-icons-google",
    onClick: () => {
      toast.add({ title: "Google", description: "Login with Google" });
    },
  },
];

const schema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string("Password is required")
    .min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;
function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log("Submitted", payload.data);
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 pt-6">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        icon="i-lucide-door-open"
        :title="$t('login.welcomeBack')"
        :providers="providers"
        :separator="$t('login.or')"
        :fields="fields"
        @submit="onSubmit"
      >
        <template #description>
          {{ $t("login.noAccount") }}
          <ULink to="sign-up" class="text-primary font-medium">
            {{ $t("login.signUp") }}.
          </ULink>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>

<style scoped></style>
