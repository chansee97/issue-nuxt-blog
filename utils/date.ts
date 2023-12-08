import { format, parseISO } from 'date-fns'

export function formattedDate(date: string) {
  if (!date) return ''
  const dateObject = parseISO(date)
  const formattedResult = format(dateObject, 'yyyy/MM/dd ')
  return formattedResult
}

export function insertYearToPosts(posts: any) {
  let currentYear = -1
  return posts.reduce(
    (posts: any, post: any) => {
      const year = new Date(post.created_at).getFullYear()
      if (year !== currentYear && !isNaN(year)) {
        posts.push({
          isMarked: true,
          year,
        })
        currentYear = year
      }
      posts.push(post)
      return posts
    },
    [],
  )
}
