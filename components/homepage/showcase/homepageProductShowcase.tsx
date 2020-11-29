import { useCMS } from "tinacms"
import { HomepageProductsSection } from "../../../content/homepage"

import AppsSection from "../appsSection/appsSection"
import Spacer from "../other/spacer"

import styles from "./styles/homepageProductShowcase.module.sass"

interface HomepageProductShowcaseProps {
  productSections: HomepageProductsSection[]
}

export default function HomepageProductShowcase({
  productSections,
}: HomepageProductShowcaseProps) {
  const cms = useCMS()

  const productSectionElements = productSections.map(({ title, items }) => (
    <AppsSection headline={title} apps={items} />
  ))

  return (
    <div className={styles.data}>
      <div className={styles.darkenBackground} />
      <div className={styles.center}>{productSectionElements}</div>
    </div>
  )
}
