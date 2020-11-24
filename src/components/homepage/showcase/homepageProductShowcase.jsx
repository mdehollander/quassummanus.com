import React from "react"
import AppsSection from "../appsSection/appsSection"
import Spacer from "../other/spacer"
import styles from "./homepageProductShowcase.module.css"

export default function HomepageProductShowcase(props) {
  return (
    <div className={styles.data}>
      <div className={styles.darkenBackground} />
      <div className={styles.center}>
        <AppsSection
          apps={[
            {
              name: "rythmic",
              src: "/logos/rythmic.png",
              url: "/apps/rythmic",
              appStoreLink: "/apps/rythmic/ios",
              description:
                "The perfect combination of a metronome and a tuner in a beautiful package...",
            },
          ]}
          headline="We have some apps..."
        />
        <Spacer spacing="2.5rem" />
        <AppsSection
          apps={[
            {
              name: "Ant Colony Stickers",
              src: "/logos/ants.png",
              url: "/art/ant-colony-stickers",
              appStoreLink: "/art/ant-colony-stickers/imessage",
              description:
                "Stickers for your colony, by members of your colony...",
            },
          ]}
          headline="And some art..."
        />
        <Spacer spacing="2.5rem" />
        <AppsSection
          apps={[
            {
              name: "Visit us on Github",
              src: "/logos/logo_256.png",
              url: "https://github.com/quassummanus",
              description:
                "To follow tha latest updates in our open-source efforts check us out on github!",
            },
          ]}
          headline="Check out our open-source efforts..."
        />
      </div>
    </div>
  )
}
