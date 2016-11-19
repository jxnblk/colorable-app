
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Space } from 'rebass'
import round from 'lodash/round'
import { format } from 'd3-format'
import TweetButton from './TweetButton'
import Star from './Star'

const Card = ({
  contrast,
  level
}) => {
  return (
    <Flex wrap
      align='baseline'
      mb={1}>
      <div className='h1 xh0 xh00 bold nowrap'>
        Aa
        <span className='h1 xh0 roboto'>
          {' ' + format('.2f')(contrast)}
        </span>
        <Space x={3} />
      </div>
      <div className='h2 xh1 bold'>
        {level}
      </div>
      <Space auto />
      <Star />
      <TweetButton
        text='Colorable: color contrast tester'
      />
    </Flex>
  )
}

export default Card

