import { Link as Scroll } from 'react-scroll'

type Props = {
  to: string
  children: React.ReactNode
}

export const ScrollItem: React.FC<Props> = (props) => {
  const { to, children } = props
  return (
    <Scroll to={to} smooth={true} duration={1000}>
      {children}
    </Scroll>
  )
}
