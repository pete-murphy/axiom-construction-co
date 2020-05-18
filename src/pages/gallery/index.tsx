import React from "react"

import { Layout } from "components/Layout"
import { SEO } from "components/SEO"
import { Gallery, GalleryRoute } from "components/Gallery"
import { css } from "styled-components"

export default () => (
  <Layout>
    <SEO title="Gallery" />
    <section className="container">
      <h2>Gallery</h2>
      <h3>Construction</h3>
      <Gallery route={GalleryRoute.Construction} />
      <h3
        css={css`
          margin-top: 3rem;
        `}
      >
        Site / Septic
      </h3>
      <Gallery route={GalleryRoute.SiteSeptic} />
    </section>
  </Layout>
)
