
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

import Root from './Root'
import App from './App'

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, app)
}

module.exports = (locals, callback) => {
  const root = ReactDOMServer.renderToStaticMarkup(<Root />)
  const html = `<!DOCTYPE html>${root}`

  callback(null, html)
}

