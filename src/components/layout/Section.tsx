import { css } from '@emotion/react'

import { breakpoints } from '@/styles'

type Props = {
  title: string
  children: React.ReactNode
}

const effect = 'fade'
const duration = 1000

export const Section: React.FC<Props> = (props) => {
  const { title, children } = props
  return (
    <section
      id={title.toLowerCase()}
      css={section}
      data-sal={title === 'About' ? null : effect} //一番上のセクション（About）はアニメーションさせない
      data-sal-duration={duration}
    >
      <h2 css={headline}>{title}</h2>
      {children}
    </section>
  )
}

const section = css`
  padding-top: 80px;

  @media (min-width: ${breakpoints.md}) {
    padding-top: 60px;
  }
`

const headline = css`
  margin-bottom: 1em;
  font-size: 2.4rem;
  font-weight: 300;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 60px;
    font-size: clamp(2.4rem, 2.22vw, 4rem);
  }
`
