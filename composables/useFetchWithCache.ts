import { StorageSerializers } from '@vueuse/core'

// const { VITE_GITHUB_TOKEN } = import.meta.env

export async function useFetchWithCache<T>(url: string) {
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  })
  if (!cached.value) {
    const { data, error } = await useFetch<T>(url, {
      onRequest({ options }) {
        options.headers = {
          // Authorization: `Bearer ${VITE_GITHUB_TOKEN}`,
        }
      },
    })

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${url}`,
      })
    }
    // 更新缓存
    cached.value = data.value as T
  }

  return {
    data: cached,

  }
}
