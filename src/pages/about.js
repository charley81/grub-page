import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import RecipesList from '../components/recipes-list'
import SEO from '../components/seo'

const aboutPage = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="about" />
      <main
        className="page"
        css={css`
          .info-content {
            margin-bottom: 2rem;
          }

          .about-section {
            display: grid;
            gap: 2rem;
          }

          .about-img {
            border-radius: var(--borderRadius);
            height: 500px;
          }

          .featured-recipes {
            margin: 5rem auto;
            text-align: center;
          }

          @media (min-width: 768px) {
            .about-section {
              grid-template-columns: 1fr 1fr;
              align-items: center;
            }
          }
        `}
      >
        <section className="about-section">
          {/* about info */}
          <div className="about-info">
            <h3>A lil about me...</h3>
            <p className="info-content">
              I just love to cook. I definitely love to eat so I guess they both
              go hand in hand. I'm just a normal guy with a normal kitchen and
              well you guessed just normal food from my local grocery store. The
              best part about it is taking all this normal and creating
              something amazing from it. Well that's me so check out some of my
              recipes, drop me a line or two or if you're in the area hit me up
              and we'll grab a bear.
            </p>

            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
          {/* about image */}

          <StaticImage
            src="../assets/images/about-img.jpg"
            alt="beer"
            className="about-img"
          />
        </section>
        <section className="featured-recipes">
          <h4>Check Some Featured Recipes</h4>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default aboutPage
