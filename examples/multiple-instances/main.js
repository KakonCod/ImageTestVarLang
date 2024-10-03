import ImageTestVarLang from '@ImageTestVarLang/core'
import Dashboard from '@ImageTestVarLang/dashboard'
import GoldenRetriever from '@ImageTestVarLang/golden-retriever'

import '@ImageTestVarLang/core/dist/style.css'
import '@ImageTestVarLang/dashboard/dist/style.css'

// Initialise two ImageTestVarLang instances with the GoldenRetriever plugin,
// but with different `id`s.
const a = new ImageTestVarLang({
  id: 'a',
  debug: true,
})
  .use(Dashboard, {
    target: '#a',
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false })

const b = new ImageTestVarLang({
  id: 'b',
  debug: true,
})
  .use(Dashboard, {
    target: '#b',
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false })

window.a = a
window.b = b
