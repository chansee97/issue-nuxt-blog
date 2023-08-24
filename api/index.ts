import type { Issue, Label, Milestone } from './type'
import type { IssueQuery } from './query'
import { addSearchParamsToURL } from '@/utils'
import { useFetchWithCache } from '@/composables'

const { VITE_OWNER, VITE_BLOGS_REPO } = import.meta.env

/* 获取README */
export const getReadme = () => {
  return useFetchWithCache<string>(`https://raw.githubusercontent.com/${VITE_OWNER}/${VITE_OWNER}/main/.github/readme.md`)
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

export const searchIssues = (q: string) => {
  const path = addSearchParamsToURL('https://api.github.com/search/issues', { q })

  return useFetchWithCache<Issue[]>(`${path}+repo:${VITE_OWNER}/${VITE_BLOGS_REPO}`)
}

/* 标签 */
export const getTags = () => {
  return useFetchWithCache<Label[]>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/labels`)
}

/* 里程碑分类 */
export const getMilestones = () => {
  return useFetchWithCache<Milestone[]>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/milestones`)
}
