import React from "react"
import { css } from "theme-ui"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Footer = () => {
  const { author } = useSiteMetadata()

  return (
    <footer
      css={css({
        mt: 4,
        pt: 3,
      })}
    >
      © 2020 {author}.
    </footer>
  )
}

export default Footer
