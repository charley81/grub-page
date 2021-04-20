import React from 'react'
import AllRecipes from '../components/all-recipes'
import Hero from '../components/hero'
import Layout from '../components/layout'
import FetchData from '../examples/fetch-data'

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <Hero />
      </main>
      <AllRecipes />
    </Layout>
  )
}
