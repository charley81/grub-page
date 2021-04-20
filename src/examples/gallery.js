import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
  {
    allFile {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <div>
      {nodes.map((item, index) => {
        const image = getImage(item)
        return (
          <article key={index}>
            <GatsbyImage image={image} alt="some pic" />
            <p>single image</p>
          </article>
        )
      })}
    </div>
  )
}

export default Gallery
