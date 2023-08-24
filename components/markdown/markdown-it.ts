import MarkdownIt from 'markdown-it'

export const md = new MarkdownIt({
  html: true,
  linkify: true,
  // typographer: true,
  breaks: true,
  xhtmlOut: true,
})

md.renderer.rules.image = (tokens, idx) => {
  const token = tokens[idx]
  const src = token.attrGet('src')
  const alt = token.content
  return `<img src="${src}" alt="${alt}" referrerpolicy='no-referrer' />`
}
