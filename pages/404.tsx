import Head from "next/head"
import Link from "next/link"

import styles from "../styles/404.module.sass"

export default function NotFound(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Not Found</title>
        <meta name="description" content="This page was not found." />
      </Head>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.paragraph}>
        <i>Page you requested was not found</i>
      </p>
      <Link href="/">
        <a className={styles.goHome}>{"> go home <"}</a>
      </Link>
    </div>
  )
}
