export function getReadTime(post: string) {
  return Math.round(post.length / 700) + 1
}
