import type { Issue, IssueResult, Label, Milestone, Readme } from './type'
import type { IssueQuery } from './query'
import { addSearchParamsToURL, buildQueryString } from '@/utils'
import { useGithubFetch } from '@/composables'

const { VITE_OWNER, VITE_BLOGS_REPO } = import.meta.env

/* 获取README */
export const getReadme = () => {
  return useGithubFetch<Readme>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_OWNER}/readme`)
}

/* 获取issue */
export const getIssues = (query?: IssueQuery) => {
  const path = addSearchParamsToURL(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/issues`, query)

  return useGithubFetch<Issue[]>(path)
}

/* 获取单篇issue */
export const getIssue = (id: string) => {
  return useGithubFetch<Issue>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/issues/${id}`)
}

/* 搜索issue */
export const searchIssues = (q: string, opt?: IssueQuery) => {
  let query = `?q=${q}+repo:${VITE_OWNER}/${VITE_BLOGS_REPO}+is:issue+state:open`
  if (opt)
    query += buildQueryString(opt)

  return useGithubFetch<IssueResult>(`https://api.github.com/search/issues${query}`)
}

/* 标签 */
export const getTags = () => {
  return useGithubFetch<Label[]>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/labels`)
}

/* 里程碑分类 */
export const getMilestones = () => {
  return useGithubFetch<Milestone[]>(`https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/milestones`)
}
