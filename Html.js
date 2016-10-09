
const fs = require('fs')
const React = require('react')
const h = React.createElement
const chroma = require('chroma-js')
const round = require('lodash/round')
const css = require('./src/css')
const sfmono = require('./src/sfmono')
const typesys = fs.readFileSync('./node_modules/type-system/type-system.css', 'utf8')

const Html = ({
  text = '000000',
  base = 'fff9b0'
}) => {
  const contrast = chroma.contrast('#' + text, '#' + base)
  return (
    h('html', {},
      h('head', {},
        h('meta', { charSet: 'utf-8' }),
        h('title', {}, 'Colorable beta'),
        h('meta', {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1'
        }),
        h('meta', {
          name: 'description',
          content: 'Color contrast tester'
        }),
        ...createCard({ text, base, contrast }),
        h('style', {
          dangerouslySetInnerHTML: {
            __html: typesys + sfmono + css
          }
        })
      ),
      h('body', {},
        h('div', { id: 'app' }, `Aa ${contrast}`),
        h('script', { src: '/bundle.js' }),
        h('script', {
          dangerouslySetInnerHTML: {
            __html: '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");'
          }
        })
      )
    )
  )
}

const createCard = ({
  text,
  base,
  contrast
}) => {
  return [
    h('meta', {
      name: 'twitter:card',
      content: 'summary_large_image'
    }),
    h('meta', {
      name: 'twitter:site',
      content: '@jxnblk'
    }),
    h('meta', {
      name: 'twitter:title',
      content: `#${text} on #${base}`
    }),
    h('meta', {
      name: 'twitter:description',
      content: `${round(contrast, 2)}:1 contrast ratio`
    }),
    h('meta', {
      name: 'twitter:image',
      content: `/${text}/${base}/png`
      // 'http://jxnblk.s3.amazonaws.com/Aa.png'
    }),
  ]
}

module.exports = Html

