import React from "react"
import styles from "./styles/appItem.module.css"
import { Link } from "gatsby"

export default function AppItem({
  name,
  description,
  src,
  url,
  wide,
  appStoreLink,
  githubLink,
}) {
  let imageElement = (() => {
    if (typeof appStoreLink !== "undefined") {
      return (
        <a href={appStoreLink} target="_blank" rel="noreferrer">
          <img
            src="/img/download-on-app-store.svg"
            alt="Download on app store"
            className={styles.linksticker}
          />
        </a>
      )
    } else if (typeof githubLink !== "undefined") {
      return (
        <Link to={githubLink}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logos/github-white.png"
              alt="Visit github"
              className={styles.linksticker}
              width="18"
              height="18"
            />
            <span style={{ fontSize: 14, margin: 0, marginLeft: 10 }}>
              {"Visit Github"}
            </span>
          </div>
        </Link>
      )
    }
  })()

  const listItemWidthStyle = { width: wide ? "500px" : "420px" }

  return (
    <a href={url} className={styles.listitemlink}>
      <li className={styles.listitem} style={listItemWidthStyle}>
        <img src={src} alt={name} className={styles.image} />
        <h4 className={styles.header}>{name}</h4>
        <div className={styles.paragraphgroup}>
          <p className={styles.paragraph}>{description}</p>
          {imageElement}
        </div>
      </li>
    </a>
  )
}
