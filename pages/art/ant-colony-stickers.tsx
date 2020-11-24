import Head from "next/head"
import Link from "next/link"

import styles from "../../styles/ant-colony-stickers.module.sass"

export default props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ant Colony Stickers</title>
        <meta
          name="description"
          content="Ant Colony Stickers for the best member of the colony - you!"
        />
      </Head>
      <h1 className={styles.heading}>Ant Colony Stickers</h1>
      <p className={styles.paragraph}>
        <i>This page is under construction...</i>
      </p>
      <a
        href="https://apps.apple.com/us/app/id1511246744"
        className={styles.goHome}
        target="_blank"
        rel="noreferrer"
      >
        <i>{"> download <"}</i>
      </a>
      <Link href="/">
        <a className={styles.goHome}>
          <i>{"> go home <"}</i>
        </a>
      </Link>
    </div>
  )
}
