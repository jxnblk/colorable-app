
import React from 'react'
import { Box } from 'reflexbox'

const Quote = () => {
  return (
    <Box py={4}>
      <blockquote style={{ margin: 0 }}>
        <p className='h2 bold mx mb1'>
          “If one says ‘Red’ (the name of the color) and there are 50 people listening, it can be expected that there will be 50 reds in their minds. And one can be sure that all these reds will be very different.”
        </p>
        <cite style={{ fontStyle: 'normal' }}>
          – Josef Albers
        </cite>
      </blockquote>
    </Box>
  )
}

const altQuote = (
  <blockquote style={{ margin: 0 }}>
    <p className='h3 bold mx mb1'>
      “In musical compositions, so long as we hear merely single tones, we do not hear music. Hearing music depends on the recognition of the in-between of the tones, or their placing and of their spacing.”
    </p>
    <cite style={{ fontStyle: 'normal' }}>
      – Josef Albers
    </cite>
  </blockquote>
)

export default Quote

