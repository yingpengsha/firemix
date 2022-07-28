import React, { createElement } from 'react'
import ReactDOMSever from 'react-dom/server'

export default function handleRequest (App: React.ComponentType) {
  return '<!DOCTYPE html>' + ReactDOMSever.renderToString(createElement(App))
}
