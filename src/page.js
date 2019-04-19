import React from "react"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import theme, { fonts, colors } from "@src/theme"
import "minireset.css/minireset.css"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${fonts["open-sans"]};
    color: ${colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4 {
    font-family: ${fonts["source-sans"]};
  }
`

export default ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </>
  )
}
