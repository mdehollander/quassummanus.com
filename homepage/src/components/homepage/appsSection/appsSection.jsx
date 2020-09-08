import React from "react"
import AppList from "./appList"
import styles from "./styles/appsSection.module.css"

export default function AppsSection({ apps, headline }) {
  if (!apps || apps.length === 0) return null

  return (
    <div>
      <h2 className={styles.headline}>{headline}</h2>
      <AppList apps={apps} />
    </div>
  )
}
