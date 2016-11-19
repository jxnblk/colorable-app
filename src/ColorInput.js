
import React from 'react'
import chroma from 'chroma-js'
import round from 'lodash/round'
import { Flex, Box } from 'reflexbox'
import { Slider } from 'rebass'
import { hexToHsl, hslToHex, isHsl } from './utils'
import BigInput from './BigInput'

const nanH = h => isNaN(h) ? 0 : h

class ColorInput extends React.Component {
  constructor (props) {
    super()
    const hex = hslToHex(props.value)
    this.state = { hex }
  }

  update = hex => this.setState({ hex })

  handleHexChange = e => {
    const { name } = this.props
    const hsl = hexToHsl(e.target.value)
    const { length } = e.target.value
    this.update(e.target.value)
    if (length === 7 && isHsl(hsl)) {
      this.props.onChange({ [name]: hsl })
    }
  }

  handleHexBlur = e => {
    const { name } = this.props
    const hsl = hexToHsl(e.target.value)
    const { length } = e.target.value
    if ((length === 4 || length === 7) && isHsl(hsl)) {
      this.props.onChange({ [name]: hsl })
    }
  }

  handleChange = i => e => {
    const { name, value } = this.props
    const hsl = [...value]
    hsl[i] = parseFloat(e.target.value)
    this.props.onChange({ [name]: hsl })
  }

  componentWillReceiveProps (next) {
    if (next.value !== this.props.value) {
      const hex = hslToHex(next.value)
      this.update(hex)
    }
  }

  render () {
    const {
      name,
      label,
      value,
      onChange,
      ...props
    } = this.props
    const { hex } = this.state

    const [ h, s, l ] = value

    return (
      <div>
        <BigInput
          {...props}
          name={name}
          label={label}
          value={hex}
          pattern='^#[0-9a-f]'
          onChange={this.handleHexChange}
          onBlur={this.handleHexBlur}
        />
        <Slider
          name='hue'
          label={'Hue ' + Math.round(nanH(h)) + '°'}
          value={nanH(h)}
          max={360}
          pb={0}
          onChange={this.handleChange(0)} />
        <Slider
          name='saturation'
          label={'Saturation ' + round(s, 2)}
          value={s}
          step={1/256}
          max={1}
          pb={0}
          onChange={this.handleChange(1)} />
        <Slider
          name='lightness'
          label={'Lightness ' + round(l, 2)}
          value={l}
          max={1}
          step={1/256}
          pb={0}
          onChange={this.handleChange(2)} />
      </div>
    )
  }
}

export default ColorInput

