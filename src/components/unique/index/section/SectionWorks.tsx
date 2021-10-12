import { css } from '@emotion/react'

import { WorkDetailModal } from '../parts/works/WorkDetailModal'

import { Section } from '@/components/layout/Section'
import { WorkItem } from '@/components/unique/index/parts/works/WorkItem'
import { useModal } from '@/hooks/useModal'
import { Work } from '@/types'

type Props = {
  data: {
    data: {
      works: Array<Work>
    }
  }
}

export const SectionWorks: React.VFC<Props> = (props) => {
  const {
    data: {
      data: { works },
    },
  } = props

  const {
    modal: { modalIndex },
  } = useModal()

  return (
    <Section title="Works">
      <div css={grid}>
        {works.map((item, index: number) => (
          <WorkItem key={item.title} data={item} index={index} />
        ))}
      </div>
      <WorkDetailModal data={works[modalIndex]} />
    </Section>
  )
}

const grid = css`
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(2, 1fr);
`
