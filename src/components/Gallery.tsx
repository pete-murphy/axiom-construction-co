import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import styled from "@emotion/styled"

export const Gallery = (props: Props) => {
  const imageData = useStaticQuery(graphql`
    query {
      construction: allFile(
        filter: { relativeDirectory: { in: "gallery/construction" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      interiorRemodel: allFile(
        filter: { relativeDirectory: { in: "gallery/interior-remodel" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      siteSeptic: allFile(
        filter: { relativeDirectory: { in: "gallery/site-septic" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      solar: allFile(filter: { relativeDirectory: { in: "gallery/solar" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <GalleryContainer>
      {imageData[props.section].nodes.map((img: any) => (
        <GatsbyImage fluid={img.childImageSharp.fluid} />
      ))}
    </GalleryContainer>
  )
}

type Props = {
  section: GallerySection
}

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 0.5rem;
  margin-bottom: 3rem;
`

export enum GallerySection {
  Construction = "construction",
  InteriorRemodel = "interiorRemodel",
  SiteSeptic = "siteSeptic",
  Solar = "solar",
}
