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
      <h1 className={styles.header}>{title}</h1>
      <p className={styles.paragraph}>
        {subtitle}
      </p>
    </>
  )
}
