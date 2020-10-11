import React from "react"
import MainLogo from "./mainLogo"
import HomepageHeroText from "./homepageHeroText"
import SpaceLinesCentre from "../THREE/SpaceLinesCentre"
import styles from "./styles/homepageLanding.module.css"

export default function Landing() {
  return (
    <div className={styles.homepageLanding}>
      <SpaceLinesCentre />
      <div className={styles.centerize}>
        <MainLogo />
        <HomepageHeroText />
      </div>
    </div>
  )
}
