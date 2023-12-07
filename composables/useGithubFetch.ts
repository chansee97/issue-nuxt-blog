const { VITE_GITHUB_TOKEN } = import.meta.env

export async function useGithubFetch<T>(url: string) {
  let token = ''

  // 修正token
  if (VITE_GITHUB_TOKEN)
    token = VITE_GITHUB_TOKEN.replace('.', '')

  const { data, error } = await useFetch<T>(url, {
    onRequest({ options }) {
      options.headers = {
        Authorization: `Bearer ${token}`,
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
