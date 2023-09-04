import type { Issue, IssueResult, Label, Milestone, Readme } from './type'
import type { IssueQuery } from './query'
import { addSearchParamsToURL, buildQueryString } from '@/utils'
import { useFetchWithCache } from '@/composables'

const { VITE_OWNER, VITE_BLOGS_REPO } = import.meta.env

/* 获取README */
export const getReadme = () => {
  return useFetchWithCache<Readme>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_OWNER}/readme`)
}

/* 获取issue */
export const getIssues = (query?: IssueQuery) => {
  const path = addSearchParamsToURL(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/issues`, query)

  return useFetchWithCache<Issue[]>(path)
}

/* 获取单篇issue */
export const getIssue = (id: string) => {
  return useFetchWithCache<Issue>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/issues/${id}`)
}

/* 搜索issue */
export const searchIssues = (q: string, opt?: IssueQuery) => {
  let query = `?q=${q}+repo:${VITE_OWNER}/${VITE_BLOGS_REPO}+is:issue`
  if (opt)
    query += buildQueryString(opt)

  return useFetchWithCache<IssueResult>(`https://api.github.com/search/issues${query}`)
}

/* 标签 */
export const getTags = () => {
  return useFetchWithCache<Label[]>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/labels`)
}

/* 里程碑分类 */
export const getMilestones = () => {
  return useFetchWithCache<Milestone[]>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/milestones`)
}
