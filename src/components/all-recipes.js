import React from 'react'
import RecipesList from './recipes-list'
import TagsList from './tags-list'
import { useStaticQuery, graphql } from 'gatsby'

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
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)

  return (
    <div>
      <h4>All Recipes</h4>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  )
}

export default AllRecipes