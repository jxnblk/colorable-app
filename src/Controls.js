
import React from 'react'
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
  return (
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
  )
}

export default Controls

