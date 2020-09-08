import React from "react"
import styles from "../styles/ant-colony-stickers.module.css"
import { Link } from "gatsby"

export default props => {
  return (
    <div className={styles.container}>
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
      <Link to="/" className={styles.goHome}>
        <i>{"> go home <"}</i>
      </Link>
    </div>
  )
}
