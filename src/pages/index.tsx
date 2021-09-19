import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { css } from '@emotion/react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SectionAbout } from '@/components/section/SectionAbout'
import { SectionHistory } from '@/components/section/SectionHistory'
import { SectionWorks } from '@/components/section/SectionWorks'
import { SectionContact } from '@/components/section/SectionContact'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const HomePage: NextPage<Props> = (props) => {
  const { data } = props
  console.log(data)
  return (
    <>
      <Header />
      <main>
        <article css={article}>
          <SectionAbout />
          <SectionHistory />
          <SectionWorks data={data} />
          <SectionContact />
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

import json from 'src/data.json'

// GetStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const data = json

  return {
    props: { data },
  }
}
