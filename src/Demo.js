
import React from 'react'
import { Flex, Box } from 'reflexbox'
import CarbonAd from './CarbonAd'

const Demo = () => {
  return (
    <Box py={4}>
      <Flex wrap>
        <Box auto>
          <p className='mx lh3'>
            Contrast is the difference in luminance or color that makes an object (or its representation in an image or display) distinguishable. In visual perception of the real world, contrast is determined by the difference in the color and brightness of the object and other objects within the same field of view. Because the human visual system is more sensitive to contrast than absolute luminance, we can perceive the world similarly regardless of the huge changes in illumination over the day or from place to place. The maximum contrast of an image is the contrast ratio or dynamic range.
          </p>
        </Box>
        <Box py={3}>
          <CarbonAd />
        </Box>
      </Flex>
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

export default Demo

