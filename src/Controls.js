
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { isDark, getContrast } from './utils'
import ColorInput from './ColorInput'
import ResponsiveTabs from './ResponsiveTabs'
import Button from './Button'

const Controls = ({
  text,
  base,
  onChange,
  random,
  className
}) => {
  const labels = [
    'Text',
    'Background'
  ]
  const contrast = getContrast(text, base)
  const sx = {
    root: {
      color: contrast < 3
        ? isDark(base) ? '#fff' : '#000'
        : null
    }
  }

  const reverse = () => {
    onChange({
      text: base,
      base: text
    })
  }

  return (
    <div style={sx.root} className={className}>
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
      <Flex py={2}>
        <Button
          text={text}
          base={base}
          contrast={contrast}
          onClick={reverse}
          children='Reverse'
        />
        <Box mr={1} />
        <Button
          text={text}
          base={base}
          contrast={contrast}
          onClick={random}
          children='Random'
        />
      </Flex>
    </div>
  )
}

export default Controls

