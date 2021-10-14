import { css } from '@emotion/react'
import { slide as Menu } from 'react-burger-menu'

import { iconList, naviList } from '../data'
import { ScrollItem } from '../parts/ScrollItem'

export const Drawer: React.VFC = () => {
  return (
    <Menu
      right={true}
      itemListElement="nav"
      itemClassName="mydrawer"
      burgerButtonClassName="mybuttton"
    >
      <ul css={navi}>
        {naviList.map((item) => (
          <li key={item.text}>
            <ScrollItem to={item.text.toLowerCase()}>{item.text}</ScrollItem>
          </li>
        ))}
      </ul>
      <ul css={icons}>
        {iconList.map((icon) => (
          <li key={icon.name}>
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
    </Menu>
  )
}

const navi = css`
  margin-bottom: 1em;
  font-size: 2.4rem;

  li {
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const icons = css`
  li {
    display: inline-block;
    margin-right: 25px;
  }
`
