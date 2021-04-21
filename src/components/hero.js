import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

const Hero = () => {
  return (
    <header
      css={css`
        height: 50vh;
        display: grid;

        .hero-img {
          grid-area: 1/1;
        }

        .hero-container {
          grid-area: 1/1;
          position: relative;
          place-items: center;
          display: grid;
          color: var(--colorLight);
          background: rgba(0, 0, 0, 0.4);
          text-align: center;
        }

        h1 {
          font-size: 3rem;
          margin: 0;
        }

        @media (min-width: 500px) {
          h1 {
            font-size: 4rem;
          }
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 5rem;
          }

          p {
            font-size: 1.5rem;
          }
        }
      `}
    >
      <StaticImage
        src="../assets/images/hero-img.jpg"
        alt="some delicious looking food"
        className="hero-img"
        placeholder="tracedSVG"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
      />
      <div className="hero-container">
        <div className="hero-text">
          <h1>grub-page</h1>
          <p>Passion, Excellence, and Good Damn Food</p>
        </div>
      </div>
    </header>
  )
}

export default Hero
