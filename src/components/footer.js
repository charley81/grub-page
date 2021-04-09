import React from 'react'
import { css } from '@emotion/react'

const Footer = () => {
  return (
    <footer
      css={css`
        background: var(--colorDark);
        color: var(--colorLight);
        text-align: center;
        padding: 1rem;
        line-height: 2;

        a {
          color: var(--colorPrimary);
        }
      `}
    >
      <p>
        &copy; <span>grub-Page {new Date().getFullYear()}</span>
      </p>
      <p>
        Developed by <a href="https:/thegreatdevco.com">The Great Dev Co.</a>
      </p>
    </footer>
  )
}

export default Footer
