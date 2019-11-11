
const fs = require('fs')
const zlib = require('zlib')
const path = require('path')
const React = require('react')
const chroma = require('chroma-js')
const { renderToString, renderToStaticMarkup } = require('react-dom/server')
const url = require('url')
const pathToRegexp = require('path-to-regexp')
const Html = require('./Html')
const App = require('./public/App').default
const image = require('./image')

const createParams = keys => parts => {
  if (!Array.isArray(parts)) {
    return null
  }

  const [ full, ...rest ] = parts
  const params = rest.reduce((obj, b, i) => {
    const key = keys[i].name
    obj[key] = b
    return obj
  }, {})
  return params
}

const getParams = (req) => {
  const keys = []
  const reg = pathToRegexp('/:text/:base/:format?', keys)
  const parts = reg.exec(req.url)
  const params = createParams(keys)(parts)
  return params
}

const getBundle = (res) => {
  const filename = path.join(process.cwd(), 'public/bundle.js')
  const stream = fs.createReadStream(filename)
  const gzip = zlib.createGzip()

  res.writeHead(200, {'Content-Type': 'application/javascript', 'Content-Encoding': 'gzip'})

  stream.pipe(gzip).pipe(res)
}

const robots = (res) => {
  res.end(`User-agent: Twitterbot
Disallow:`)
}

module.exports = function (req, res) {
  const params = getParams(req) || {}

  console.log(params, req.url)
  if (/bundle\.js$/.test(req.url)) {
    console.log('get bundle', req.url)
    getBundle(res)
    return
  } else if (/favicon\.png/.test(req.url)) {
    image(Object.assign({}, params, { res, type: 'favicon' }))
  } else if (params && /png$/.test(params.format)) {
    image(Object.assign({}, params, { res }))
    return
    return
  } else if (/robots/.test(req.url)) {
    robots(res)
    return
  } else {
    const app = renderToString(React.createElement(App, params))
    params.app = app
    const root = renderToStaticMarkup(React.createElement(Html, params))
    const html = `<!DOCTYPE html>${root}`

    res.writeHead(200, {'Content-Type': 'text/html', 'Content-Encoding': 'gzip'})
    zlib.gzip(html, (err, result) => {
      res.end(result)
    })
  }
}

