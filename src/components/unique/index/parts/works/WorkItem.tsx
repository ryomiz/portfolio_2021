import { css } from '@emotion/react'
import Image from 'next/image'
import { useState } from 'react'

import type { Work } from '@/types'

import { MyModal } from '@/components/general/modal/MyModal'

type Props = {
  data: Work
}

export const WorkItem: React.VFC<Props> = (props) => {
  const {
    data: { title, image },
  } = props

  const [open, setOpen] = useState<boolean>(false)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <>
      <div css={container} onClick={openModal}>
        <div css={description}>
          <h3 css={workTitle}>{title}</h3>
          <button css={detail}>詳しく見る</button>
        </div>
        <Image src={image.url} width={420} height={236} alt={title} />
      </div>
      <MyModal open={open} closeModal={closeModal} />
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
  padding: 2em 2em 1.5em;
`

const workTitle = css`
  font-size: 2rem;
`

const detail = css`
  font-size: 1.3rem;
  font-weight: 700;
`
