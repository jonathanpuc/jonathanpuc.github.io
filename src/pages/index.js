import React from "react"
import styled, { keyframes } from "styled-components"
import { rem, breakpoints } from "@src/theme"
import SEO from "../components/seo"
import "minireset.css/minireset.css"

import Github from "@assets/github.svg"
import Instagram from "@assets/instagram.svg"
import LinkedIn from "@assets/linkedin.svg"

const IndexPage = () => {
  const scrollToContact = () => {
    const contact = document.getElementById("contact")

    contact.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <div>
      <SEO
        title="Home"
        keywords={[
          `jonathan`,
          `puc`,
          `web developer`,
          `react developer`,
          `vegan`,
          `javascript developer`,
        ]}
      />
      <Container>
        <Hero>
          <div>
            <h1>
              Jonathan Puc<OrangeDot>.</OrangeDot>
            </h1>
            <h2>
              Web Developer @{" "}
              <a href="https://today.design" target="_blank">
                Today
              </a>
            </h2>
          </div>
        </Hero>
        <HeroSeparator />
        <Section>
          <Introduction>
            A developer with a knack for adaptability, I take on a ‘modern but
            boring approach’ by adopting tools and frameworks in which are
            modern yet proven, to create web solutions
            <OrangeText>.</OrangeText>
          </Introduction>
        </Section>
        <SectionSeparator>
          <hr />
        </SectionSeparator>
        <Section>
          <SectionHeading>What I've worked on.</SectionHeading>
          <Project>
            <ProjectTitle>
              <h4>Navy Health</h4>
              <hr />
            </ProjectTitle>
            <ProjectDescription>
              An end to end quoting and signup web application for health
              insurance.
            </ProjectDescription>

            <span>Technologies used:</span>
            <ul>
              <li>React</li>
              <li>AWS</li>
              <li>Wordpress (CMS)</li>
            </ul>

            <ProjectLinkOut>
              See it in action{" "}
              <a href="https://quote.navyhealth.com.au/" target="_blank">
                here
              </a>
              .
            </ProjectLinkOut>
          </Project>

          <Project>
            <ProjectTitle>
              <h4>Urban Alley</h4>
              <hr />
            </ProjectTitle>

            <ProjectDescription>
              A React component embedded in Urban Alley’s website for users to
              find stockists of the brewery.
            </ProjectDescription>

            <span>Technologies used:</span>
            <ul>
              <li>React</li>
              <li>Wordpress (CMS)</li>
            </ul>

            <ProjectLinkOut>
              See it in action{" "}
              <a href="https://urbanalley.com.au/urbanalley-stockist/">here</a>.
            </ProjectLinkOut>
          </Project>

          <MoreProjectInfoCTA>
            To find out more about my work,{" "}
            <span onClick={scrollToContact}>drop me a line!</span>
          </MoreProjectInfoCTA>
        </Section>
        <SectionSeparator>
          <hr />
        </SectionSeparator>

        <ToolsSection>
          <div>
            <SectionHeading>Here's what I know.</SectionHeading>

            <ToolsList>
              <ul>
                <li>React</li>
                <li>Node JS</li>
                <li>Vue</li>
                <li>AWS</li>
                <li>GraphQL</li>
                <li>Wordpress</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </ToolsList>
          </div>
        </ToolsSection>

        <SectionSeparator>
          <hr />
        </SectionSeparator>
        <Section>
          <SectionHeading>Works on the side.</SectionHeading>

          <Project>
            <ProjectTitle>
              <h4>Lab45</h4>
              <hr />
            </ProjectTitle>
            <ProjectDescription>
              A web application for F45 fanatics to build and rate custom
              workouts that they’d like to see become the real thing in F45
              training.
            </ProjectDescription>

            <span>Technologies used:</span>
            <ul>
              <li>React</li>
              <li>GraphQL</li>
              <li>Gatsby JS</li>
            </ul>

            {/*<ProjectLinkOut>
              Find the repo{" "}
              <a href="https://github.com/jonathanpuc/lab45">here</a>.
            </ProjectLinkOut>
            */}
          </Project>
        </Section>
        <SectionSeparator>
          <hr />
        </SectionSeparator>
        <ContactSection>
          <SectionHeading id="contact">Come say hi.</SectionHeading>
          <p>jonpuc.dev@gmail.com</p>

          <SocialIcon>
            <a href="https://github.com/jonathanpuc" target="_blank">
              <Github />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              href="https://www.linkedin.com/in/jonathan-puc-549531b3?originalSubdomain=au"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://www.instagram.com/jonathanpucc/" target="_blank">
              <Instagram />
            </a>
          </SocialIcon>
        </ContactSection>
      </Container>
      <div />
    </div>
  )
}

export default IndexPage

const Container = styled.main`
  max-width: ${rem(1200)};
  margin: 0 auto;
`
const Hero = styled.section`
  width: 90%;
  height: 50vh;
  margin: 0 auto;
  > div {
    margin-top: 25vh;
  }
  h1 {
    font-size: ${rem(72)};
    font-weight: bold;
    line-height: 0.95;
    margin-bottom: ${rem(36)};

    @media only screen and (max-width: ${breakpoints[0]}) {
      font-size: ${rem(68)};
    }
  }

  h2 {
    font-family: ${p => p.theme.fonts["open-sans"]};
    font-size: ${rem(35)};

    a {
      font-weight: 600;
      text-decoration: none;
      color: inherit;
    }

    @media only screen and (max-width: ${breakpoints[0]}) {
      font-size: ${rem(30)};
    }
  }
`

const SectionSeparator = styled.div`
  width: 90%;
  margin: 0 auto;
  hr {
    width: ${rem(164)};
    height: 1px;
    background-color: ${p => p.theme.colors.grey};
    border: none;
  }
`

const HeroSeparator = styled.hr`
  width: ${rem(300)};
  margin: 0 auto;
  border: none;
  justify-self: flex-end;
  background-color: ${p => p.theme.colors.grey};
  height: 1px;
`

const Introduction = styled.p`
  font-family: ${p => p.theme.fonts["source-sans"]};
  font-size: ${rem(32)};
  font-weight: 600;

  @media only screen and (max-width: ${breakpoints[0]}) {
    font-size: ${rem(28)};
  }
`

const OrangeText = styled.span`
  color: ${p => p.theme.colors.orange};
`

const Section = styled.section`
  width: 90%;
  margin: ${rem(100)} auto;
  p {
    margin-bottom: ${rem(20)};
  }
`

const SectionHeading = styled.h3`
  color: ${p => p.theme.colors.orange};
  font-weight: 900;
  font-size: ${rem(30)};
  margin-bottom: ${rem(50)};
`

const Project = styled.div`
  margin: ${rem(64)} auto;
  ul {
    margin-top: ${rem(20)};
    list-style-type: disc;
    list-style-position: inside;
    li {
      font-family: ${p => p.theme.fonts["source-sans"]};
      font-weight: bold;
      font-size: ${rem(20)};
    }
  }
`
const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rem(34)};
  h4 {
    font-size: ${rem(28)};
    font-weight: 600;
  }

  hr {
    width: ${rem(164)};
    height: 1px;
    background-color: ${p => p.theme.colors.grey};
    border: none;

    @media only screen and (max-width: ${breakpoints[0]}) {
      width: ${rem(86)};
    }
  }
`

const ProjectDescription = styled.p`
  font-weight: bold;
  font-size: ${rem(20)};
  color: grey;
`

const ProjectLinkOut = styled.p`
  margin-top: ${rem(45)};
  a {
    font-weight: bold;
    color: inherit;
  }
`

const MoreProjectInfoCTA = styled.p`
  font-style: italic;
  span {
    text-decoration: underline;
  }
`

const ToolsList = styled.div`
  width: 90%;
  max-width: ${rem(500)};
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  li {
    color: ${p => p.theme.colors.white};
    font-family: ${p => p.theme.fonts["source-sans"]};
    font-weight: bold;
    font-size: ${rem(32)};
    padding: ${rem(12)};
  }
`

const ToolsSection = styled.section`
  background-color: ${p => p.theme.colors.orange};

  padding: ${rem(60)} 0;
  margin: ${rem(100)} auto;
  ${SectionHeading} {
    color: ${props => props.theme.colors.black};
  }

  > div:first-child {
    width: 90%;
    margin: 0 auto;
  }
`

const ContactSection = styled(Section)`
  ${SectionHeading} {
    margin-bottom: ${rem(25)};
  }
  p {
    font-family: ${p => p.theme.fonts["source-sans"]};
    font-size: ${rem(32)};
    font-weight: bold;
    margin-bottom: ${rem(40)};

    @media only screen and (max-width: ${breakpoints[0]}) {
      font-size: ${rem(25)};
    }
  }
`

const SocialIcon = styled.div`
  width: ${rem(50)};
  display: inline-block;
  margin-right: ${rem(13)};
  @media only screen and (max-width: ${breakpoints[0]}) {
    width: ${rem(40)};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  svg {
    width: 100%;
    fill: currentColor;
  }
`

const flash = keyframes`
  50% {
    visibility: hidden;
  }

  100% {
    visibility: visible;
  }
`

const OrangeDot = styled(OrangeText)`
  animation: ${flash} 500ms linear infinite alternate;
  animation-fill-mode: forwards;
  visibility: hidden;
`
