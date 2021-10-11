import { css } from '@emotion/react'
import Image from 'next/image'

import { Section } from '@/components/layout/Section'
import profile from 'public/images/profile.jpg'

export const SectionAbout: React.VFC = () => {
  return (
    <Section title="About">
      <div css={container}>
        <div css={contents}>
          <div>
            <h3 css={myname}>水野 良祐&#040;Mizuno Ryosuke&#041;</h3>
            <p css={greeting}>
              広島県尾道市在住のマークアップエンジニア
              <br />
              フロントエンド開発を勉強中
              <br />
              好きな言語はTypeScriptです。
            </p>
          </div>
          <div>
            <h3 css={using}>学習中の技術</h3>
            <ul css={techs}>
              <li>JavaScript, TypeScript, React, Next.js,</li>
              <li>Node.js, Express.js, Nest.js</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
        <div css={image}>
          <div css={image_inner}>
            <Image src={profile} placeholder="blur" alt="プロフィール写真" />
          </div>
        </div>
      </div>
    </Section>
  )
}

const container = css`
  display: flex;
  justify-content: space-between;
`

const contents = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const myname = css`
  margin-bottom: 16px;
  font-size: 2.4rem;
`

const greeting = css`
  line-height: 2;
`

const using = css`
  margin-bottom: 6px;
  font-size: 2rem;
`

const techs = css`
  li {
    line-height: 2;
  }
`

const image = css`
  padding-right: 30px;
  padding-bottom: 30px;
`

const image_inner = css`
  display: flex;
  box-shadow: 30px 30px #ddd;
`
