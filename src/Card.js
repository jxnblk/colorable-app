
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Space } from 'rebass'
import round from 'lodash/round'
import TweetButton from './TweetButton'

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
      <Flex align='center'>
        <div className='h2 xh1 bold'>
          {level}
        </div>
        <Space auto />
        <TweetButton
          text='Colorable: color contrast tester'
        />
      </Flex>
    </Box>
  )
}

export default Card

