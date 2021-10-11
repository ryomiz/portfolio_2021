import { css } from '@emotion/react'
import Image from 'next/image'

type Props = {
  data: {
    workTitle: string
    src: string
  }
}

export const WorkItem: React.VFC<Props> = (props) => {
  const {
    data: { workTitle, src },
  } = props
  return (
    <div css={container}>
      <h3 css={title}>{workTitle}</h3>
      <Image src={src} width={420} height={236} alt={workTitle} />
      {/* 作品詳細（モーダル実装） */}
    </div>
  )
}

const container = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #efefef;
`

const title = css`
  order: 2;
  font-size: 2rem;
  line-height: 64px;
  text-indent: 2rem;
`
