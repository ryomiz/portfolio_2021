import { css } from '@emotion/react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SectionAbout } from '@/components/section/SectionAbout'
import { SectionContact } from '@/components/section/SectionContact'
import { SectionHistory } from '@/components/section/SectionHistory'
import { SectionWorks } from '@/components/section/SectionWorks'

type Props = {
  data: any
}

export const AssetsIndex: React.VFC<Props> = (props) => {
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
