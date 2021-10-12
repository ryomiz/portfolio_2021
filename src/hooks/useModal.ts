import { useRecoilState } from 'recoil'

import type { ModalState } from '@/types'

import { modalState } from '@/stores'

type ReturnValue = {
  modal: ModalState
  openModal: (idx: number) => void
  closeModal: () => void
}

export const useModal = (): ReturnValue => {
  const [modal, setModal] = useRecoilState(modalState)

  const openModal = (idx: number) =>
    setModal({
      open: true,
      modalIndex: idx,
    })
  const closeModal = () =>
    setModal({
      ...modal,
      open: false,
    })
  return { modal, openModal, closeModal }
}
