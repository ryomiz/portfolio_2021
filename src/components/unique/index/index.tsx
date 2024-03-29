import { css } from '@emotion/react'

import type { Work } from '@/types'

import { Layout } from '@/components/layout/Layout'
import { SectionAbout } from '@/components/unique/index/section/SectionAbout'
import { SectionContact } from '@/components/unique/index/section/SectionContact'
import { SectionHistory } from '@/components/unique/index/section/SectionHistory'
import { SectionWorks } from '@/components/unique/index/section/SectionWorks'
import { breakpoints } from '@/styles'

type Props = {
  data: {
    data: {
      works: Array<Work>
    }
  }
}

export const AssetsIndex: React.VFC<Props> = (props) => {
  const { data } = props
  return (
    <>
      <Layout>
        <main>
          <article css={article}>
            <SectionAbout />
            <SectionHistory />
            <SectionWorks data={data} />
            <SectionContact />
          </article>
        </main>
      </Layout>
    </>
  )
}
const article = css`
  display: flex;
  max-width: 400px;
  flex-direction: column;
  padding: 0 25px;
  padding-bottom: 160px;
  margin: 0 auto;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    max-width: 950px;
    padding-top: 40px;
    padding-bottom: 200px;
    gap: 100px;
  }
`
