import React from 'react'
import Hero from '../components/hero'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <Hero />
      </main>
    </Layout>
  )
}
