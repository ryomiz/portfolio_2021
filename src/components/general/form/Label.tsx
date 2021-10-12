import { css } from '@emotion/react'

import { colors } from '@/styles'

type Props = {
  children: React.ReactNode
  htmlFor?: 'name' | 'email' | 'message'
  star?: boolean
}

export const Label: React.FC<Props> = (props) => {
  const { children, htmlFor = '', star = true } = props
  return (
    <label htmlFor={htmlFor} css={label} data-star={star}>
      {children}
    </label>
  )
}

const label = css`
  display: block;
  margin-bottom: 5px;
  font-size: 1.4rem;

  &::after {
    position: relative;
    top: -0.2rem;
    margin-left: 0.3rem;
    color: ${colors.crimson};
    content: '*';
    font-size: 1rem;
  }

  &[data-star='false'] {
    &::after {
      display: none;
    }
  }
`
