import React from "react"

import { Layout } from "components/Layout"
import { SEO } from "components/SEO"
import { graphql, useStaticQuery } from "gatsby"
import { AboutProfile } from "components/AboutProfile"

export default () => {
  const aboutData = useStaticQuery(aboutQuery)
  return (
    <Layout>
      <SEO title="About" />
      <section className="container">
        <h2>Our Team</h2>
        {sortByPosition(aboutData.allMarkdownRemark.nodes).map(
          (node: AboutNode) => (
            <AboutProfile
              key={node.id}
              name={node.frontmatter.name}
              title={node.frontmatter.title}
              html={node.html}
            />
          )
        )}
      </section>
    </Layout>
  )
}

const sortByPosition = (nodes: Array<AboutNode>): Array<AboutNode> =>
  [...nodes].sort(
    (a, b) => Number(a.frontmatter.position) - Number(b.frontmatter.position)
  )

export type AboutNode = {
  id: string
  html: string
  frontmatter: {
    position: string
    name: string
    title: string
  }
}

const aboutQuery = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      nodes {
        id
        html
        frontmatter {
          position
          name
          title
        }
      }
    }
  }
`
