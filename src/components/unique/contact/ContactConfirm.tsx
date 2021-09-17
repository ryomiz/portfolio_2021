import { css } from '@emotion/react'

import { useSetConfirmValues } from '@/hooks/useSetConfirmValues'
import { useSwitchFormState } from '@/hooks/useSwitchFormState'
import { FormValues } from '@/types/types'

import { PrimaryButton } from '@/components/general/buttons/PrimaryButton'

// styles
import { fields, label } from '@/components/section/SectionContact'
import { useSendMail } from '@/hooks/useSendMail'

export const ContactConfirm: React.VFC = () => {
  const { confirmValues } = useSetConfirmValues()
  const { switchFormState } = useSwitchFormState()
  const sendMail = useSendMail(confirmValues)
  return (
    <>
      <div css={fields}>
        <ul>
          <li css={label} data-nostar={true}>
            Name
          </li>
          <li css={inputVal}>{confirmValues.name}</li>
        </ul>
        <ul>
          <li css={label} data-nostar={true}>
            Email
          </li>
          <li css={inputVal}>{confirmValues.email}</li>
        </ul>
        <ul>
          <li css={label} data-nostar={true}>
            Message
          </li>
          <li css={textVal}>{confirmValues.message}</li>
        </ul>
      </div>
      <ul css={buttons}>
        <li>
          <PrimaryButton onClick={() => switchFormState('input')}>
            Back
          </PrimaryButton>
        </li>
        <li>
          <PrimaryButton active={true} onClick={() => sendMail(confirmValues)}>
            Submit
          </PrimaryButton>
        </li>
      </ul>
    </>
  )
}

const inputVal = css`
  height: 36px;
  padding-top: 9px;
  margin-bottom: 17px;
  font-size: 1.4rem;
`

const textVal = css`
  min-height: 74px;
  padding-top: 9px;
  margin-bottom: 18px;
  font-size: 1.4rem;
`
const buttons = css`
  display: flex;
  justify-content: center;
  gap: 20px;
`
