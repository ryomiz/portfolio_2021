import { css } from '@emotion/react'

import { Section } from '@/components/Section'
// import { WorkItem } from '@/components/unique/works/WorkItem'

type Props = {
  data: Array<{ workTitle: string; src: string }>
}

export const SectionWorks: React.VFC<Props> = (props) => {
  const { data } = props
  return (
    <Section title="Works">
      <div css={grid}>
        {/* {data.map((item) => (
          <WorkItem key={item.workTitle} data={item} />
        ))} */}
      </div>
    </Section>
  )
}

const grid = css`
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(2, 1fr);
`
