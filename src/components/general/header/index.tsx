import { css } from '@emotion/react'
import { Link as Scroll } from 'react-scroll'

import { iconList, naviList } from './data'

import { fonts } from '@/styles'

export const Header: React.VFC = () => {
  return (
    <header css={header}>
      <div css={inner}>
        <h1 css={title}>Ryosuke Mizuno</h1>
        <nav css={nav}>
          <ul css={list}>
            {naviList.map((item) => (
              <li key={item.text}>
                <Scroll
                  to={item.text.toLowerCase()}
                  smooth={true}
                  duration={500}
                >
                  {item.text}
                </Scroll>
              </li>
            ))}
          </ul>
          <ul css={list}>
            {iconList.map((icon) => (
              <li key={icon.name}>
                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

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
`

const nav = css`
  display: flex;
  gap: 40px;
`

const list = css`
  display: flex;
  gap: 20px;

  /* メニュー部分（アイコン以外） */
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: ${fonts.libre};
    font-size: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }

  /* アイコン部分 */
  a:hover {
    opacity: 0.8;
  }
`
