import { useRecoilState } from 'recoil'

import { modalState } from '@/stores'

type ReturnValue = {
  open: boolean
  openModal: () => void
  closeModal: () => void
}

export const useModal = (): ReturnValue => {
  const [open, setOpen] = useRecoilState(modalState)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)
  return { open, openModal, closeModal }
}
