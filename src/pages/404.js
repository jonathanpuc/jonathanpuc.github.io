import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import { rem } from "@src/theme"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <h1>
      404<WhiteDot>.</WhiteDot>
    </h1>
    <p>Not found</p>
    <Link to="/">Go back</Link>
  </Container>
)

const Container = styled.div`
  background-color: ${p => p.theme.colors.orange};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: ${rem(150)};
    font-weight: bold;
    color: ${p => p.theme.colors.white};
  }
  p {
    font-size: ${rem(65)};
  }

  a {
    color: ${p => p.theme.colors.white};
  }
`

export default NotFoundPage

const flash = keyframes`
  50% {
    visibility: hidden;
  }

  100% {
    visibility: visible;
  }
`

const WhiteDot = styled.span`
  animation: ${flash} 500ms linear infinite alternate;
  animation-fill-mode: forwards;
  visibility: hidden;
`
