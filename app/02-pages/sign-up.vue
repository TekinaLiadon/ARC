<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const { t } = useI18n();

const fields = [
  {
    name: "email",
    type: "text" as const,
    label: t("login.email"),
    placeholder: t("login.enterYour", ["login.email"]),
  },
  {
    name: "password",
    type: "password" as const,
    label: t("login.password"),
    placeholder: t("login.enterYour", ["login.password"]),
  },
  {
    name: "passwordRepeat",
    type: "password" as const,
    placeholder: t("login.passwordRepeat"),
  },
];

const schema = z
  .object({
    email: z.email(t("invalid.email")),
    password: z
      .string(t("invalid.required", ["login.password"]))
      .min(8, t("invalid.minCharacters", [8])),
    passwordRepeat: z.string(t("invalid.required", ["login.passwordRepeat"])),
  })
  .refine((data) => data.passwordRepeat === data.password, {
    path: ["passwordRepeat"],
    message: t("invalid.passwordRepeat"),
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
        icon="i-lucide-party-popper"
        :title="$t('login.newAccount')"
        :separator="$t('login.or')"
        :fields="fields"
        @submit="onSubmit"
      >
        <template #footer>
          {{ $t("login.haveAccount") }}
          <ULink to="sign-in" class="text-primary font-medium">
            {{ $t("login.signIn") }}.
          </ULink>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>

<style scoped></style>
