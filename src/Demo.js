
import React from 'react'
import { Flex, Box } from 'reflexbox'
import CarbonAd from './CarbonAd'

const Demo = ({ className }) => {
  return (
    <Flex wrap my={1} className={className}>
      <Box auto>
        <p className='mx lh3'>
          Contrast is the difference in luminance or color that makes an object (or its representation in an image or display) distinguishable. In visual perception of the real world, contrast is determined by the difference in the color and brightness of the object and other objects within the same field of view.
        </p>
      </Box>
      <Box py={2}>
        <CarbonAd />
      </Box>
    </Flex>
  )
}
// Because the human visual system is more sensitive to contrast than absolute luminance, we can perceive the world similarly regardless of the huge changes in illumination over the day or from place to place. The maximum contrast of an image is the contrast ratio or dynamic range.

export default Demo

