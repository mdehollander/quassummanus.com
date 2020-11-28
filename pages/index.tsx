import Head from "next/head"

import Landing from "../components/homepage/landing/homepageLanding"
import HomepageProductShowcase from "../components/homepage/showcase/homepageProductShowcase"

import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { GetStaticProps } from "next"

export default function Home({ file }) {
  const { data } = file

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta
          name="description"
          content="Welcome to the homepage of Quassuum Manus! We engineer apps, games, art, and some open-source software."
        />
      </Head>
      <Landing title={data.title} subtitle={data.subtitle} />
      <HomepageProductShowcase />
    </>
  )
}

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  console.log("Preview mode", preview, previewData)

  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/homepage.json",
      parse: parseJson,
    })
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/homepage.json")).default,
      },
    },
  }
}
