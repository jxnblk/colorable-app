
import React from 'react'
import { hslToHex, isDark } from './utils'

const Button = ({
  text,
  base,
  contrast = 4,
  style,
  ...props
}) => {
  const color = contrast < 3
      ? (isDark(text) ? '#fff' : '#000')
      : hslToHex(base)

  const sx = {
    fontFamily: 'inherit',
    fontSize: 14,
    fontWeight: 600,
    padding: 8,
    borderRadius: 3,
    border: 0,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    color,
    backgroundColor: hslToHex(text),
    ...style
  }

  return (
    <button
      {...props}
      style={sx}
    />
  )
}

export default Button

