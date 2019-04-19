export const pxToRem = (pxSize, rootSize = 16) => {
  return (pxSize / rootSize).toFixed(2)
}

export const rem = pxSize => {
  return `${pxToRem(pxSize)}rem`
}

export const colors = {
  black: "#232323",
  orange: "#FF7C32",
  grey: "#E5E5E5",
  white: "#F9F9F9",
}

export const breakpoints = [
  rem(600), //0
  rem(900), //1
  rem(1200), //2
  rem(1400), //3
]

export const fontSizes = [
  rem(15), //0
  rem(16), //1
  rem(17), //2
  rem(18), //3
  rem(20), //4
  rem(24), //5
  rem(26), //6
  rem(28), //7
  rem(30), //8
  rem(38), //9
]

export const spacePx = [0, 4, 8, 12, 16, 24, 32, 48, 64, 128, 256, 512]
export const space = spacePx.map(i => rem(i))

export const fonts = {
  "source-sans": "'Source Sans Pro', sans-serif",
  "open-sans": "'Open Sans', sans-serif",
}

// Theme Settings
export const settings = {
  background: colors.white,
  color: colors.black,
}

// Export Theme Provider
const Theme = {
  colors,
  breakpoints,
  fontSizes,
  space,
  fonts,
}

export default Theme
