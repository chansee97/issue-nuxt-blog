import MarkdownIt from 'markdown-it'
import PluginAnchor from 'markdown-it-anchor'
import PluginToc from 'markdown-it-toc-done-right'
import PluginHighlight from 'markdown-it-highlightjs'
import 'highlight.js/styles/base16/atelier-estuary.css'

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
}).use(PluginAnchor, {
  level: [2, 3, 4],
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: '#',
})
  .use(PluginToc, {
    listType: 'ul',
    callback(html, ast) {
      toc.value = {
        html,
        ast,
      }
    },
  })
  .use(PluginHighlight)

md.renderer.rules.image = (tokens, idx) => {
  const token = tokens[idx]
  const src = token.attrGet('src')
  const alt = token.content
  return `<img src="${src}" alt="${alt}" referrerpolicy='no-referrer' />`
}
