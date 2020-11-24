import React from "react"
import { Link } from "gatsby"
import styles from "./footer-styles.module.css"

function FooterLinks() {
  return (
    <ul className={styles.linklist}>
      <li className={styles.linklistitem}>
        <Link to="/privacy-policy" className={styles.link}>
          {"Privacy Policy"}
        </Link>
      </li>
      <li className={styles.linklistitem}>{"|"}</li>
      <li className={styles.linklistitem}>
        <Link to="/tnc" className={styles.link}>
          {"Terms & Conditions"}
        </Link>
      </li>
      <li className={styles.linklistitem}>{"|"}</li>
      <li className={styles.linklistitem}>
        <Link to="/contact" className={styles.link}>
          {"Contact"}
        </Link>
      </li>
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className={styles.contayner}>
      <FooterLinks />
      <span>{"© 2020 Quassum Manus"}</span>
    </footer>
  )
}
