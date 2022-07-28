import FiremixBrowser from 'core/client/FiremixBrowser'
import { GLOBAL_DATA_ID } from 'core/common/FiremixContext'
import { genClientRoutes } from 'core/common/Route'
import { createElement } from 'react'
import { hydrate } from 'react-dom'
import routes from './routes'

window[GLOBAL_DATA_ID] = JSON.parse(document.getElementById(GLOBAL_DATA_ID)?.innerHTML ?? '{}');

(async () => {
  hydrate(createElement(FiremixBrowser, { routes: await genClientRoutes(routes) }), document)
})()
