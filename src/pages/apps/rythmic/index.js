import React from "react"
import styles from "../../../styles/rythmic.module.css"
// import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import DownloadOnAppStore from "../../../components/common/downloadOnAppStore"

export default props => {
  return (
    <div style={{ backgroundColor: "#FED466", position: 'relative' }}>
      <div className={styles.container}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Rythmic - Metronome and Tuner</title>
          <meta name="title" content="Rythmic - Metronome and Tuner" />
          <meta
            name="description"
            content="Rythmic is a beautiful, minimalistic metronome and tuner app, which also allows you to play and customise polirhythms."
          />

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://quassummanus.com/rythmic"/>
          <meta property="og:title" content="Rythmic - Metronome and Tuner"/>
          <meta property="og:description" content="Rythmic is a beautiful, minimalistic metronome and tuner app, which also allows you to play and customise polirhythms."/>
          <meta property="og:image" content="https://quassummanus.com/img/rythmic/preview.png"/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://quassummanus.com/rythmic"/>
          <meta property="twitter:title" content="Rythmic - Metronome and Tuner"/>
          <meta property="twitter:description" content="Rythmic is a beautiful, minimalistic metronome and tuner app, which also allows you to play and customise polirhythms."/>
          <meta property="twitter:image" content="https://quassummanus.com/img/rythmic/preview.png"/>
        </Helmet>
        <div className={styles.heroTextContainer}>
          <h2>Best metronome has to cost a lot, right?</h2>
          <h1>Wrong. It's free.</h1>
          <DownloadOnAppStore href="/rythmic/ios" />
        </div>
        <img
          src="/img/rythmic/rythmic-main-top.png"
          alt="rythmic-app-preview"
        />
      </div>
      <img
        src="/img/rythmic/svg/triangle.svg"
        alt="background-element-1"
        className={styles.backgroundArrows}
      />
    </div>
  )
}

//   <h1 className={styles.heading}>rythmic - metronome and tuner</h1>
//       <p className={styles.paragraph}>
//       <i>This page is under construction...</i>
//       </p>
//       <a
//       href="https://apps.apple.com/us/app/id1515876711"
//       className={styles.goHome}
//       target="_blank"
//       rel="noreferrer"
//       >
//       <i>{"> download for free <"}</i>
//       </a>
//       <Link to="/" className={styles.goHome}>
//       <i>{"> go home <"}</i>
//     </Link>
