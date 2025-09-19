import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Conteúdo Principal</h1>
      </main>
      <Footer />
    </>
  )
}
