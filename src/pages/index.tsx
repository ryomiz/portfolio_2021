import type { NextPage } from 'next'
import { css } from '@emotion/react'

import { IoLogoFacebook, IoLogoGithub } from 'react-icons/io5'

import { breakpoints, fonts } from '@/styles/settings'

const HomePage: NextPage = () => {
  return (
    <>
      <header css={header}>
        <div css={inner}>
          <h1 css={title}>Ryosuke Mizuno</h1>
          <nav css={nav}>
            <ul css={list}>
              <li>About</li>
              <li>History</li>
              <li>Works</li>
              <li>Contact</li>
            </ul>
            <ul css={list}>
              <li>
                <IoLogoFacebook size={20} />
              </li>
              <li>
                <IoLogoGithub size={20} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default HomePage

const header = css`
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
`

const inner = css`
  display: flex;
  max-width: 1440px;
  align-items: center;
  justify-content: space-between;
  padding: 29px 60px;
  margin: 0 auto;
`

const title = css`
  font-family: ${fonts.libre};
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.1em;
`

const nav = css`
  display: flex;
  gap: 40px;
`

const list = css`
  display: flex;
  gap: 20px;

  li {
    display: flex;
    align-items: center;
    font-family: ${fonts.libre};
    font-size: 1.5rem;
    letter-spacing: 0.1em;
  }
`
