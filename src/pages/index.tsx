import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"

import { getColor, Color } from "lib/colors"
import { QuoteNameCard } from "components/QuoteNameCard"
import { Layout } from "components/Layout"
import { SEO } from "components/SEO"
import { Hero } from "components/Hero"
import { PHONE_NUMBER } from "data/constants"
import { css } from "@emotion/core"
import { boxShadow } from "lib/styles"
import { HeroNew } from "components/HeroNew"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Header>
      <HeroNew />
      <div
        css={css`
          grid-row: 2 / 4;
          grid-column: 1 / -1;
          z-index: 1;

          display: flex;
          justify-content: center;
        `}
      >
        <CTALink to="/contact">
          Get a quote <span className="arrow">→</span>
        </CTALink>
      </div>
    </Header>

    <section
      className="container"
      css={css`
        padding-top: 4rem;
        background: white;
      `}
    >
      <h3
        css={css`
          > span {
            display: block;
          }
          font-size: 2.4rem;
          line-height: 1.1em;
          padding-bottom: 1rem;
          color: ${getColor(Color.Blue800)};
        `}
      >
        Shared Values, Better Results
      </h3>
      <P>
        With nearly 100 combined years of building experience, the team at Axiom
        Construction Company understands the choice that homeowners face when
        choosing a builder. We mean what we say when we tell our clients that we{" "}
        <em>build</em> relationships. It means taking a client-centric approach
        to the homebuilding process—from pre-construction consultation{" "}
        <em>all the way</em> to final walkthrough.
      </P>
      <P>
        Axiom Construction Company currently operates in Massachusetts, New
        Hampshire and Maine. If you are building or remodeling a home in the
        lake and mountains region or along the shores of Cape Cod, Axiom is
        ready to make your dreams come true.
      </P>
      <P>
        <strong>
          Interested in working with us?{" "}
          <Link
            to="/contact"
            css={css`
              position: relative;
              color: ${getColor(Color.Gray900)};
              text-decoration: none;
              &:before {
                content: "";
                z-index: -1;
                background: ${getColor(Color.Yellow400)};
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 0.5em;
              }
              &:hover {
                color: ${getColor(Color.Gray900)};
                &:before {
                  background: ${getColor(Color.Gray500)};
                }
              }
            `}
          >
            Send us an email
          </Link>{" "}
          with a brief description of the project, or call us at{" "}
          <a
            css={css`
              position: relative;
              color: ${getColor(Color.Gray900)};
              text-decoration: none;
              &:before {
                content: "";
                z-index: -1;
                background: ${getColor(Color.Yellow400)};
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 0.5em;
              }
              &:hover {
                color: ${getColor(Color.Gray900)};
                &:before {
                  background: ${getColor(Color.Gray500)};
                }
              }
            `}
            href={`tel:${PHONE_NUMBER}`}
          >
            {PHONE_NUMBER}
          </a>
          .
        </strong>
      </P>
    </section>
    <div
      css={css`
        background: ${getColor(Color.Blue800)};
        position: relative;
        color: white;
        margin: 4rem 0 0;
        padding: 2rem 0;
      `}
    >
      <section
        className="container"
        css={css`
          display: grid;
          gap: 2rem;
        `}
      >
        <h2>What our customers say about us</h2>
        <Testimonial>
          <QuoteNameCard name="Bill F." town="Orleans, MA"></QuoteNameCard>
          <p>
            Tim was very responsive. I wish all contractors could work as well.
          </p>
        </Testimonial>
        <Testimonial>
          <QuoteNameCard name="Jeanne M." town="Truro, MA"></QuoteNameCard>
          <p>
            We are exceedingly happy with our installation. They are always
            responsive to our calls and have immediately trouble shooted several
            minor issue which they then corrected at no cost. I recommended them
            to my son!
          </p>
        </Testimonial>
        <Testimonial>
          <QuoteNameCard name="Charles C." town="Quincy, MA"></QuoteNameCard>
          <p>
            I just want to again thank you for your fantastic service. Tim
            explained all of the costs and incentives and most importantly
            handled all of the paperwork and permits which would have been a
            complete roadblock for a novice like myself.
          </p>
        </Testimonial>
        <Testimonial>
          <QuoteNameCard name="Paul S." town="Eastham, MA"></QuoteNameCard>
          <p>
            The pricing was very competitive with bids we got from other
            vendors. We're happy to have been able to work with a firm that is
            local to the house, without having to pay additional to get it.
          </p>
        </Testimonial>
      </section>
    </div>
  </Layout>
)

const CTALink = styled(Link)`
  position: relative;
  background: ${getColor(Color.Yellow400)};
  border-radius: var(--border-radius);
  padding: 1rem 2rem;
  text-decoration: none;
  color: ${getColor(Color.Gray900)};
  transition: 200ms all;
  .arrow {
    display: inline-block;
    position: static;
  }
  &:focus,
  &:hover {
    background: white;
    box-shadow: 0 0 0 3px ${getColor(Color.Yellow400)};
    color: ${getColor(Color.Gray900)};
    .arrow {
      animation: pointright 800ms 200ms 1;
    }
  }
  font-size: 1.2rem;
  font-weight: 600;

  @keyframes pointright {
    from {
      transform: translateX(0);
    }
    40% {
      transform: translateX(3px);
    }
    60% {
      transform: translateX(3px);
    }
    to {
      transform: translateX(0);
    }
  }
`

const Testimonial = styled.article`
  display: grid;
  grid-template-columns: 8rem 1fr;
  margin: 0.5rem auto;
  max-width: var(--max-width-text);
  width: 100%;
  p {
    margin-top: 0;
  }
`

const Header = styled.header`
  display: grid;
  grid-template-rows: 1fr auto auto;
  grid-template-columns: 1fr;
`

const P = styled.p`
  margin: 1rem auto;
  width: var(--max-width-text);
  max-width: 100%;
`
