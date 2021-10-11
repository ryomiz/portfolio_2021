import { css } from '@emotion/react'

import { Section } from '@/components/layout/Section'
import { ContactConfirm } from '@/components/unique/index/parts/contact/ContactConfirm'
import { ContactInput } from '@/components/unique/index/parts/contact/ContactInput'
import { ContactSubmitResult } from '@/components/unique/index/parts/contact/ContactSubmitResult'
import { useSwitchFormState } from '@/hooks/useSwitchFormState'
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
