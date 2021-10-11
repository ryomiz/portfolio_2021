import { useSwitchFormState } from './useSwitchFormState'

import { FormValues } from '@/types'

type ReturnValue = {
  sendMail: (arg: FormValues) => Promise<void>
}

export const useSendMail = (): ReturnValue => {
  const { switchFormState } = useSwitchFormState()

  // メールの送信処理
  const sendMail = async (values: FormValues): Promise<void> => {
    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (res.status === 200) {
        switchFormState('complete')
      } else {
        switchFormState('error')
      }
    } catch (err) {
      console.error(err)
      switchFormState('error')
    }
  }
  return { sendMail }
}
