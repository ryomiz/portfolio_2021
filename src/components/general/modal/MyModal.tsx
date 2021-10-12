import { css } from '@emotion/react'
import Image from 'next/image'
import { IoLogoGithub } from 'react-icons/io5'
import Modal from 'react-responsive-modal'
type Props = {
  open: boolean
  closeModal: () => void
}

export const MyModal: React.VFC<Props> = (props) => {
  const { open, closeModal } = props
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
          <strong css={title}>My Portfolio</strong>
          <p css={description}>
            ポートフォリオです。
            <br />
            ポートフォリオです。
            <br />
            ポートフォリオです。
          </p>
          <h4 css={techs}>使用技術</h4>
          <dl css={list}>
            <div className="flex">
              <dt>フロントエンド</dt>
              <dd>TypeScript, Next.js</dd>
            </div>
            <div className="flex">
              <dt>バックエンド</dt>
              <dd>GraphCMS</dd>
            </div>
            <div className="flex">
              <dt>その他</dt>
              <dd>Node.js, GraphQL</dd>
            </div>
          </dl>
          <h4 css={link}>URL</h4>
          <div css={icons}>
            <a href="#" target="_blank" rel="noopener">
              http://localhost:3000/
            </a>
            <a href="#" target="_blank" rel="noopener">
              <IoLogoGithub size={30} />
            </a>
          </div>
        </div>
        <div css={image}>
          <Image
            src="https://media.graphcms.com/CHgzbh0sQIa17tzapHSe"
            width={420}
            height={236}
            alt="Hello"
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
  padding: 20px;
  padding-right: 30px;
`

const contents = css`
  width: 50%;
`

const title = css`
  display: inline-block;
  margin-bottom: 1em;
  font-size: 2rem;
  font-weight: 700;
`

const description = css`
  margin-bottom: 2em;
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
  }
`

const image = css`
  width: 40%;
  max-width: 420px;
`
