import { Link } from "gatsby"
import React, { FC } from "react"
import { css } from "styled-components"
import { getColor, Color, transparentize } from "lib/colors"

import { Logo } from "components/Logo"
import { Nav } from "components/Nav"

type Props = {
  siteTitle: string
}

export const Header: FC<Props> = ({ siteTitle }) => (
  <header
    css={css`
      /* outline: 12px solid blue;
      * {
        outline: 1px solid red;
      } */

      width: 100%;
      padding: 1rem 2rem 0.5rem;
      background: ${getColor(Color.Background)};
      z-index: 2;
      box-shadow: 0 0 4rem ${transparentize(10)(Color.Gray900)};
      display: grid;
      grid-template-columns: max-content 1fr;
      grid-template-rows: auto 1fr;
      gap: 1rem;

      h1 {
        svg {
          grid-row-start: 1;
          display: block;
          height: 4rem;
          fill: ${getColor(Color.Blue800)};
        }
      }
    `}
  >
    <h1>
      <Link to="/">
        <Logo />
      </Link>
    </h1>
    <Nav />
  </header>
)
