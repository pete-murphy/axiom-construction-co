import styled from "@emotion/styled"
import React from "react"

import { Color, getColor } from "lib/colors"

export const AboutProfile = (props: Props) => (
  <AboutSection>
    <h3>{props.name}</h3>
    <h4>{props.title}</h4>
    <article dangerouslySetInnerHTML={{ __html: props.html }} />
  </AboutSection>
)

type Props = {
  name: string
  title: string
  html: string
}

const AboutSection = styled.section`
  padding-bottom: 2.5rem;
  margin: 0 auto;
  width: var(--max-width-text);
  h3,
  h4 {
    display: inline-block;
    color: ${getColor(Color.Blue800)};
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  h4 {
    color: ${getColor(Color.Gray500)};
    margin-left: 1rem;
  }
`
