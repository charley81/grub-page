import React from 'react'
import RecipesList from './recipes-list'
import TagsList from './tags-list'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/react'

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <div
      css={css`
        display: grid;
        gap: 2rem 1rem;

        @media (min-width: 992px) {
          grid-template-columns: 200px 1fr;
          gap: 1rem;
        }
      `}
    >
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  )
}

export default AllRecipes
