import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import sal from 'sal.js'
// Reset css
import 'ress'
import '@/styles/globals.css'
import '@/styles/helper.css'
import '@/styles/vendors.css'

// vendors
import 'sal.js/dist/sal.css'
import 'react-responsive-modal/styles.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): EmotionJSX.Element {
  useEffect(() => {
    sal()
  }, [])
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp
