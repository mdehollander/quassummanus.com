import { InlineBlocks } from "react-tinacms-inline"

import styles from "./styles/productShowcase.module.sass"

import { homepageProductBlock } from "./homepageProduct"
import { homepageSectionHeaderBlock } from "../homepageSectionHeader/hompageSectionHeader"

export default function HomepageProductShowcase() {
  return (
    <div className={styles.data}>
      <div className={styles.darkenBackground} />
      {/* <div className={styles.center}> */}
        <InlineBlocks name="productSections" blocks={ProductSectionsBlocks} className={styles.center}/>
      {/* </div> */}
    </div>
  )
}

const ProductSectionsBlocks = {
  homepageProduct: homepageProductBlock,
  homepageSectionHeader: homepageSectionHeaderBlock,
}
