import { css } from '@emotion/react'

import { useSwitchFormState } from '@/hooks/useSwitchFormState'
import { FormValues } from '@/types'

import { PrimaryButton } from '@/components/general/buttons/PrimaryButton'

// styles
import { fields, label } from '@/components/unique/index/section/SectionContact'
import { useSendMail } from '@/hooks/useSendMail'
import { useFormValues } from '@/hooks/useFormValues'

export const ContactConfirm: React.VFC = () => {
  const { formValues } = useFormValues()
  const { switchFormState } = useSwitchFormState()
  const { sendMail } = useSendMail()
  return (
    <>
      <div css={fields}>
        <ul>
          <li css={label} data-nostar={true}>
            Name
          </li>
          <li css={inputVal}>{formValues.name}</li>
        </ul>
        <ul>
          <li css={label} data-nostar={true}>
            Email
          </li>
          <li css={inputVal}>{formValues.email}</li>
        </ul>
        <ul>
          <li css={label} data-nostar={true}>
            Message
          </li>
          <li css={textVal}>{formValues.message}</li>
        </ul>
      </div>
      <ul css={buttons}>
        <li>
          <PrimaryButton onClick={() => switchFormState('input')}>
            Back
          </PrimaryButton>
        </li>
        <li>
          <PrimaryButton active={true} onClick={() => sendMail(formValues)}>
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
