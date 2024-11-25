import type { UseFetchOptions } from 'nuxt/app';

export function useApi<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  const config = useRuntimeConfig();
  // Определение полного URL в зависимости от режима
  const apiUrl = `${config.public.apiUrl}${url}`; // Реальный API
  return useFetch(apiUrl, {
    ...options,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    $fetch: useNuxtApp().$api
  });
}
