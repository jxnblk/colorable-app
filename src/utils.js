
import chroma from 'chroma-js'

export const isHex = hex => {
  try {
    const color = chroma(hex)
    return !!color
  } catch (e) {
    return false
  }
}

export const isHsl = hsl => {
  try {
    const color = chroma.hsl(hsl)
    return !!color
  } catch (e) {
    return false
  }
}

export const hexToHsl = hex => isHex(hex) ? chroma(hex).hsl() : null

export const hslToHex = hsl => isHsl(hsl) ? chroma.hsl(hsl).hex() : '#808080'

export const getContrast = (a, b) => chroma.contrast(hslToHex(a), hslToHex(b))

export const getLevel = contrast => {
  if (contrast > 7) {
    return 'AAA'
  } else if (contrast > 4.5) {
    return 'AA'
  } else if (contrast > 3) {
    return 'AA Large'
  } else {
    return 'Fail'
  }
}

export const negate = hsl => {
  const [ r, g, b ] = chroma.hsl(hsl).get('rgb')
  const nr = 255 - r
  const ng = 255 - g
  const nb = 255 - b
  const hex = chroma([ nr, ng, nb ]).hex()
  return hex
}

export const mix = chroma.mix

