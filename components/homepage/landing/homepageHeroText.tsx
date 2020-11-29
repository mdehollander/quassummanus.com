import { InlineText } from "react-tinacms-inline"

import styles from "./styles/homepageHeroText.module.sass"

interface HomepageHeroTextProps {
  title: string
  subtitle: string
}

export default function HomepageHeroText({
  title,
  subtitle,
}: HomepageHeroTextProps) {
  return (
    <>
      <h1 className={styles.header}>
        <InlineText name="title" />
      </h1>
      <p className={styles.paragraph}>
        <InlineText name="subtitle" />
      </p>
    </>
  )
}
