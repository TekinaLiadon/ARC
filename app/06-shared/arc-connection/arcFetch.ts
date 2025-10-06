import { useNuxtApp } from "#app";
import { useUserStore } from "~/05-entities/user/userStore";

export function arcFetch<T = unknown>(
  endpointUrl: string,
  fetchOptions: Parameters<typeof $fetch>[1],
): Promise<T> {
  const config = useRuntimeConfig();
  return $fetch<T>(config.public.castUrl + endpointUrl, {
    ...fetchOptions,

    onRequest({ _, options }) {
      const { $i18n, $pinia } = useNuxtApp();

      if ($i18n) options.headers.set("accept-language", $i18n.locale.value);

      const userStore = useUserStore($pinia);
      if (userStore.token)
        options.headers.set("Authorization", "Bearer " + userStore.token);
    },
  });
}
