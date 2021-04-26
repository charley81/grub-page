import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import setupTags from '../utils/setup-tags'
import { css } from '@emotion/react'

const tagsPage = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)

  return (
    <Layout>
      <main
        className="page"
        css={css`
          section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
          }

          .tag-item {
            display: block;
            background: var(--colorPrimary);
            color: var(--colorLight);
            text-align: center;
            padding: 1rem;
            border-radius: var(--borderRadius);
          }

          h5 {
            margin-bottom: 0;
          }
        `}
      >
        <section>
          {newTags.map((item, index) => {
            const [text, value] = item
            return (
              <Link to={`/${text}`} key={index} className="tag-item">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default tagsPage
