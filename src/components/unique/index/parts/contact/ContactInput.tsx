import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'

import type { FormValues } from '@/types'

import { PrimaryButton } from '@/components/general/buttons/PrimaryButton'
import { ErrorMessage } from '@/components/general/form/ErrorMessage'
import { Field } from '@/components/general/form/Field'
import { Input } from '@/components/general/form/Input'
import { Label } from '@/components/general/form/Label'
import { useFormValues } from '@/hooks/useFormValues'
import { useSwitchFormState } from '@/hooks/useSwitchFormState'

export const ContactInput: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const { setFormValues } = useFormValues()

  const { switchFormState } = useSwitchFormState()

  const onSubmit = (values: FormValues) => {
    setFormValues(values)
    switchFormState('confirm')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" register={register} />
          {errors.name ? <ErrorMessage error={errors} /> : <div css={spacer} />}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" register={register} />
          {errors.email ? (
            <ErrorMessage error={errors} />
          ) : (
            <div css={spacer} />
          )}
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Input id="message" type="text" register={register} />
          {errors.message ? (
            <ErrorMessage error={errors} />
          ) : (
            <div css={spacer} />
          )}
        </div>
      </Field>
      <PrimaryButton type="submit">Confirm</PrimaryButton>
    </form>
  )
}

const spacer = css`
  height: 17px;
`
