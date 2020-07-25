import React, { useState } from "react"
import { Link } from "gatsby"

import { getBreakpoint, Breakpoint } from "lib/layout"
import { Color, getColor, transparentize } from "lib/colors"
import { Phone } from "components/icons/Phone"
import styled from "@emotion/styled"
import { PHONE_NUMBER } from "data/constants"
import { css } from "@emotion/core"

export const routes = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/gallery",
    title: "Gallery",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/contact",
    title: "Contact",
  },
]

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(s => !s)
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          ${getBreakpoint(Breakpoint.Min900)} {
            display: none;
          }
        `}
      >
        <Button onClick={toggleIsOpen}>
          {isOpen ? <>&times;</> : <>&equiv;</>}
        </Button>
      </div>
      <Nav_ isOpen={isOpen}>
        <ul>
          {routes.map(({ to, title }) => (
            <li key={to}>
              <Link to={to} activeClassName="active">
                {title}
              </Link>
            </li>
          ))}
          <li className="phone">
            <PhoneLink href={`tel:${PHONE_NUMBER}`}>
              <Phone size={16} /> <span>{PHONE_NUMBER}</span>
            </PhoneLink>
          </li>
        </ul>
      </Nav_>
    </>
  )
}

const Button = styled.button`
  font-size: 2rem;
  background: none;
  padding: 0rem 1rem;
  border: none;
  &:focus {
    outline: none;
  }
`

const Nav_ = styled.nav<{ isOpen: boolean }>`
  display: ${p => (p.isOpen ? `flex` : `none`)};
  padding: 1rem 1rem;
  flex-direction: column;
  align-items: flex-end;
  ul {
    display: grid;
    font-size: 1.2rem;
    grid-auto-flow: row;
    align-items: end;
    justify-items: end;
    gap: 0.25rem;
    a {
      display: inline-block;
      padding: 0.5rem;
      border-radius: var(--border-radius);
      text-decoration: none;
      color: ${getColor(Color.Gray500)};
      &:hover,
      &:focus {
        color: ${getColor(Color.Gray900)};
        background: ${transparentize(50)(Color.Yellow400)};
      }
    }
    .active {
      position: relative;
      color: ${getColor(Color.Gray900)};
    }
    /* .phone {
      display: none;
    } */
  }

  grid-column: 1 / -1;

  ${getBreakpoint(Breakpoint.Min900)} {
    display: flex;
    padding: 0;
    grid-row-start: 1;
    grid-column: 2 / -1;
    justify-content: flex-end;
    ul {
      gap: 2rem; /* A little extra breathing room in horizontal layout */
      grid-auto-flow: column;
    }
  }
`

const PhoneLink = styled.a`
  display: inline-grid;
  grid-auto-flow: column;
  gap: 0.25rem;
  align-items: center;
`
