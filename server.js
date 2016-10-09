
const fs = require('fs')
const zlib = require('zlib')
const path = require('path')
const React = require('react')
const chroma = require('chroma-js')
const { renderToStaticMarkup } = require('react-dom/server')
const url = require('url')
const pathToRegexp = require('path-to-regexp')
const Html = require('./Html')
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
  const filename = path.join(process.cwd(), 'build/bundle.js')
  const stream = fs.createReadStream(filename)
  const gzip = zlib.createGzip()

  res.writeHead(200, {'Content-Type': 'application/javascript', 'Content-Encoding': 'gzip'})

  stream.pipe(gzip).pipe(res)
}

module.exports = function (req, res) {
  const params = getParams(req) || {}

  if (/bundle\.js$/.test(req.url)) {
    getBundle(res)
    return
  } else if (params && params.format === 'png') {
    image(Object.assign({}, params, { res }))
    return
  } else {
    const root = renderToStaticMarkup(React.createElement(Html, params))
    const html = `<!DOCTYPE html>${root}`

    res.writeHead(200, {'Content-Type': 'text/html', 'Content-Encoding': 'gzip'})
    zlib.gzip(html, (err, result) => {
      res.end(result)
    })
  }
}

