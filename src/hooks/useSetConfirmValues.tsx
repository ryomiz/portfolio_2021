import { useRecoilState } from 'recoil'

import { confirmValueState } from '@/stores/stores'

export const useSetConfirmValues = () => {
  const [confirmValues, setConfirmValues] = useRecoilState(confirmValueState)
  return { confirmValues, setConfirmValues }
}
