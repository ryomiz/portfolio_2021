import { css } from '@emotion/react'

import { breakpoints } from '@/styles'

type Props = {
  children: React.ReactNode
}

export const Field: React.FC<Props> = (props) => {
  const { children } = props
  return <div css={container}>{children}</div>
}

const container = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 40px;
    gap: 20px;
  }
`
