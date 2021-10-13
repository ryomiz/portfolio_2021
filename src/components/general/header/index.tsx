import { css } from '@emotion/react'
import { useMediaQuery } from 'react-responsive'

import { iconList, naviList } from './data'
import { Drawer } from './parts/Drawer'
import { ScrollItem } from './parts/ScrollItem'

import { breakpoints, fonts } from '@/styles'

export const Header: React.VFC = () => {
  const medium = useMediaQuery({
    query: `(min-width: ${breakpoints.md})`,
  })
  return (
    <header css={header}>
      {/* スマホ時のみドロワーメニューを表示 */}
      {!medium && <Drawer />}

      <div css={inner}>
        <h1 css={title}>Ryosuke Mizuno</h1>
        <nav css={nav}>
          <ul css={list}>
            {naviList.map((item) => (
              <li key={item.text}>
                <ScrollItem to={item.text.toLowerCase()}>
                  {item.text}
                </ScrollItem>
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
  position: relative;
  height: 52px;

  @media (min-width: ${breakpoints.md}) {
    height: auto;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`

const inner = css`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);

  @media (min-width: ${breakpoints.md}) {
    position: static;
    max-width: 1440px;
    padding: 20px 60px;
    box-shadow: none;
  }
`

const title = css`
  font-family: ${fonts.libre};
  font-size: 1.8rem;
  font-weight: 400;
`

const nav = css`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    gap: 40px;
  }
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
