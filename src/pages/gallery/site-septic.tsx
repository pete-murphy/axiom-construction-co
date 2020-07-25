import React from "react"

import { Layout } from "components/Layout"
import { SEO } from "components/SEO"
import { Gallery, GallerySection } from "components/Gallery"

export default () => (
  <Layout>
    <SEO title="Gallery" />
    <section className="container">
      <h2>Gallery</h2>
      <Gallery section={GallerySection.SiteSeptic} />
    </section>
  </Layout>
)
