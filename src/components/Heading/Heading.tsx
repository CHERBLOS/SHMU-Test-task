import { memo, type FC } from "react"
import { HeadingStyle } from "../../types"
import "./Heading.scss"

type HeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4",
  text: string,
  theme?: HeadingStyle
}

export const Heading: FC<HeadingProps> = memo(({ tag, text, theme = HeadingStyle.BASIC }) => {
  const Tag = tag || "h1"
  return <Tag className={theme}>{text}</Tag>
})
