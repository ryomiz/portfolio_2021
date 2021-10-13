import { css } from '@emotion/react'
import Image from 'next/image'
import { IoLogoGithub } from 'react-icons/io5'
import Modal from 'react-responsive-modal'

import type { Work } from '@/types'

import { Icon } from '@/components/general/icons/Icon'
import { useModal } from '@/hooks/useModal'
import { breakpoints, colors } from '@/styles'

type Props = {
  data: Work
}

export const WorkDetailModal: React.VFC<Props> = (props) => {
  const { data } = props
  const {
    modal: { open },
    closeModal,
  } = useModal()

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
            <div className="flex items-center">
              <dt>フロントエンド</dt>
              <dd>{data.frontend}</dd>
            </div>
            <div className="flex items-center">
              <dt>バックエンド</dt>
              <dd>{data.backend}</dd>
            </div>
            <div className="flex items-center">
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
              <Icon Icon={IoLogoGithub} />
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    padding: 30px;
  }
`

const contents = css`
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.md}) {
    width: 50%;
    margin-bottom: 0;
  }
`

const title = css`
  display: inline-block;
  margin-bottom: 1em;
  font-size: 2rem;
  font-weight: 700;

  @media (min-width: ${breakpoints.md}) {
    font-size: 2.4rem;
  }
`

const description = css`
  margin-bottom: 2em;
  white-space: pre-line;
`

const techs = css`
  margin-bottom: 0.4em;
  font-size: 1.5rem;
  font-weight: 700;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 0.2em;
    font-size: 1.6rem;
  }
`

const list = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  font-size: 1.2rem;
  gap: 0.5em;

  dt {
    width: 100px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.4rem;

    dt {
      width: 120px;
    }
  }
`
const link = css`
  font-size: 1.2rem;

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.4rem;
  }
`

const icons = css`
  display: flex;
  align-items: flex-end;
  font-size: 1.2rem;
  gap: 1.5em;

  a {
    display: flex;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.4rem;
  }
`

const image = css`
  display: flex;
  border: 2px solid ${colors.grey};

  @media (min-width: ${breakpoints.md}) {
    width: 40%;
  }
`
