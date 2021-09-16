import { css } from '@emotion/react'

type Props = {
  title: string
  children: React.ReactNode
}

export const Section: React.VFC<Props> = (props) => {
  const { title, children } = props
  return (
    <section>
      <h2 css={headline}>{title}</h2>
      {children}
    </section>
  )
}

const headline = css`
  margin-bottom: 80px;
  font-size: clamp(2.4rem, 2.22vw, 4rem);
  font-weight: 300;
  letter-spacing: 0.1em;
  text-align: center;
`
