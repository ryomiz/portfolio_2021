import { css } from '@emotion/react'

import type { FieldError } from 'react-hook-form'

import { colors } from '@/styles'

type Props = {
  error: {
    name?: FieldError | undefined
    email?: FieldError | undefined
    message?: FieldError | undefined
  }
}

export const ErrorMessage: React.VFC<Props> = (props) => {
  const { error } = props
  if (error.name) {
    return <p css={alertMessage}>名前を入力してください。</p>
  } else if (error.email) {
    return <p css={alertMessage}>メールアドレスを入力してください。</p>
  } else if (error.message) {
    return <p css={alertMessage}>メッセージを入力してください。</p>
  } else return <></>
}

const alertMessage = css`
  color: ${colors.crimson};
  font-size: 1.2rem;
  font-weight: 700;
`
