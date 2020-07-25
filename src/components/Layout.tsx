/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css, Global } from "@emotion/core"

import { getColor, Color } from "lib/colors"
import { Header } from "components/Header"
import "components/Layout.scss"

type Props = {
  children: JSX.Element | Array<JSX.Element>
}

export const Layout = ({ children }: Props) => {
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
    <>
      <Global
        styles={css`
          body {
            color: ${getColor(Color.Gray900)};
            a {
              color: ${getColor(Color.Blue800)};
              &:hover,
              &:focus {
                color: ${getColor(Color.Blue400)};
              }
            }
          }

          input,
          button,
          select,
          textarea {
            border-radius: var(--border-radius);
            border: none;
            outline: none;
            &:focus {
              box-shadow: 0 0 0 0.25rem ${getColor(Color.Blue400)};
            }
          }
          select {
            -webkit-appearance: none;
          }

          a {
            outline: none;
          }

          input,
          textarea,
          select {
            border-radius: var(--border-radius);
            border: none;
            background: ${getColor(Color.Gray200)};
            height: 2.5rem;
            max-width: 100%;
            padding: 0 0.5rem;
            width: 100%;
            &:focus {
              background: transparent;
            }
          }
          textarea {
            padding: 0.5rem;
            height: 10rem;
          }
        `}
      />
      <LayoutContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>
          <main>{children}</main>
          <Footer>
            <p>© {new Date().getFullYear()}, Axiom Construction Company</p>
          </Footer>
        </MainWrapper>
      </LayoutContainer>
    </>
  )
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
`

const Footer = styled.footer`
  height: 4rem;
  display: grid;
  align-content: center;
  justify-items: center;
`

const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  > * {
    overflow: auto;
  }
`
