
import React from 'react'
import { Flex, Box } from 'reflexbox'
import round from 'lodash/round'
import { format } from 'd3-format'
import TweetButton from './TweetButton'

const Card = ({
  contrast,
  level
}) => {
  return (
    <Flex
      flexWrap='wrap'
      alignItems='baseline'
      mb={1}>
      <div className='h1 xh0 xh00 bold nowrap'>
        Aa
        <span className='h1 xh0 roboto'>
          {' ' + format('.2f')(contrast)}
        </span>
        <Box mx={3} />
      </div>
      <div className='h2 xh1 bold'>
        {level}
      </div>
      <Box mx='auto' />
      <TweetButton
        text='Colorable: color contrast tester'
      />
    </Flex>
  )
}

export default Card

