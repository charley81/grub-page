import React from 'react'
import AllRecipes from '../components/all-recipes'
import Layout from '../components/layout'
import SEO from '../components/seo'

const recipesPage = () => {
  return (
    <Layout>
      <SEO title="recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default recipesPage
