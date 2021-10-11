import { useRecoilState } from 'recoil'

import { formState } from '@/stores'
import { FormState } from '@/types'

type ReturnValue = {
  form: FormState
  switchFormState: (arg: FormState) => void
}

export const useSwitchFormState = (): ReturnValue => {
  const [form, setForm] = useRecoilState(formState)

  const switchFormState = (state: FormState) => setForm(state)

  return { form, switchFormState }
}
