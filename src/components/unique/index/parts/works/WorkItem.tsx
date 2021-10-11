import { css } from '@emotion/react'
import Image from 'next/image'

import type { Work } from '@/types'

type Props = {
  data: Work
}

export const WorkItem: React.VFC<Props> = (props) => {
  const {
    data: { title, image },
  } = props
  return (
    <div css={container}>
      <h3 css={workTitle}>{title}</h3>
      <Image src={image.url} width={420} height={236} alt={title} />
      {/* 作品詳細（モーダル実装） */}
    </div>
  )
}

const container = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #efefef;
`

const workTitle = css`
  order: 2;
  font-size: 2rem;
  line-height: 64px;
  text-indent: 2rem;
`
