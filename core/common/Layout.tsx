import React from 'react'
import { JsonValue } from 'type-fest'
import { GLOBAL_DATA_ID } from './FiremixContext'

const Layout: React.FunctionComponent<{pageData?: JsonValue}> = (props) => {
  const { children, pageData } = props
  return <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Firemix</title>
    </head>
    {pageData && <template id={GLOBAL_DATA_ID}>{JSON.stringify(pageData)}</template>}
    <body>
      <div id="firemix">{children}</div>
      <script src="/dist/entry.client.global.js"></script>
    </body>
  </html>
}

export default Layout
