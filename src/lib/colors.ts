export enum Color {
  Blue100 = "Blue100",
  Blue200 = "Blue200",
  Blue400 = "Blue400",
  Blue600 = "Blue600",
  Blue800 = "Blue800",
  Background = "Background",
  Gray200 = "Gray200",
  Gray500 = "Gray500",
  Gray700 = "Gray700",
  Gray900 = "Gray900",
  Orange400 = "Orange400",
  Yellow400 = "Yellow400",
  Indigo900 = "Indigo900",
}

const colorsMap: { [key in Color]: string } = {
  [Color.Blue100]: "#EBF8FF",
  [Color.Blue200]: "#BEE3F8",
  [Color.Blue400]: "#63B3ED",
  [Color.Blue600]: "#3182CE",
  [Color.Blue800]: "#2C5282",
  [Color.Background]: "#FFFFFF",
  [Color.Gray200]: "#EDF2F7",
  [Color.Gray500]: "#A0AEC0",
  [Color.Gray700]: "#4A5568",
  [Color.Gray900]: "#1A202C",
  [Color.Orange400]: "#F6AD55",
  [Color.Yellow400]: "#F6E05E",
  [Color.Indigo900]: "#3C366B",
}

const clamp = (min: number, max: number) => (n: number) =>
  Math.min(max, Math.max(min, n))

export const getColor = (color: Color) => colorsMap[color]

/**
 *
 * @param opacity number between 0-100
 */
export const transparentize = (opacity = 0) => (color: Color) => {
  const opacity_ = clamp(0, 255)(Math.floor((opacity / 100) * 255))
  return `${getColor(color)}${opacity_
    .toString(16)
    .toUpperCase()
    .padStart(2, "0")}`
}
