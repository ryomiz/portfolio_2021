export type FormValues = {
  name: string
  email: string
  message: string
}

export type FormState = 'input' | 'confirm' | 'complete' | 'error'
