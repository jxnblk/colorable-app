
import React from 'react'
import { Block, NavItem } from 'rebass'

const Footer = () => {
  return (
    <footer>
      <Block py={4} mt={4}>
        <NavItem
          href='http://jxnblk.com'
          px={0}
          children='Made by Jxnblk' />
      </Block>
    </footer>
  )
}

export default Footer

