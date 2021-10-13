import { css } from '@emotion/react'
import Image from 'next/image'

import type { Work } from '@/types'

import { useModal } from '@/hooks/useModal'
import { breakpoints } from '@/styles'

type Props = {
  data: Work
  index: number
}

export const WorkItem: React.VFC<Props> = (props) => {
  const { data, index } = props
  const { openModal } = useModal()

  return (
    <>
      <div css={container} onClick={() => openModal(index)}>
        <div css={description}>
          <h3 css={workTitle}>{data.title}</h3>
          <button css={detail}>詳しく見る</button>
        </div>
        <div css={image}>
          <div css={imageInner}>
            <Image
              src={data.image.url}
              width={800}
              height={800}
              alt={data.title}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const container = css`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: transform 0.4s ease-in-out, opacity 0.4s;

  &:hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
`

const description = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  order: 2;
  padding: 1em 2em;

  @media (min-width: ${breakpoints.md}) {
    padding: 2em 2em 1.5em;
  }
`

const workTitle = css`
  font-size: 1.8rem;

  @media (min-width: ${breakpoints.md}) {
    font-size: 2rem;
  }
`

const detail = css`
  font-size: 1.3rem;
  font-weight: 700;
`

const image = css`
  position: relative;
  overflow: hidden;
  order: 1;
  padding-top: 60%;
`

const imageInner = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
