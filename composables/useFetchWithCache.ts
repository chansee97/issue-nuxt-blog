// ~/composables/useFetchWithCache.ts

import { StorageSerializers } from '@vueuse/core'

export default async <T>(url: string) => {
  // Use sessionStorage to cache data
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  })

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url)

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${url}`,
      })
    }

    // 更新缓存
    cached.value = data.value as T
  }
  else {
    console.info(`Getting value from cache for ${url}`)
  }

  return cached
}
