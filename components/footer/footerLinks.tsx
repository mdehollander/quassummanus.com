import Link from "next/link"

import styles from "./styles/footer-styles.module.sass"

export default function FooterLinks() {
  return (
    <ul className={styles.linklist}>
      <li className={styles.linklistitem}>
        <Link href="/privacy-policy">
          <a className={styles.link}>{"Privacy Policy"}</a>
        </Link>
      </li>
      <li className={styles.linklistitem}>{"|"}</li>
      <li className={styles.linklistitem}>
        <Link href="/tnc">
          <a className={styles.link}>{"Terms & Conditions"}</a>
        </Link>
      </li>
      <li className={styles.linklistitem}>{"|"}</li>
      <li className={styles.linklistitem}>
        <Link href="/contact">
          <a className={styles.link}>{"Contact"}</a>
        </Link>
      </li>
    </ul>
  )
}
