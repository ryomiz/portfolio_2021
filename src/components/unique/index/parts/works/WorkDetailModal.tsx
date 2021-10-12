import { css } from '@emotion/react'
import Image from 'next/image'
import { IoLogoGithub } from 'react-icons/io5'
import Modal from 'react-responsive-modal'

import type { Work } from '@/types'

import { useModal } from '@/hooks/useModal'
import { colors } from '@/styles'

type Props = {
  data: Work
}

export const WorkDetailModal: React.VFC<Props> = (props) => {
  const { data } = props
  console.log(data)
  const { open, closeModal } = useModal()
  return (
    <Modal
      open={open}
      onClose={closeModal}
      center
      classNames={{
        modal: 'mymodal',
      }}
    >
      <div css={modal}>
        <div css={contents}>
          <strong css={title}>{data.title}</strong>
          <p css={description}>{data.description}</p>
          <h4 css={techs}>使用技術</h4>
          <dl css={list}>
            <div className="flex">
              <dt>フロントエンド</dt>
              <dd>{data.frontend}</dd>
            </div>
            <div className="flex">
              <dt>バックエンド</dt>
              <dd>{data.backend}</dd>
            </div>
            <div className="flex">
              <dt>その他</dt>
              <dd>{data.others}</dd>
            </div>
          </dl>
          <h4 css={link}>URL</h4>
          <div css={icons}>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              {data.url}
            </a>
            <a href={data.repository} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={30} />
            </a>
          </div>
        </div>
        <div css={image}>
          <Image
            src={data.image.url}
            width={800}
            height={800}
            alt={data.title}
          />
        </div>
      </div>
    </Modal>
  )
}

const modal = css`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px;
`

const contents = css`
  width: 50%;
`

const title = css`
  display: inline-block;
  margin-bottom: 1em;
  font-size: 2.4rem;
  font-weight: 700;
`

const description = css`
  margin-bottom: 2em;
  white-space: pre-line;
`

const techs = css`
  margin-bottom: 0.2em;
  font-size: 1.6rem;
  font-weight: 700;
`

const list = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  font-size: 1.4rem;
  gap: 0.5em;

  dt {
    width: 120px;
  }
`
const link = css`
  font-size: 1.4rem;
`

const icons = css`
  display: flex;
  align-items: flex-end;
  font-size: 1.4rem;
  gap: 20px;

  a {
    display: flex;

    &:hover {
      opacity: 0.8;
    }
  }
`

const image = css`
  width: 40%;
  border: 2px solid ${colors.grey};
`
