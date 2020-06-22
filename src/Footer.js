
import React from 'react'
import { Box, Link } from 'rebass'

const Footer = () => {
  return (
    <footer>
      <Box py={4} mt={4}>
        <Link
          href='https://github.com/jxnblk/colorable'
          sx={{
            color: 'inherit',
            fontSize: 14,
            fontWeight: 'bold',
            mr: 2,
          }}
          children='GitHub' />
        <Link
          href='http://jxnblk.com'
          sx={{
            color: 'inherit',
            fontSize: 14,
            fontWeight: 'bold',
          }}
          children='Made by Jxnblk' />
      </Box>
    </footer>
  )
}

export default Footer

