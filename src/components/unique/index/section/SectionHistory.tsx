import { css } from '@emotion/react'

import { Photo } from '@/components/general/Photo/Photo'
import { Section } from '@/components/layout/Section'
import { breakpoints } from '@/styles'
import history from 'public/images/history.jpg'

export const SectionHistory: React.VFC = () => {
  return (
    <Section title="History">
      <div css={container}>
        <ul css={list}>
          <li>
            <span css={year}>1996年</span>広島県広島市にて生まれる
          </li>
          <li>
            <span css={year}>2015年</span>北海道大学農学部生物資源化学科 入学
          </li>
          <li>
            <span css={year}>2019年</span>北海道大学生物資源化学化学科 卒業
          </li>
          <li>
            <span css={year}>同年</span>北海道大学大学院農学院 進学
          </li>
          <li>
            <span css={year}>2021年</span>北海道大学大学院農学院 中退
          </li>
          <li>
            <span css={year}>同年</span>
            マークアップエンジニアとして勤務開始
          </li>
        </ul>
        <div css={image}>
          <Photo src={history} alt="北海道大学に咲く林檎" />
        </div>
      </div>
    </Section>
  )
}

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    gap: 100px;
  }
`

const list = css`
  flex: 1;
  order: 2;

  li {
    margin-bottom: 16px;
    font-size: 1.3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    li {
      margin-bottom: 16px;
      font-size: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const year = css`
  display: inline-block;
  width: 60px;
  margin-right: 10px;
  font-size: 1.3rem;
  text-align: right;

  @media (min-width: ${breakpoints.md}) {
    margin-right: 20px;
  }
`

const image = css`
  max-width: 350px;
  order: 1;

  @media (min-width: ${breakpoints.md}) {
    max-width: 300px;
  }
`
