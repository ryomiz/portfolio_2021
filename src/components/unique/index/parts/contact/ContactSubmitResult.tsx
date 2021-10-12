import { css } from '@emotion/react'

// import { useParty } from '@/hooks/useParty'

type Props = {
  success: boolean
}

export const ContactSubmitResult: React.VFC<Props> = (props) => {
  const { success } = props

  // useParty(success)
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
  height: auto;
  align-items: center;
  justify-content: center;
  animation: shrink;
  animation-duration: 3s;
`

const result = css`
  font-size: 1.4rem;
`
