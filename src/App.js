
import React from 'react'
import chroma from 'chroma-js'
import {
  hexToHsl,
  hslToHex,
  getContrast,
  getLevel,
  mix
} from './utils'
import {
  history,
  getParams,
  updatePath
} from './history'
import Card from './Card'
import Controls from './Controls'
import Demo from './Demo'
import Footer from './Footer'

// base: '#fff9b0'

const getHighlightCss = (state) => {
  const text = hslToHex(state.text)
  const base = hslToHex(state.base)
  const dec = `color:${base};background-color:${text}`
  return `::selection {${dec}} ::-moz-selection {${dec}}`
}

class App extends React.Component {
  constructor (props) {
    super()
    const text = props.text ? chroma(props.text).hsl() : [0, 0, 0]
    const base = props.base ? chroma(props.base).hsl() : [55, 1, .845]
    this.state = {
      text,
      base
    }
  }

  update = obj => this.setState(obj, state => {
    updatePath(this.state)
  })

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
    // window.addEventListener('popstate', this.handlePopState)
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
        backgroundColor: hslToHex(base)
      }
    }

    const highlightCss = getHighlightCss(this.state)

    return (
      <div style={sx.root}>
        <style dangerouslySetInnerHTML={{ __html: highlightCss }} />
        <Card
          {...this.state}
          contrast={contrast}
          level={level}
        />
        <Controls
          {...this.state}
          onChange={this.update}
        />
        <Demo />
        <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  rebass: React.PropTypes.object
}

export default App
