/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./Header"
import "./layout.scss"
import styled, { css, createGlobalStyle } from "styled-components"
import { getColor, Color } from "lib/colors"

type Props = {
  children: JSX.Element | Array<JSX.Element>
}

export const Layout: FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={css`
          display: grid;
          grid-template-rows: 1fr auto;
          min-height: 100%;
        `}
      >
        <main>{children}</main>
        <footer
          css={css`
            height: 4rem;
            display: grid;
            align-content: center;
            justify-items: center;
          `}
        >
          <p>© {new Date().getFullYear()}, Axiom Construction Company</p>
        </footer>
      </div>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  > * {
    overflow: auto;
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    color: ${getColor(Color.Gray900)};
    a {
      color: ${getColor(Color.Blue800)};
      &:hover {
        color: ${getColor(Color.Blue400)};
      }
    }
  }
`
