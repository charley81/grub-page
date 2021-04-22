import React from 'react'
import setupTags from '../utils/setup-tags'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div
      css={css`
        h4 {
          margin-top: 2rem;
        }

        .tags-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          a {
            margin: 0.25rem 0;
            font-size: 0.75rem;
          }
        }

        @media (min-width: 992px) {
          .tags-list {
            grid-template-columns: 1fr;
          }
        }
      `}
    >
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link key={index} to={`/${text}`}>
              {text}({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
