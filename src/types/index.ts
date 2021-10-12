export type Work = {
  title: string
  description: string
  frontend: string
  backend: string
  others: string
  url: string
  repository: string
  image: {
    url: string
  }
}

export type ModalState = {
  open: boolean
  modalIndex: number
}

export type FormValues = {
  name: string
  email: string
  message: string
}

export type FormState = 'input' | 'confirm' | 'complete' | 'error'
