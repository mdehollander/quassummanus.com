import FooterLinks from "./footerLinks"

import styles from "./styles/footer-styles.module.sass"

export default function Footer() {
  return (
    <footer className={styles.contayner}>
      <FooterLinks />
      <span>{"© 2020 Quassum Manus"}</span>
    </footer>
  )
}
