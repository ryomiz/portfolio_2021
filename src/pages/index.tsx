import type { NextPage } from 'next'
import { css } from '@emotion/react'

import { breakpoints, fonts } from '@/styles/settings'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SectionAbout } from '@/components/section/SectionAbout'
import { SectionHistory } from '@/components/section/SectionHistory'

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <article css={article}>
          <SectionAbout />
          <SectionHistory />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default HomePage

const article = css`
  display: flex;
  max-width: 950px;
  flex-direction: column;
  padding: 0 25px;
  padding-top: 200px;
  padding-bottom: 120px;
  margin: 0 auto;
  gap: 240px;
`
