export function arcFetch<T = unknown>(
  endpointUrl: string,
  fetchOptions: Parameters<typeof $fetch>[1],
): Promise<T> {
  const config = useRuntimeConfig();
  return $fetch<T>(config.public.castUrl + endpointUrl, fetchOptions);
}
