import Head from 'next/head'

import Landing from "../components/homepage/landing/homepageLanding"
import HomepageProductShowcase from "../components/homepage/showcase/homepageProductShowcase"

export default () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta
          name="description"
          content="Welcome to the homepage of Quassuum Manus!"
        />
      </Head>
      <Landing />
      <HomepageProductShowcase />
    </>
  )
}
