import { css } from '@emotion/react'

type Props = {
  success: boolean
}

export const ContactSubmitResult: React.VFC<Props> = (props) => {
  const { success } = props
  return (
    <div css={container}>
      {success ? (
        <p css={result}>メッセージの送信が完了しました。</p>
      ) : (
        <p css={result}>メッセージの送信に失敗しました。</p>
      )}
    </div>
  )
}

const container = css`
  display: flex;
  height: 387px;
  align-items: center;
  justify-content: center;
`

const result = css`
  font-size: 1.4rem;
`
