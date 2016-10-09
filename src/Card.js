
import React from 'react'
import { Box } from 'reflexbox'
import round from 'lodash/round'

const Card = ({
  contrast,
  level
}) => {
  return (
    <Box mb={3}>
      <div className='h1 xh0 xh00 bold'>
        Aa
        <span className='h1 xh0 sfmono'>
          {' ' + round(contrast, 2)}
        </span>
      </div>
      <div className='h2 xh1 bold'>
        {level}
      </div>
    </Box>
  )
}

export default Card

