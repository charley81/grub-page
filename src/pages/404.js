import React from 'react'
import { css } from '@emotion/react'
import Layout from '../components/layout'

const errorPage = () => {
  return (
    <Layout>
      <main
        css={css`
          text-align: center;
          margin-top: 4rem;
        `}
      >
        <h1>404</h1>
        <h3>page not found...</h3>
      </main>
    </Layout>
  )
}

export default errorPage
