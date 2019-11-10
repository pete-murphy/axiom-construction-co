import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { Image } from "../components/Image"
import { SEO } from "../components/SEO"

export default () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)
