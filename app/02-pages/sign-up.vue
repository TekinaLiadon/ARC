<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { arcFetch } from "~/06-shared/arc-connection/arcFetch";
import { useToastError } from "~/06-shared/helpers/useToastError";
import { useUserStore } from "~/05-entities/user/userStore";

const { t } = useI18n();
const toastError = useToastError();
const userStore = useUserStore();

const step = ref<"cred" | "code">("cred");
const emailInQuestion = ref<string>("");

// credential step
const credFields = [
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

const credSchema = z
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
type CredSchema = z.output<typeof credSchema>;

const credSubmitting = ref(false);
function credOnSubmit(payload: FormSubmitEvent<CredSchema>) {
  credSubmitting.value = true;
  arcFetch("/api/auth/registration", {
    method: "POST",
    body: {
      email: payload.data.email,
      password: payload.data.password,
    },
  })
    .then(() => {
      step.value = "code";
      emailInQuestion.value = payload.data.email;
    })
    .catch((error) => {
      toastError.add(error);
    })
    .finally(() => {
      credSubmitting.value = false;
    });
}

// code step

const codeFields = [
  {
    name: "otp",
    type: "otp",
    length: 5,
    placeholder: "○",
  },
];

const codeSubmitting = ref(false);
function codeOnSubmit(payload) {
  codeSubmitting.value = true;
  arcFetch("/api/auth/code", {
    method: "POST",
    body: {
      email: emailInQuestion.value,
      code: parseInt(payload.data.otp.join("")),
    },
  })
    .then((response) => {
      userStore.logIn(response.token);
    })
    .catch((error) => {
      toastError.add(error);
    })
    .finally(() => {
      codeSubmitting.value = false;
    });
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 pt-6">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        v-show="step === 'cred'"
        :schema="credSchema"
        icon="i-lucide-party-popper"
        :title="$t('login.newAccount')"
        :separator="$t('login.or')"
        :fields="credFields"
        :submit="{
          loading: credSubmitting,
        }"
        @submit="credOnSubmit"
      >
        <template #footer>
          {{ $t("login.haveAccount") }}
          <ULink to="sign-in" class="text-primary font-medium">
            {{ $t("login.signIn") }}.
          </ULink>
          <!--          <UButton @click="step = 'code'" />-->
        </template>
      </UAuthForm>
      <UAuthForm
        v-show="step === 'code'"
        :fields="codeFields"
        icon="i-lucide-rectangle-ellipsis"
        :title="$t('login.codeSent')"
        :submit="{
          loading: codeSubmitting,
        }"
        @submit="codeOnSubmit"
      >
        <template #footer>
          <ULink @click="step = 'cred'">{{ $t("login.wrongEmail") }}</ULink>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>

<style scoped></style>
