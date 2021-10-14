import { css } from '@emotion/react'

import type { FieldError } from 'react-hook-form'

import { colors } from '@/styles'

type Props = {
  error: FieldError | undefined
}
export const ErrorMessage: React.VFC<Props> = (props) => {
  const { error } = props
  console.log(error)
  if (error) {
    return <p css={alertMessage}>{error.message}を入力してください。</p>
  } else return <></>
}

const alertMessage = css`
  color: ${colors.crimson};
  font-size: 1.2rem;
  font-weight: 700;
`
