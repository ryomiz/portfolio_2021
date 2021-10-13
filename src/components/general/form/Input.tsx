import { css } from '@emotion/react'

import type { FormValues } from '@/types'
import type { UseFormRegister } from 'react-hook-form'

import { useFormValues } from '@/hooks/useFormValues'
import { colors } from '@/styles'

type Props = {
  id: 'name' | 'email' | 'message'
  type: 'text'
  register: UseFormRegister<FormValues>
}

export const Input: React.VFC<Props> = (props) => {
  const { formValues } = useFormValues()
  const { id, type, register } = props
  if (id === 'message') {
    return (
      <textarea
        id={id}
        defaultValue={formValues[id]}
        {...register(id, { required: true })}
        css={textarea}
      />
    )
  }
  return (
    <>
      <input
        id={id}
        type={type}
        defaultValue={formValues[id]}
        {...register(id, { required: true })}
        css={input}
      />
    </>
  )
}

const input = css`
  width: 100%;
  padding: 0.5em 0.7em;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  font-size: 1.4rem;
  letter-spacing: 0.1em;

  &[data-textarea='true'] {
    min-height: 7.2rem;
  }
`

const textarea = css`
  width: 100%;
  min-height: 5.4em;
  padding: 0.5em 0.7em;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  font-size: 1.4rem;
  letter-spacing: 0.1em;
`
