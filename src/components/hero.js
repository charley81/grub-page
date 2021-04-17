import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

const Hero = () => {
  return (
    <header
      css={css`
        height: 50vh;
        position: relative;

        .hero-img {
          height: 100%;
          border-radius: var(--borderRadius);
        }

        .hero-container {
          position: absolute;
          top: 0;
          left: 0;
          color: var(--colorLight);
          width: 100%;
          height: 100%;
          display: flex;
          justify-container: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.4);
          border-radius: var(--borderRadius);
        }

        .hero-text {
          margin: auto;
          text-align: center;
        }

        h1 {
          margin: 0;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 4rem;
          }

          p {
            font-size: 1.5rem;
          }
        }
      `}
    >
      <StaticImage
        src="../assets/hero-img.jpg"
        alt="some delicious looking food"
        className="hero-img"
        placeholder="tracedSVG"
        layout="fullWidth"
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
