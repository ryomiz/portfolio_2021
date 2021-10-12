import { atom } from 'recoil'

import { FormState, FormValues, ModalState } from '@/types'

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

export const modalState = atom<ModalState>({
  key: 'modalState',
  default: {
    open: false,
    modalIndex: 0,
  },
})
