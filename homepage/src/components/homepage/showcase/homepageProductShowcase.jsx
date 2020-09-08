import React from "react"
import AppsSection from "../appsSection/appsSection"
import Spacer from "../other/spacer"
import styles from "./homepageProductShowcase.module.css"

export default function HomepageProductShowcase({ content }) {
  return (
    <div className={styles.data}>
      <div className={styles.darkenBackground}/>
      <div className={styles.center}>
        <AppsSection apps={content.apps} headline="We have some apps..." />
        <Spacer spacing="2.5rem" />
        <AppsSection apps={content.art} headline="And some art..." />
        <Spacer spacing="2.5rem" />
        <AppsSection
          apps={content.opensource}
          headline="Check out our open-source efforts..."
        />
      </div>
    </div>
  )
}
