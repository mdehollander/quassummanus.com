import styles from "./styles/homepageHeroText.module.sass"

export default function HomepageHeroText() {
  return (
    <>
      <h1 className={styles.header}>Quassum Manus</h1>
      <p className={styles.paragraph}>
        We engineer apps, games, art, and some open-source software.
      </p>
    </>
  )
}
