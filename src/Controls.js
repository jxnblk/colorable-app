
import React from 'react'
import { isDark, getContrast } from './utils'
import ColorInput from './ColorInput'
import ResponsiveTabs from './ResponsiveTabs'

const Controls = ({
  text,
  base,
  onChange
}) => {
  const labels = [
    'Text',
    'Background'
  ]
  const contrast = getContrast(text, base)
  const sx = {
    color: contrast < 3
      ? isDark(base) ? '#fff' : '#000'
      : null
  }

  return (
    <div style={sx}>
      <ResponsiveTabs
        tabLabels={labels}>
        <ColorInput
          name='text'
          label='Text'
          value={text}
          onChange={onChange}
        />
        <ColorInput
          name='base'
          label='Background'
          value={base}
          onChange={onChange}
        />
      </ResponsiveTabs>
    </div>
  )
}

export default Controls

