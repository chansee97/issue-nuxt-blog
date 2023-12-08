const { VITE_GITHUB_TOKEN } = import.meta.env

export async function useGithubFetch<T>(url: string) {
  const { data, error } = await useFetch<T>(url, {
    onRequest({ options }) {
      options.headers = {
        Authorization: `Bearer ${VITE_GITHUB_TOKEN}`,
      }
    },
  })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from ${url}`,
    })
  }

  return {
    data,
  }
}
