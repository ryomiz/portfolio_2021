import { css } from '@emotion/react'

import { PrimaryButton } from '@/components/general/buttons/PrimaryButton'
import { Field } from '@/components/general/form/Field'
import { Label } from '@/components/general/form/Label'
import { useFormValues } from '@/hooks/useFormValues'
import { useSendMail } from '@/hooks/useSendMail'
import { useSwitchFormState } from '@/hooks/useSwitchFormState'

export const ContactConfirm: React.VFC = () => {
  const { formValues } = useFormValues()
  const { switchFormState } = useSwitchFormState()
  const { sendMail } = useSendMail()
  return (
    <Field>
      <ul>
        <li>
          <Label star={false}>Name</Label>
        </li>
        <li css={inputVal}>{formValues.name}</li>
      </ul>
      <ul>
        <li>
          <Label star={false}>Email</Label>
        </li>
        <li css={inputVal}>{formValues.email}</li>
      </ul>
      <ul>
        <li>
          <Label star={false}>Message</Label>
        </li>
        <li css={textVal}>{formValues.message}</li>
      </ul>
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
    </Field>
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
