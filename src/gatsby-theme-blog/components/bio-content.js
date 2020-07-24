import React from "react"
import { useStaticQuery } from "gatsby"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  const data = useStaticQuery(graphql`
    query DescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return <p>{data.site.siteMetadata.description}</p>
}
