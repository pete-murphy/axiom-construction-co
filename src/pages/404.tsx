import React from "react"

import { Layout } from "components/Layout"
import { SEO } from "components/SEO"

export default () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="container">
      <h2>NOT FOUND</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)
