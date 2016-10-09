
import React from 'react'
import css from 'type-system'
// import roboto from './roboto-mono'
import sfmono from './sfmono'
import basecss from './css'

const Root = () => {
  return (
    <html>
      <meta charSet='utf-8' />
      <title>Color</title>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <style dangerouslySetInnerHTML={{ __html: sfmono }} />
      <style dangerouslySetInnerHTML={{ __html: basecss }} />
      <div id='app' />
      <script src='/bundle.js' />
    </html>
  )
}

export default Root

