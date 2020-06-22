import React from 'react'
import PropTypes from 'prop-types'
import chroma from 'chroma-js'
import hello from 'hello-color'
import throttle from 'lodash/throttle'
import {
  hexToHsl,
  hslToHex,
  getContrast,
  getLevel,
  mix
} from '../utils'
import {
  history,
  getParams,
  updatePath
} from '../history'
import Card from '../Card'
import Controls from '../Controls'
import Demo from '../Demo'
import Quote from '../Quote'
import Footer from '../Footer'
import { Helmet } from 'react-helmet'
import css from '../css'

const getHighlightCss = (state) => {
  const text = hslToHex(state.text)
  const base = hslToHex(state.base)
  const dec = `color:${base};background-color:${text}`
  return `::selection {${dec}} ::-moz-selection {${dec}}`
}

const log = throttle((state) => {
  const text = hslToHex(state.text)
  const base = hslToHex(state.base)
  console.log(
    '%c%s%c%s',
    `padding:4px;color:${text};background-color:${base}`,
    ' Aa ',
    'color:black',
    ' ' + text + ' ' + base
  )
}, 500)

class App extends React.Component {
  constructor (props) {
    super()
    const text = props.text ? chroma(props.text).hsl() : [200, 1, 0.2]
    const base = props.base ? chroma(props.base).hsl() : [158, 1, .5]
    this.state = {
      text,
      base
    }
  }

  update = obj => this.setState(obj, state => {
    updatePath(this.state)
    log(this.state)
  })

  random = () => {
    const base = chroma.random().hex()
    const { color } = hello(base)
    this.update({
      base: hexToHsl(base),
      text: hexToHsl(color)
    })
  }

  getChildContext () {
    const text = hslToHex(this.state.text)
    const base = hslToHex(this.state.base)
    const muted = mix(text, base, 7 / 8).hex()

    return {
      rebass: {
        Slider: {
          backgroundColor: muted
        },
        Tabs: {
          borderColor: 'inherit'
        },
        TabItem: {
          paddingLeft: 8,
          paddingRight: 8,
          marginRight: 0,
          color: 'inherit',
          border: 0,
          active: {
            color: base,
            backgroundColor: text,
            border: 0
          }
        }
      }
    }
  }

  handlePopState (location, action) {
    const params = getParams()
    if (!params || action !== 'POP') return
    const text = hexToHsl(params.text)
    const base = hexToHsl(params.base)
    this.setState({
      text,
      base
    })
  }

  componentDidMount () {
    const params = getParams()
    if (!params) return
    const text = hexToHsl(params.text)
    const base = hexToHsl(params.base)
    this.setState({
      text,
      base
    })

    history.listen(this.handlePopState.bind(this))
  }

  render () {
    const {
      base,
      text
    } = this.state

    const contrast = getContrast(text, base)
    const level = getLevel(contrast)

    const sx = {
      root: {
        minHeight: '100vh',
        padding: 48,
        color: hslToHex(text),
        backgroundColor: hslToHex(base),
        transition: 'background-color .1s ease-out'
      }
    }

    const highlightCss = getHighlightCss(this.state)

    return (
      <div style={sx.root}>
        <Helmet>
          <title>Colorable</title>
          <link rel='icon' type='image/png' href='/favicon.png' />
          <link
            href="https://unpkg.com/type-system@1.0.0-beta.2/type-system.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <style dangerouslySetInnerHTML={{ __html: highlightCss }} />
        <Card
          {...this.state}
          contrast={contrast}
          level={level}
        />
        <div className='tall-flip'>
          <Controls
            {...this.state}
            onChange={this.update}
            random={this.random}
            className='tall-bottom'
          />
          <Demo className='tall-top' />
        </div>
        <Quote />
        <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  rebass: PropTypes.object
}

export default App


