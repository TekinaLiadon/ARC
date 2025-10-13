<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { arcFetch } from "~/06-shared/arc-connection/arcFetch";
import { useToastError } from "~/06-shared/helpers/useToastError";
import { useUserStore } from "~/05-entities/user/userStore";
import {Fields} from "../06-shared/type/pages/global";

const { t } = useI18n();
const toastError = useToastError();
const userStore = useUserStore();

const fields: Fields[] = [
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
];

const schema = z.object({
  email: z.email(t("invalid.email")),
  password: z
    .string(t("invalid.required", ["login.password"]))
    .min(8, t("invalid.minCharacters", [8])),
});

type Schema = z.output<typeof schema>;
const formSubmitting = ref(false);
function onSubmit(payload: FormSubmitEvent<Schema>) {
  formSubmitting.value = true;
  arcFetch("/api/auth/", {
    method: "POST",
    body: {
      email: payload.data.email,
      password: payload.data.password,
    },
  })
    .then((response) => {
      userStore.logIn(response.token);
      navigateTo(lp("/lair"));
    })
    .catch((error) => {
      console.log(error);
      toastError.add(error);
    })
    .finally(() => {
      formSubmitting.value = false;
    });
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 pt-6">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        icon="i-lucide-door-open"
        :title="$t('login.welcomeBack')"
        :separator="$t('login.or')"
        :fields="fields"
        :submit="{
          loading: formSubmitting,
        }"
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
