import { IconType } from 'react-icons'
import { useMediaQuery } from 'react-responsive'

import { breakpoints } from '@/styles'

type Props = {
  Icon: IconType
}

export const Icon: React.VFC<Props> = (props) => {
  const { Icon } = props

  const medium = useMediaQuery({
    query: `(min-width: ${breakpoints.md})`,
  })

  const iconSize = medium ? 25 : 30
  return (
    <>
      <Icon size={iconSize} />
    </>
  )
}
