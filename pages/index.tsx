import { GetStaticProps } from "next"
import Head from "next/head"

import Landing from "../components/homepage/hero/homepageLanding"
import HomepageProductShowcase from "../components/homepage/products/productShowcase"

import { usePlugin } from "tinacms"
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { InlineForm } from "react-tinacms-inline"

export default function Home({ file }) {
  const [, form] = useGithubJsonForm(file)
  usePlugin(form)
  useGithubToolbarPlugins()

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta
          name="description"
          content="Welcome to the homepage of Quassuum Manus! We engineer apps, games, art, and some open-source software."
        />
      </Head>
      <InlineForm form={form}>
        <Landing />
        <HomepageProductShowcase />
      </InlineForm>
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
        fileRelativePath: "content/homepage.json",
        data: (await import("../content/homepage.json")).default,
      },
    },
  }
}
