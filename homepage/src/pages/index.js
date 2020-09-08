import React from "react"
import Landing from "../components/homepage/landing/homepageLanding.jsx"
import HomepageProductShowcase from "../components/homepage/showcase/homepageProductShowcase.jsx"
import { Helmet } from "react-helmet"

export default () => {
  const props = getStaticProps().props
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta
          name="description"
          content="Welcome to "
        />
      </Helmet>
      <Landing />
      <HomepageProductShowcase content={props} />
    </>
  )
}

function getStaticProps() {
  return {
    props: {
      apps: [
        {
          name: "rythmic",
          src: "/logos/rythmic.png",
          url: "/rythmic",
          appStoreLink: "https://apps.apple.com/us/app/id1515876711",
          description:
            "The perfect combination of a metronome and a tuner in a beautiful package...",
        },
      ],
      games: [],
      art: [
        {
          name: "Ant Colony Stickers",
          src: "/logos/ants.png",
          url: "/ant-colony-stickers",
          appStoreLink: "https://apps.apple.com/us/app/id1511246744",
          description: "Stickers for your colony, by members of your colony...",
        },
        // {
        //   name: "Alien Love Stickers",
        //   src: "/logos/ants.png",
        //   url: "",
        //   appStoreLink: "",
        //   description:
        //     "Love yourself, love others, even if they are alien to you...",
        // },
      ],
      opensource: [
        {
          name: "Visit us on Github",
          src: "/logos/logo_256.png",
          url: "https://github.com/quassummanus",
          // wide: true,
          description:
            "To follow tha latest updates in our open-source efforts check us out on github!",
        },
      ],
    },
  }
}
