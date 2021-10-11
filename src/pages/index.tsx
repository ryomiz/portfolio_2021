import axios from 'axios'

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { AssetsIndex } from '@/components/unique/index'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const HomePage: NextPage<Props> = (props) => {
  const { data } = props
  return <AssetsIndex data={data} />
}

export default HomePage

// GetStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios({
    url: 'https://api-ap-northeast-1.graphcms.com/v2/cktsrakyp08hf01xpgte012py/master',
    method: 'POST',
    data: {
      query: `query {
        works {
          title
        }
      }`,
    },
  })
  const data = res.data

  return {
    props: { data },
  }
}
