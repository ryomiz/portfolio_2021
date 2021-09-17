import { useRecoilState } from 'recoil'
import { formState } from '@/stores/stores'
import { FormState } from '@/types/types'

export const useSwitchFormState = () => {
  const [form, setForm] = useRecoilState(formState)

  const switchFormState = (state: FormState) => setForm(state)

  return { form, switchFormState }
}
