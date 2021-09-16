import type { NextPage } from 'next'
import { css } from '@emotion/react'

const HomePage: NextPage = () => {
  return (
    <div>
      <h1 css={hello}>Hello World</h1>
    </div>
  )
}

export default HomePage

const hello = css`
  font-size: 2rem;
  text-align: center;
`
