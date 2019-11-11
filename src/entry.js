
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

import App from './App'
import { getParams } from './history'

if (typeof document !== 'undefined') {
  const params = getParams()
  ReactDOM.render(<App {...params} />, app)
}

module.exports = (locals, callback) => {
  // const root = ReactDOMServer.renderToStaticMarkup(<Root />)
  const html = `<!DOCTYPE html>ROOT`

  callback(null, html)
}

