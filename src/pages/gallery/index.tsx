import React from "react"

import { Layout } from "components/Layout"
import { SEO } from "components/SEO"
import { Gallery, GallerySection } from "components/Gallery"

export default () => (
  <Layout>
    <SEO title="Gallery" />
    <section className="container">
      <h2>Gallery</h2>
      <h3>Construction</h3>
      <Gallery section={GallerySection.Construction} />
      <h3>Interior Remodel</h3>
      <Gallery section={GallerySection.InteriorRemodel} />
      <h3>Site / Septic</h3>
      <Gallery section={GallerySection.SiteSeptic} />
      <h3>Solar</h3>
      <Gallery section={GallerySection.Solar} />
    </section>
  </Layout>
)
