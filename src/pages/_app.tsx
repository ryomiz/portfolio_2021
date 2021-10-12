import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { RecoilRoot } from 'recoil'
// Reset css
import 'ress'
import '@/styles/globals.css'
import '@/styles/vendors.css'

// vendors
import 'react-responsive-modal/styles.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): EmotionJSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp
