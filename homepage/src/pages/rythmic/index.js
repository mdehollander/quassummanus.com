import React from "react"
import styles from "../../styles/rythmic.module.css"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default props => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Rythmic - Metronome and Tuner</title>
        <meta
          name="description"
          content="Rythmic is a beautiful, minimalistic metronome and tuner app, which also allows you to play and customise polirhythms."
        />
      </Helmet>
      <h1 className={styles.heading}>rythmic - metronome and tuner</h1>
      <p className={styles.paragraph}>
        <i>This page is under construction...</i>
      </p>
      <a
        href="https://apps.apple.com/us/app/id1515876711"
        className={styles.goHome}
        target="_blank"
        rel="noreferrer"
      >
        <i>{"> download for free <"}</i>
      </a>
      <Link to="/" className={styles.goHome}>
        <i>{"> go home <"}</i>
      </Link>
    </div>
  )
}
