import { css } from '@emotion/react'

import { Section } from '@/components/layout/Section'
import { WorkItem } from '@/components/unique/index/parts/works/WorkItem'
import { Work } from '@/types'

type Props = {
  data: {
    data: {
      works: Array<Work>
    }
  }
}

const works = [
  {
    title: 'My Portfolio',
    image: {
      url: 'https://media.graphcms.com/CHgzbh0sQIa17tzapHSe',
    },
  },
]

export const SectionWorks: React.VFC<Props> = (props) => {
  // const {
  //   data: {
  //     data: { works },
  //   },
  // } = props
  return (
    <Section title="Works">
      <div css={grid}>
        {works.map((item) => (
          <WorkItem key={item.title} data={item} />
        ))}
      </div>
    </Section>
  )
}

const grid = css`
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(2, 1fr);
`
