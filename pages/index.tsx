import { GetStaticProps } from "next"
import Head from "next/head"

import Landing from "../components/homepage/landing/homepageLanding"
import HomepageProductShowcase from "../components/homepage/showcase/homepageProductShowcase"

import { usePlugin } from "tinacms"
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { InlineForm } from "react-tinacms-inline"

export default function Home({ file }) {
  const formOptions = {
    label: "Introduction Text",
    fields: [
      { name: "title", component: "text" },
      { name: "subtitle", component: "text" },
    ],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
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
        <HomepageProductShowcase productSections={data.productSections} />
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
        fileRelativePath: "content/home.json",
        data: (await import("../content/homepage.json")).default,
      },
    },
  }
}
