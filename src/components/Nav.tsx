import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { getBreakpoint, Breakpoint } from "lib/layout"
import { Color, getColor } from "lib/colors"
import { Phone } from "./icons/Phone"

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

export const phoneNumber = {
  href: "tel:1-508-247-0070",
  pretty: "(508) 247-0070",
}

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
            <a href={phoneNumber.href}>
              <Phone size={16} /> {phoneNumber.pretty}
            </a>
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
    text-align: right;

    font-size: 1.2rem;
    grid-auto-flow: row;
    gap: 1rem;
    align-items: flex-end;
    a {
      text-decoration: none;
      color: ${getColor(Color.Gray500)};
      &:hover,
      &:focus {
        color: ${getColor(Color.Gray900)};
      }
    }
    .active {
      position: relative;
      color: ${getColor(Color.Gray900)};
      &:before {
        content: "";
        z-index: -1;
        background: ${getColor(Color.Yellow400)};
        position: absolute;
        bottom: 0;
        width: 100%;
        transform: scale(1.2);
        height: 0.5em;
      }
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
      /* .phone {
        display: initial;
      } */
    }
  }
`
