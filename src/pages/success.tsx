import React from "react"

import { Layout } from "components/Layout"
import { SEO } from "components/SEO"

export default () => (
  <Layout>
    <SEO title="Success" />
    <section className="container">
      <h2>Success</h2>
      <p>Your inquiry was successfully submitted!</p>
    </section>
  </Layout>
)
