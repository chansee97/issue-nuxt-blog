import MarkdownIt from 'markdown-it'
import Anchor from 'markdown-it-anchor'
import Toc from 'markdown-it-toc-done-right'

interface TocType {
  html?: string
  ast?: object
}

export const toc = ref<TocType>({})
export const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  // breaks: true,
  xhtmlOut: true,
}).use(Anchor, { level: [1, 2, 3], permalink: true, permalinkBefore: true })
  .use(Toc, {
    listType: 'ul',
    callback(html, ast) {
      toc.value = {
        html,
        ast,
      }
    },
  })

md.renderer.rules.image = (tokens, idx) => {
  const token = tokens[idx]
  const src = token.attrGet('src')
  const alt = token.content
  return `<img src="${src}" alt="${alt}" referrerpolicy='no-referrer' />`
}
