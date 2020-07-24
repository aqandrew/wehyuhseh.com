import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  const { description } = useSiteMetadata()

  return <p>{description}</p>
}
