import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const FetchData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        info: siteMetadata {
          author
          complexData {
            age
            name
          }
          description
          person {
            age
            name
          }
          simpleData
          title
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default FetchData
