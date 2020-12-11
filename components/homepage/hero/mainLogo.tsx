import Image from "next/image"

import styles from "./styles/mainLogo.module.sass"

export default function MainLogo() {
  return (
    <Image src="/logos/logo_512.png" alt="main logo" width={256} height={256} className={styles.logo} />
  )
}
