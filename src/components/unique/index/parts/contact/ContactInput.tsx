import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'

import { useSwitchFormState } from '@/hooks/useSwitchFormState'
import type { FormValues } from '@/types'

import { PrimaryButton } from '@/components/general/buttons/PrimaryButton'

import { colors } from '@/styles'
import {
  fields,
  label,
  input,
} from '@/components/unique/index/section/SectionContact'
import { useFormValues } from '@/hooks/useFormValues'

export const ContactInput: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const { formValues, setFormValues } = useFormValues()

  const { switchFormState } = useSwitchFormState()
  const onSubmit = (values: FormValues) => {
    setFormValues(values)
    switchFormState('confirm')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div css={fields}>
        <div>
          <label css={label} htmlFor="name">
            Name
          </label>
          <input
            css={input}
            id="name"
            type="text"
            defaultValue={formValues.name}
            {...register('name', { required: true })}
          />
          {errors.name ? (
            <p css={alertMessage}>名前を入力してください。</p>
          ) : (
            <div css={spacer} />
          )}
        </div>
        <div>
          <label css={label} htmlFor="email">
            Email
          </label>
          <input
            css={input}
            id="email"
            type="text"
            defaultValue={formValues.email}
            {...register('email', { required: true })}
          />
          {errors.email ? (
            <p css={alertMessage}>メールアドレスを入力してください。</p>
          ) : (
            <div css={spacer} />
          )}
        </div>
        <div>
          <label css={label} htmlFor="message">
            Message
          </label>
          <textarea
            css={input}
            id="message"
            defaultValue={formValues.message}
            data-textarea={true}
            {...register('message', { required: true })}
          />
          {errors.message ? (
            <p css={alertMessage}>メッセージを入力してください。</p>
          ) : (
            <div css={spacer} />
          )}
        </div>
      </div>
      <PrimaryButton type="submit">Confirm</PrimaryButton>
    </form>
  )
}

const alertMessage = css`
  color: ${colors.crimson};
  font-size: 1.2rem;
  font-weight: 700;
`

const spacer = css`
  height: 17px;
`
