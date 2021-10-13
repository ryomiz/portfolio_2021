import { memo } from 'react'

import { Footer } from '../general/footer'
import { Header } from '../general/header'
type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = memo((props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
})

Layout.displayName = 'Layout'
