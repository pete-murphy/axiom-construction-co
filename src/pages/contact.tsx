import React from "react"

import { Layout } from "components/Layout"
import { ContactForm } from "components/ContactForm"
import { SEO } from "components/SEO"

export default () => (
  <Layout>
    <SEO title="Contact" />
    <section className="container">
      <h2>Contact</h2>
      <ContactForm />
    </section>
  </Layout>
)
