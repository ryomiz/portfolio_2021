import { css } from '@emotion/react'
import Image from 'next/image'

import { breakpoints } from '@/styles'

type Props = {
  src: StaticImageData
  alt: string
}

export const Photo: React.VFC<Props> = (props) => {
  const { src, alt } = props
  return (
    <div css={image}>
      <div css={inner}>
        <Image src={src} placeholder="blur" alt={alt} />
      </div>
    </div>
  )
}

const image = css`
  padding-right: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.md}) {
    margin: 0;
  }
`

const inner = css`
  display: flex;
  box-shadow: 20px 20px #ddd;
`
