import React from "react"
import { useStaticQuery } from "gatsby"
import { css } from "theme-ui"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query AuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer
      css={css({
        mt: 4,
        pt: 3,
      })}
    >
      © 2020 {data.site.siteMetadata.author}.
    </footer>
  )
}

export default Footer
