
import React from 'react'
import robotomono from './roboto-mono'
import css from './css'

// For dev only
const Root = () => {
  return (
    <html>
      <meta charSet='utf-8' />
      <title>Colorable</title>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <style dangerouslySetInnerHTML={{ __html: robotomono }} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div id='app' />
      <script src='/bundle.js' />
    </html>
  )
}

export default Root

