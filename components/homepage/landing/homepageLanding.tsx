import MainLogo from "./mainLogo"
import HomepageHeroText from "./homepageHeroText"

import styles from "./styles/homepageLanding.module.sass"

interface LandingProps {
  title: string
  subtitle: string
}

export default function Landing({ title, subtitle }: LandingProps) {
  return (
    <div className={styles.homepageLanding}>
      <div className={styles.centerize}>
        <MainLogo />
        <HomepageHeroText title={title} subtitle={subtitle} />
      </div>
    </div>
  )
}
