export function addSearchParamsToURL(url: string, params?: Record<string, any>) {
  if (!params) return url

  const searchParams = new URLSearchParams()

  // 将参数添加到 URLSearchParams 对象中
  for (const key in params)
    searchParams.append(key, params[key])

  // 将 URLSearchParams 对象添加到 URL 中
  const urlObject = new URL(url)
  urlObject.search = searchParams.toString()

  return urlObject.toString()
}
