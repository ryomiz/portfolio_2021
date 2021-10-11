import { SetterOrUpdater, useRecoilState } from 'recoil'

import { confirmValueState } from '@/stores'
import { FormValues } from '@/types'

type ReturnValue = {
  formValues: FormValues
  setFormValues: SetterOrUpdater<FormValues>
}

export const useFormValues = (): ReturnValue => {
  const [formValues, setFormValues] = useRecoilState(confirmValueState)
  return { formValues, setFormValues }
}
