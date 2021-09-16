import type { NextPage } from 'next'
import { css } from '@emotion/react'

import { breakpoints, fonts } from '@/styles/settings'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default HomePage
