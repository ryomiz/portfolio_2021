import { useSwitchFormState } from './useSwitchFormState'
import { FormValues } from '@/types/types'

export const useSendMail = (values: FormValues) => {
  const { switchFormState } = useSwitchFormState()

  // メールの送信処理
  const sendMail = async (values: FormValues) => {
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
  return sendMail
}
