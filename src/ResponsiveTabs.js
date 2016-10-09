
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Tabs, TabItem } from 'rebass'

class ResponsiveTabs extends React.Component {
  state = {
    isNarrow: false,
    active: 0
  }

  handleMedia = list => {
    this.setState({ isNarrow: list.matches })
  }

  select = i => {
    this.setState({ active: i })
  }

  componentDidMount () {
    const { breakpoint } = this.props
    const list = window.matchMedia(`(max-width: ${breakpoint})`)
    this.handleMedia(list)
    list.addListener(this.handleMedia)
  }

  render () {
    const { tabLabels } = this.props
    const { active, isNarrow } = this.state

    const children = React.Children.map(this.props.children, (child) => {
      return (
        <Box px={2}>
          {child}
        </Box>
      )
    })
      .filter((child, i) => {
        if (isNarrow) {
          return i === active
        }
        return child
      })

    const tabitems = React.Children.map(this.props.children, (child, i) => {
      const text = tabLabels[i] || `Item ${i + 1}`
      return (
        <TabItem
          key={i}
          active={active === i}
          onClick={e => this.select(i)}
          children={text}
        />
      )
    })

    const tabs = isNarrow
      ? (
        <Tabs>
          {tabitems}
        </Tabs>
      ) : null

    return (
      <div>
        {tabs}
        <Flex mx={-2}>
          {children}
        </Flex>
      </div>
    )
  }
}

ResponsiveTabs.defaultProps = {
  breakpoint: '52em',
  tabLabels: []
}

export default ResponsiveTabs

