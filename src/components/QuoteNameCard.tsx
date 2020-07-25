import React from "react"
import { Mail } from "components/icons/Mail"
import { Color, getColor } from "lib/colors"
import { css } from "@emotion/core"

type Props = {
  name: string
  town: string
}

export const QuoteNameCard = (props: Props) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      color: ${getColor(Color.Blue400)};
    `}
  >
    <Mail />
    <div
      css={css`
        margin-top: 0.5rem;
        font-weight: 800;
      `}
    >
      {props.name}
    </div>
    <div>{props.town}</div>
  </div>
)
