
import createBrowserHistory from 'history/createBrowserHistory'
import pathToRegexp from 'path-to-regexp'
import throttle from 'lodash/throttle'
import { hslToHex } from './utils'

const isClient = typeof document !== 'undefined'
export const history = isClient ? createBrowserHistory() : {}

const createParams = keys => parts => {
  if (!Array.isArray(parts)) {
    return null
  }

  const [ full, ...rest ] = parts
  const params = rest.reduce((obj, b, i) => {
    const key = keys[i].name
    obj[key] = b
    return obj
  }, {})
  return params
}

export const getParams = () => {
  const { pathname } = history.location
  const keys = []
  const reg = pathToRegexp('/:text/:base/:format?', keys)
  const parts = reg.exec(pathname)
  const params = createParams(keys)(parts)

  return params
}

export const updatePath = throttle((state) => {
  const text = hslToHex(state.text).replace(/^#/, '')
  const base = hslToHex(state.base).replace(/^#/, '')

  history.push(`/${text}/${base}`, state)
}, 200)

