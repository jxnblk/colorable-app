
import React from 'react'
import capitalize from 'lodash/capitalize'

const BigInput = ({
  name,
  label,
  ...props
}) => {
  const sx = {
    root: {
      marginTop: 4,
      marginBottom: 4,
    },
    label: {
      fontSize: 12
    },
    input: {
      display: 'block',
      width: '100%',
      fontFamily: 'SFMono, serif',
      margin: 0,
      padding: 0,
      border: 0,
      borderRadius: 0,
      color: 'inherit',
      backgroundColor: 'transparent',
      WebkitAppearance: 'none',
      appearance: 'none',
      outline: 'none'
    }
  }

  return (
    <div style={sx.root}>
      <label style={sx.label}>
        {label}
        <input
          type='text'
          {...props}
          name={name}
          className='h1 xh0'
          autoComplete='off'
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='off'
          style={sx.input}
        />
      </label>
    </div>
  )
}

export default BigInput
