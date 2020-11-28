import Link from "next/link"
import { useCMS } from "tinacms"

import styles from "./styles/footer-styles.module.sass"

export default function FooterLinks() {
  const cms = useCMS()

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
      {!cms.enabled && (
        <>
          <li className={styles.linklistitem}>{"|"}</li>
          <li className={styles.linklistitem} onClick={() => cms.toggle()}>
            <span className={styles.link}>{"Edit This Website"}</span>
          </li>
        </>
      )}
      <li className={styles.linklistitem}>{"|"}</li>
      <li className={styles.linklistitem}>
        <Link href="/contact">
          <a className={styles.link}>{"Contact"}</a>
        </Link>
      </li>
    </ul>
  )
}
