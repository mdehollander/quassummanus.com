import Head from "next/head"
import Link from "next/link"

import styles from "../styles/contact.module.sass"

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact information for Quuassum Manus"
        />
      </Head>
      <h1 className={styles.heading}>Contact</h1>
      <p className={styles.paragraph}>
        <i>
          This page is still under construction, but for any enquiries email us
          at: <a href="mailto:info@quassummanus.com">info@quassummanus.com</a>
        </i>
      </p>
      <Link href="/">
        <a className={styles.goHome}>{"> go home <"}</a>
      </Link>
    </div>
  )
}
