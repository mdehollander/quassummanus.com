import type { AppProps } from "next/app"
import Layout from "../components/layout/layout"

import App from "next/app"
import { TinaCMS, TinaProvider } from "tinacms"
import {
  GithubClient,
  TinacmsGithubProvider,
  GithubMediaStore,
} from "react-tinacms-github"

import "../styles/global.sass"

export const onLogin = async () => {
  const token = localStorage.getItem("tinacms-github-token") || null
  const headers = new Headers()

  if (token) {
    headers.append("Authorization", "Bearer " + token)
  }

  console.log("Requesting prreview!!!")
  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()

  if (resp.status == 200) window.location.href = window.location.pathname
  else throw new Error(data.message)
}

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

export default class Site extends App {
  cms: TinaCMS

  constructor(props: AppProps) {
    super(props)

    const github = new GithubClient({
      proxy: "/api/proxy-github",
      authCallbackRoute: "/api/create-github-access-token",
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME,
      baseBranch: process.env.BASE_BRANCH,
    })

    // 1. Create the TinaCMS instance
    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        // 2. Register the GithubClient
        github,
      },
      // 3. Register the Media Store
      media: new GithubMediaStore(github),
      // 4. Use the Sidebar and Toolbar
      sidebar: !!props.pageProps.preview,
      toolbar: !!props.pageProps.preview,
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      /**
       * 5. Wrap the page Component with the Tina and Github providers
       */
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TinacmsGithubProvider>
      </TinaProvider>
    )
  }
}
