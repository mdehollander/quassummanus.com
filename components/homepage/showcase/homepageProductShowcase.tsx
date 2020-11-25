import AppsSection from "../appsSection/appsSection"
import Spacer from "../other/spacer"

import styles from "./styles/homepageProductShowcase.module.sass"

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
              appStoreLink: "https://apps.apple.com/app/rythmic/id1515876711",
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
              appStoreLink:
                "https://apps.apple.com/app/ant-colony-stickers/id1511246744",
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
