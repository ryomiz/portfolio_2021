import { css } from '@emotion/react'
import { fonts } from '@/styles/settings'

export const Footer: React.VFC = () => {
  return (
    <footer css={footer}>
      <small css={copyright}>&copy; 2021 Ryosuke Mizuno</small>
    </footer>
  )
}

const footer = css`
  padding: 6px 0;
  text-align: center;
`

const copyright = css`
  font-family: ${fonts.libre};
  font-size: 1.2rem;
  letter-spacing: 0.1em;
`
