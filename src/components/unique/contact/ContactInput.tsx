import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'

import { useSetConfirmValues } from '@/hooks/useSetConfirmValues'
import { useSwitchFormState } from '@/hooks/useSwitchFormState'
import type { FormValues } from '@/types/types'

import { PrimaryButton } from '@/components/general/buttons/PrimaryButton'

// styles
import { colors } from '@/styles/settings'
import { fields, label, input } from '@/components/section/SectionContact'

export const ContactInput: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const { confirmValues, setConfirmValues } = useSetConfirmValues()

  const { switchFormState } = useSwitchFormState()
  const onSubmit = (values: FormValues) => {
    setConfirmValues(values)
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
            defaultValue={confirmValues.name}
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
            defaultValue={confirmValues.email}
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
            defaultValue={confirmValues.message}
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
