import type { UseFetchOptions } from 'nuxt/app';

export function useApi<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  const config = useRuntimeConfig();
  const router = useRouter();
  const apiUrl = `${config.public.apiUrl}${url}`;
  return useFetch(apiUrl, {
    ...options,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    $fetch: useNuxtApp().$api,
    onResponse({ response }): Promise<void> | void {
      if (response._data.length === 0) {
        if (import.meta.server) {
          throw showError({
            statusCode: 404
          });
        }
        router.back();
      }
    }
  });
}
