import { css } from '@emotion/react'

import { PrimaryButton } from '@/components/general/buttons/PrimaryButton'
import { Field } from '@/components/general/form/Field'
import { Label } from '@/components/general/form/Label'
import { useFormValues } from '@/hooks/useFormValues'
import { useSendMail } from '@/hooks/useSendMail'
import { useSwitchFormState } from '@/hooks/useSwitchFormState'
import { breakpoints } from '@/styles'

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
        <li css={inputVal} data-second={true}>
          {formValues.email}
        </li>
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
  height: 2.4em;
  padding: 0.5em 0.7em;
  border: 1px solid transparent;
  margin-bottom: 17px;
  font-size: 1.4rem;

  &[data-second='true'] {
    margin-bottom: 18px;
  }
`

const textVal = css`
  height: 6.4em;
  padding: 0.5em 0.7em;
  border: 1px solid transparent;
  margin-bottom: 17px;
  font-size: 1.4rem;
  white-space: pre-line;

  @media (min-width: ${breakpoints.md}) {
    min-height: 74px;
    margin-bottom: 27px;
  }
`
const buttons = css`
  display: flex;
  justify-content: center;
  gap: 20px;
`
