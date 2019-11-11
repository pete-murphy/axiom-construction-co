import React from "react"

import { Layout } from "components/Layout"
import { SEO } from "components/SEO"

export default () => (
  <Layout>
    <SEO title="Error" />
    <section className="container">
      <h2>Error</h2>
      <p>Something went wrong. Please try again later.</p>
    </section>
  </Layout>
)
