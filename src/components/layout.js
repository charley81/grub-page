import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import globalStyles from '../styles/global-styles'
import { Global, css } from '@emotion/react'

import 'normalize.css'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <main
        css={css`
          max-width: var(--maxWidth);
          margin: auto;
          padding: 1rem;
          margin: 2rem 0;
        `}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
