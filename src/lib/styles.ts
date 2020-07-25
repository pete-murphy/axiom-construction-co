import { css } from "@emotion/core"
import { Color, transparentize } from "lib/colors"

export const boxShadow = (
  color: Color,
  opacity: number,
  x?: number,
  y?: number,
  blur?: number
) =>
  css`
    box-shadow: ${x || 0}rem ${y || 0}rem ${blur || 4}rem
      ${transparentize(opacity)(color)};
  `

export const containerWidth = css`
  max-width: var(--max-width);
  width: calc(100% - 4rem);
  margin: 1rem auto;
`

export const containerWidthResst = css`
  max-width: 100%;
  width: 100%;
  margin: initial;
`
