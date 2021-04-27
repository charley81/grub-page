import React from 'react'
import AllRecipes from '../components/all-recipes'
import Hero from '../components/hero'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Home() {
  return (
    <Layout>
      <SEO title="home" description="this is the home page" />
      <main className="page">
        <Hero />
      </main>
      <AllRecipes />
    </Layout>
  )
}
