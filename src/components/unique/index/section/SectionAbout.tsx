import { css } from '@emotion/react'

import { Photo } from '@/components/general/Photo/Photo'
import { Section } from '@/components/layout/Section'
import { breakpoints } from '@/styles'
import profile from 'public/images/profile.jpg'

export const SectionAbout: React.VFC = () => {
  return (
    <Section title="About">
      <div css={container}>
        <div css={contents}>
          <div>
            <h3 css={myname}>
              <span className="inline-block">水野 良祐</span>
              <span className="inline-block">&#040;Mizuno Ryosuke&#041;</span>
            </h3>

            <p css={greeting}>
              広島県尾道市在住のマークアップエンジニア
              <br />
              好きな言語はTypeScriptです。
            </p>
          </div>
          <div>
            <h3 css={using}>学習中の技術</h3>
            <ul css={techs}>
              <li>JavaScript, TypeScript, React, Next.js</li>
              <li>Node.js, Express.js, Nest.js</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
        <div css={image}>
          <Photo src={profile} alt="プロフィール写真" />
        </div>
      </div>
    </Section>
  )
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`

const contents = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  order: 2;

  @media (min-width: ${breakpoints.md}) {
    order: 1;
  }
`

const myname = css`
  margin-bottom: 0.3em;
  font-size: 2rem;

  @media (min-width: ${breakpoints.md}) {
    font-size: 2.4rem;
  }
`

const greeting = css`
  margin-bottom: 3em;
  line-height: 2;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 0;
  }
`

const using = css`
  margin-bottom: 0.3rem;
  font-size: 1.8rem;

  @media (min-width: ${breakpoints.md}) {
    font-size: 2rem;
  }
`

const techs = css`
  li {
    line-height: 2;
  }
`

const image = css`
  max-width: 350px;
  order: 1;

  @media (min-width: ${breakpoints.md}) {
    max-width: 300px;
    order: 2;
  }
`
