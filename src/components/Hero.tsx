import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { css } from "@emotion/core"

import { getColor, Color } from "lib/colors"
import { useInterval } from "lib/useInterval"
import { getBreakpoint, Breakpoint } from "lib/layout"

export const Hero = () => {
  const [currentTagIndex, setCurrentTagIndex] = useState(0)

  const getNextIx = (ix: number) => (ix + 1) % TAGS.length
  const isPrev = (ix: number) => getNextIx(currentTagIndex) === ix

  useInterval(() => {
    setCurrentTagIndex(getNextIx)
  }, 6e3)

  const imageData = useStaticQuery(graphql`
    query {
      construction_1: file(
        relativePath: { eq: "gallery/construction/October 29 2019 057.JPG" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      construction_2: file(
        relativePath: { eq: "gallery/construction/IMG_1475.JPG" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      construction_3: file(
        relativePath: { eq: "gallery/construction/IMG_1475.JPG" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      interior_1: file(
        relativePath: {
          eq: "gallery/interior-remodel/December 26 2018 271.JPG"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    // <BackgroundImage
    //   Tag="header"
    //   css={css`
    //     grid-row: 1 / 3;
    //     grid-column: 1 / -1;
    //     width: 100%;
    //     background-position: center;
    //     background-repeat: repeat-y;
    //     background-size: cover;
    //     height: 40vh;
    //   `}
    //   fluid={imageData.blueprints.childImageSharp.fluid}
    // >
    <div
      className="container"
      css={css`
        display: flex;
        height: 100%;
        align-content: center;
        flex-wrap: wrap;
        color: ${getColor(Color.Blue200)};
        font-size: 2rem;
        ${getBreakpoint(Breakpoint.Min600)} {
          align-items: center;
          justify-content: center;
        }
      `}
    >
      <span
        css={css`
          margin-right: 0.4ch;
        `}
      >
        Specializing in
      </span>
      <ul
        css={css`
          display: grid;
        `}
      >
        {TAGS.map((tag, ix) => (
          <li
            key={tag}
            css={css`
              grid-column: 1 / -1;
              grid-row: 1 / -1;
            `}
          >
            <span
              css={css`
                display: block;
                color: ${getColor(Color.Blue100)};
                font-weight: 400;
                opacity: ${currentTagIndex === ix ? 1 : 0};
                transform: translateY(
                  ${currentTagIndex === ix
                    ? "0%"
                    : isPrev(ix)
                    ? "-100%"
                    : "100%"}
                );
                transition: 800ms all;
              `}
            >
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
    // </BackgroundImage>
  )
}

const TAGS = [
  "design & build",
  "site work & septic",
  "solar energy",
  "residential construction",
  "commercial construction",
]
