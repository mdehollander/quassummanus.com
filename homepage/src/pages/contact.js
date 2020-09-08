import React from "react"
import styles from "../styles/contact.module.css"
import { Link } from "gatsby"

export default props => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact</h1>
      <p className={styles.paragraph}>
        <i>
          This page is still under construction, but for any enquiries email us at:{" "}
          <a href="mailto:info@quassummanus.com">info@quassummanus.com</a>
        </i>
      </p>
      <Link to="/" className={styles.goHome}>
        <i>{"> go home <"}</i>
      </Link>
    </div>
  )
}
