import { css } from '@emotion/react'

import { colors } from '@/styles'

type Props = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  active?: boolean
  onClick?: any
}
export const PrimaryButton: React.VFC<Props> = (props) => {
  const { children, type = 'button', active = false, onClick } = props
  return (
    <button
      css={submit}
      type={type}
      data-active={active}
      onClick={onClick && onClick}
    >
      {children}
    </button>
  )
}

const submit = css`
  display: block;
  width: 120px;
  height: 40px;
  border: 1px solid ${colors.grey};
  margin: 0 auto;
  border-radius: 5px;
  font-size: 1.4rem;

  &[data-active='true'] {
    border-color: ${colors.darkgrey};
    background-color: ${colors.darkgrey};
    color: #fff;
  }

  &:hover {
    opacity: 0.7;
  }
`
