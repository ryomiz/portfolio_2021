import { atom } from 'recoil'

import { FormState, FormValues } from '@/types/types'

export const formState = atom<FormState>({
  key: 'formState',
  default: 'input',
})

export const confirmValueState = atom<FormValues>({
  key: 'confirmValueState',
  default: {
    name: '',
    email: '',
    message: '',
  },
})
