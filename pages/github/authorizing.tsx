import Head from "next/head"
import { useGithubAuthRedirect } from "react-tinacms-github"

import styles from "../../styles/contact.module.sass"

// Our GitHub app redirects back to this page with auth code
export default function Authorizing() {
  // Let the main app know, that we received an auth code from the GitHub redirect
  useGithubAuthRedirect()

  return (
    <div className={styles.container}>
      <Head>
        <title>Authorizing with Github</title>
      </Head>
      <h1 className={styles.heading}>
        Authorizing with GitHub, please wait...
      </h1>
    </div>
  )
}
