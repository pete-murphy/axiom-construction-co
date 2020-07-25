import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { getColor, Color } from "lib/colors"
import { getBreakpoint, Breakpoint } from "lib/layout"
import styled from "@emotion/styled"
import { boxShadow, containerWidth, containerWidthResst } from "lib/styles"

export const HeroNew = () => {
  const imageData = useStaticQuery(imageQuery)

  return (
    <HeroContainer>
      <HeroLeft>
        <HeroH2>New England&rsquo;s premier building experts</HeroH2>
        <P>
          Specializing in design/build, sitework, solar installation, and
          residential & commercial construction
        </P>
      </HeroLeft>
      <HeroRight>
        <ImageContainer>
          <ImageColumn offsetTop={8}>
            {IMAGE_KEYS_1.map(img => (
              <StyledImg
                key={img}
                fluid={imageData[img].childImageSharp.fluid}
              />
            ))}
          </ImageColumn>
          <ImageColumn offsetTop={0.5}>
            {IMAGE_KEYS_2.map(img => (
              <StyledImg
                key={img}
                fluid={imageData[img].childImageSharp.fluid}
              />
            ))}
          </ImageColumn>
          <ImageColumn offsetTop={0}>
            {IMAGE_KEYS_3.map(img => (
              <StyledImg
                key={img}
                fluid={imageData[img].childImageSharp.fluid}
              />
            ))}
          </ImageColumn>
        </ImageContainer>
      </HeroRight>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  display: grid;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: visible;
  grid-template-columns: 1fr;
  min-height: 60vh;

  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;

  ${getBreakpoint(Breakpoint.Min600)} {
    width: 100%;
    max-width: 100vw;
    grid-template-columns:
      minmax(4rem, 1fr) max(24rem) max(10rem) max(30rem)
      minmax(4rem, 1fr);
  }
`

const HeroH2 = styled.h2`
  color: ${getColor(Color.Blue800)};
  font-size: 3.5rem;
  letter-spacing: -0.04em;
  line-height: 0.95em;
  margin-top: 1rem;
`

const P = styled.p`
  max-width: 100%;
  ${getBreakpoint(Breakpoint.Min600)} {
    max-width: 22rem;
  }
`

const HeroLeft = styled.div`
  grid-row: 1 / 2;
  z-index: 1;
  ${containerWidth}
  ${getBreakpoint(Breakpoint.Min600)} {
    ${containerWidthResst}
    grid-column: 2 / 4;
  }
`
const HeroRight = styled.div`
  display: none;
  grid-row: 1 / 2;
  grid-column: 3 / -1;
  ${getBreakpoint(Breakpoint.Min600)} {
    display: initial;
  }
`

const ImageContainer = styled.div`
  position: relative;
  transform: rotate(5deg);
  grid-column: 2 / -1;

  display: grid;
  grid-template-columns: 2fr 2fr 3fr;
  gap: 1rem;
`

const ImageColumn = styled.div<{ offsetTop: number }>`
  display: grid;
  grid-auto-rows: minmax(5rem, max-content);
  gap: 1rem;
  padding-top: ${props => props.offsetTop}rem;
  /* max-width: 20rem; */
  grid-auto-flow: row;
`

const StyledImg = styled(Img)`
  ${boxShadow(Color.Gray900, 50, 0.5, 0.75, 1.25)}
  border-radius: var(--border-radius);
`

const IMAGE_KEYS_1 = ["construction"]
const IMAGE_KEYS_2 = ["siteWork", "construction2"]
const IMAGE_KEYS_3 = ["solar", "interior"]

const imageQuery = graphql`
  query {
    construction: file(
      relativePath: { eq: "gallery/construction/IMG_1475.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    construction2: file(
      relativePath: { eq: "gallery/construction/IMG_1477.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    interior: file(
      relativePath: { eq: "gallery/interior-remodel/December 26 2018 271.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    siteWork: file(
      relativePath: { eq: "gallery/site-septic/August 23 2019 054.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    solar: file(relativePath: { eq: "gallery/solar/IMG_4853.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
