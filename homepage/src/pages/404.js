import React from "react"
import styles from "../styles/404.module.css"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default props => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>404 - Not Found</title>
        <meta name="description" content="This page was not found." />
      </Helmet>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.paragraph}>
        <i>Page you requested was not found</i>
      </p>
      <Link to="/" className={styles.goHome}>
        <i>{"> go home <"}</i>
      </Link>
    </div>
  )
}
