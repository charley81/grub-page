import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import slugify from 'slugify'

const RecipesList = ({ recipes = [] }) => {
  return (
    <div
      css={css`
        display: grid;
        gap: 2rem 1rem;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

        .recipe {
          display: block;

          h4 {
            margin-bottom: 0.5rem;
            color: var(--colorDark);
          }
        }

        .recipe-img {
          height: 15rem;
          border-radius: var(--borderRadius);
        }

        @media (min-width: 992px) {
          margin-top: 2rem;
        }
      `}
    >
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const imagePath = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage image={imagePath} alt={title} className="recipe-img" />
            <h4>{title}</h4>
            <p>
              Prep: {prepTime}min | Cook: {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
