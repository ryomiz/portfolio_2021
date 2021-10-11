import { css } from '@emotion/react'
import Image from 'next/image'

import { Section } from '@/components/layout/Section'
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
            株式会社プラスへマークアップエンジニアとして入社
          </li>
        </ul>
        <div css={image}>
          <div css={image_inner}>
            <Image src={history} placeholder="blur" alt="北海道大学" />
          </div>
        </div>
      </div>
    </Section>
  )
}

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const list = css`
  order: 2;

  li {
    margin-bottom: 16px;
    font-size: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const year = css`
  display: inline-block;
  width: 60px;
  margin-right: 20px;
  font-size: 1.3rem;
  text-align: right;
`

const image = css`
  order: 1;
  padding-right: 30px;
  padding-bottom: 30px;
`

const image_inner = css`
  display: flex;
  box-shadow: 30px 30px #ddd;
`
