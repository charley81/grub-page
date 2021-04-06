import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import globalStyles from '../styles/global-styles'
import { Global } from '@emotion/react'

import 'normalize.css'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
