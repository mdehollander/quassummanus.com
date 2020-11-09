import React from "react"
import Layout from "./src/layout/layout"
import "./src/styles/global.css"
import "firebase/analytics"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
