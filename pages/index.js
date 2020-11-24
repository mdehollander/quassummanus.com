import React from "react"
import Landing from "../components/homepage/landing/homepageLanding.jsx"
import HomepageProductShowcase from "../components/homepage/showcase/homepageProductShowcase.jsx"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta
          name="description"
          content="Welcome to the homepage of Quassuum Manus!"
        />
      </Helmet>
      <Landing />
      <HomepageProductShowcase />
    </>
  )
}
