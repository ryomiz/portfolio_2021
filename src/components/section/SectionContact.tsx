import { css } from '@emotion/react'

import { useSwitchFormState } from '@/hooks/useSwitchFormState'

import { Section } from '@/components/Section'
import { ContactInput } from '@/components/unique/contact/ContactInput'
import { ContactConfirm } from '@/components/unique/contact/ContactConfirm'
import { ContactSubmitResult } from '@/components/unique/contact/ContactSubmitResult'

import { colors } from '@/styles/settings'

export const SectionContact: React.VFC = () => {
  const { form } = useSwitchFormState()
  return (
    <Section title="Contact">
      <div css={container}>
        {form === 'input' ? (
          <ContactInput />
        ) : form === 'confirm' ? (
          <ContactConfirm />
        ) : form === 'complete' ? (
          <ContactSubmitResult success={true} />
        ) : (
          <ContactSubmitResult success={false} />
        )}
      </div>
    </Section>
  )
}

const container = css`
  max-width: 650px;
  padding: 0 25px;
  margin: 0 auto;
`

export const fields = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 20px;
`

export const label = css`
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

  &[data-nostar='true'] {
    &::after {
      display: none;
    }
  }
`

export const input = css`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  font-size: 1.4rem;
  letter-spacing: 0.1em;

  &[data-textarea='true'] {
    min-height: 7.2rem;
  }
`
