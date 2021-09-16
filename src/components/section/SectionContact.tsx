import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'

import { Section } from '@/components/Section'
import { colors } from '@/styles/settings'

import type { FormValues } from '@/types/types'

const onSubmit = async (values: any) => {
  console.log(values)
}

export const SectionContact: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  return (
    <Section title="Contact">
      <div css={container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div css={fields}>
            <div>
              <label htmlFor="name" css={label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                css={input}
                {...register('name', { required: true })}
              />
              {errors.name && (
                <p css={alertMessage}>名前を入力してください。</p>
              )}
            </div>
            <div>
              <label htmlFor="email" css={label}>
                Email
              </label>
              <input
                type="text"
                id="email"
                css={input}
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p css={alertMessage}>メールアドレスを入力してください。</p>
              )}
            </div>
            <div>
              <label htmlFor="message" css={label}>
                Message
              </label>
              <textarea
                id="message"
                css={input}
                data-textarea={true}
                {...register('message', { required: true })}
              />
              {errors.message && (
                <p css={alertMessage}>メッセージを入力してください。</p>
              )}
            </div>
          </div>
          <input type="submit" value="Submit" css={submit} />
        </form>
      </div>
    </Section>
  )
}

const container = css`
  max-width: 650px;
  padding: 0 25px;
  margin: 0 auto;
`

const fields = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 20px;
`

const label = css`
  display: block;
  margin-bottom: 5px;
  font-size: 1.4rem;

  &::after {
    position: relative;
    top: -0.2rem;
    margin-left: 0.3rem;
    color: ${colors.crimson};
    content: '*';
    font-size: 1rem;
  }
`

const input = css`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  font-size: 1.4rem;

  &[data-textarea='true'] {
    min-height: 7.2rem;
  }
`

const submit = css`
  display: block;
  width: 120px;
  height: 40px;
  border: 1px solid ${colors.grey};
  margin: 0 auto;
  border-radius: 5px;
  font-size: 1.4rem;
`

const alertMessage = css`
  color: ${colors.crimson};
  font-size: 1.2rem;
  font-weight: 700;
`
