import MarkdownIt from 'markdown-it'

export const md = new MarkdownIt()

md.renderer.rules.image = (tokens, idx) => {
  const token = tokens[idx]
  const src = token.attrGet('src')
  const alt = token.content
  return `<img src="${src}" alt="${alt}" referrerpolicy='no-referrer' />`
}
