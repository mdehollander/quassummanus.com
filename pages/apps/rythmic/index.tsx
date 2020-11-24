import Head from "next/head"

import styles from "../../../styles/apps/rythmic/rythmic.module.sass"

import DownloadOnAppStore from "../../../components/common/downloadOnAppStore"

const RythmicHome = props => {
  return (
    <div style={{ backgroundColor: "#FED466", position: "relative" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rythmic - Metronome and Tuner</title>
        <meta name="title" content="Rythmic - Metronome and Tuner" />
        <meta
          name="description"
          content="Rythmic is a beautiful, minimalistic metronome and tuner app, which also allows you to play and customise polirhythms."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quassummanus.com/rythmic" />
        <meta property="og:title" content="Rythmic - Metronome and Tuner" />
        <meta
          property="og:description"
          content="Rythmic is a beautiful, minimalistic metronome and tuner app, which also allows you to play and customise polirhythms."
        />
        <meta
          property="og:image"
          content="https://quassummanus.com/img/rythmic/preview.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://quassummanus.com/rythmic"
        />
        <meta
          property="twitter:title"
          content="Rythmic - Metronome and Tuner"
        />
        <meta
          property="twitter:description"
          content="Rythmic is a beautiful, minimalistic metronome and tuner app, which also allows you to play and customise polirhythms."
        />
        <meta
          property="twitter:image"
          content="https://quassummanus.com/img/rythmic/preview.png"
        />
      </Head>
      <div className={styles.container}>
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

export default RythmicHome
