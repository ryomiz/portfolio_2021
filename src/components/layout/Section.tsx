import { css } from '@emotion/react'

type Props = {
  title: string
  children: React.ReactNode
}

export const Section: React.FC<Props> = (props) => {
  const { title, children } = props
  return (
    <section id={title.toLowerCase()} css={section}>
      <h2 css={headline}>{title}</h2>
      {children}
    </section>
  )
}

const section = css`
  padding-top: 60px;
`

const headline = css`
  margin-bottom: 60px;
  font-size: clamp(2.4rem, 2.22vw, 4rem);
  font-weight: 300;
  text-align: center;
`
