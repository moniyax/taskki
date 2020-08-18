const mainFont =
  '"Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

const fonts = {
  body: mainFont,
  heading: mainFont,
  monospace: 'Menlo, monospace',
}

const space = [
  0,
  4,
  8,
  12,
  16,
  24,
  32,
  48,
  64,
  96,
  128,
  192,
  256,
  384,
  512,
  640,
  768,
]
const sizes = space

const fontSizes = [10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72]
fontSizes.body = fontSizes[2]
fontSizes.display = fontSizes[5]

const borderWidths = [0, 1, 2, 3, 4, 5, 6]
const radii = [0, 2, 3, 4, 6, 8, 12, 16]

const fontWeights = [400, 500, 600, 700]

const letterSpacings = [0.5, 1, 2]

const shadows = [
  '0 1px 3px hsla(0,0%,0%,.2)',
  '0 4px 6px hsla(0,0%,0%,.2)',
  '0 5px 15px hsla(0,0%,0%,.2)',
  '0 10px 24px hsla(0,0%,0%,.2)',
  '0 15px 35px hsla(0,0%,0%,.2)',

  '0 1px 3px hsla(0,0%,0%,.12),0 1px 2px hsla(0,0%,0%,.24)',
  '0 3px 6px hsla(0,0%,0%,.15),0 2px 4px hsla(0,0%,0%,.12)',
  '0 3px 6px hsla(0,0%,0%,.10),0 10px 20px hsla(0,0%,0%,.15)',
  '0 15px 25px hsla(0,0%,0%,.15),0 5px 10px hsla(0,0%,0%,.5)',
  '0 20px 40px hsla(0,0%,0%,.2)',
]

const blues = [
  'hsl(207deg 50% 15%)',
  'hsl(207deg 59% 28%)',
  'hsl(207deg 61% 39%)',
  'hsl(207deg 57% 49%)',
  'hsl(207deg 58% 62%)',
  'hsl(206deg 75% 81%)',
  'hsl(206deg 100% 97%)',
]

const greys = [
  'hsl(213deg 12% 15%)',
  'hsl(210deg 10% 23%)',
  'hsl(187deg 5% 30%)',
  'hsl(210deg 7% 56%)',
  'hsl(210deg 11% 71%)',
  'hsl(210deg 14% 83%)',
  'hsl(210deg 14% 89%)',
  'hsl(210deg 16% 93%)',
  'hsl(210deg 17% 95%)',
  'hsl(210deg 17% 98%)',
]

const cyanGreens = [
  'hsl(179deg 53% 18%)',
  'hsl(174deg 53% 26%)',
  'hsl(174deg 50% 38%)',
  'hsl(174deg 45% 47%)',
  'hsl(177deg 56% 65%)',
  'hsl(176deg 67% 80%)',
  'hsl(177deg 100% 95%)',
]

const greens = [
  'rgb(23, 80, 56)',
  'rgb(31, 118, 67)',
  'rgb(45, 156, 90)',
  'rgb(64, 192, 117)',
  'rgb(120, 216, 161)',
  'rgb(170, 237, 194)',
  'rgb(228, 252, 236)',
]

const yellows = [
  'rgb(91, 71, 24)',
  'rgb(139, 108, 39)',
  'rgb(201, 164, 70)',
  'rgb(243, 201, 108)',
  'rgb(249, 225, 164)',
  'rgb(253, 243, 216)',
  'rgb(255, 252, 244)',
]

const reds = [
  'rgb(96, 25, 26)',
  'rgb(135, 38, 31)',
  'rgb(181, 34, 38)',
  'rgb(218, 50, 54)',
  'rgb(226, 101, 103)',
  'rgb(241, 169, 170)',
  'rgb(251, 232, 232)',
]

const neutral = greys
const n = neutral
const prime = reds
const danger = reds

const accent = cyanGreens
const accent2 = greens

const dark = {
  text: neutral[5],
  background: neutral[0],
  primary: accent[2],
  neutral,
  n,
  prime,
  accent,
  accent2,
  danger,
}

const defaultColors = {
  text: neutral[0],
  background: neutral[5],
  primary: accent[2],
  neutral,
  prime,
  n,
  accent,
  accent2,
  danger,
}

const colors = {
  ...defaultColors,
  modes: {
    dark,
  },
}

const theme = {
  fonts,
  colors,
  sizes,
  space,
  fontSizes,
  fontWeights,
  borderWidths,
  radii,
  letterSpacings,
  shadows,
}

export default theme
