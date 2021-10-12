import axios from 'axios'
import { NextSeo } from 'next-seo'

import type { GetStaticProps, NextPage } from 'next'

import { AssetsIndex } from '@/components/unique/index'
import { Work } from '@/types'
import { getWorksQuery } from '@/utils/query'

type Props = {
  data: {
    data: {
      works: Array<Work>
    }
  }
}

const HomePage: NextPage<Props> = (props) => {
  const { data } = props
  return (
    <>
      <NextSeo
        title="Ryosuke Mizuno"
        description="Ryosuke Mizunoのポートフォリオサイト。広島県尾道市在住のマークアップエンジニアで、フロントエンド開発を勉強中。"
      />
      <AssetsIndex data={data} />
    </>
  )
}

export default HomePage

// GetStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios({
    url: 'https://api-ap-northeast-1.graphcms.com/v2/cktsrakyp08hf01xpgte012py/master',
    method: 'POST',
    data: {
      query: getWorksQuery,
    },
  })
  const data = res.data
  return {
    props: { data },
  }
}
