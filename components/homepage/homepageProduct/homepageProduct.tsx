import { InlineText, BlocksControls } from "react-tinacms-inline"

import styles from "./styles/appItem.module.sass"

export interface HomepageProductType {
  name: string
  description: string
  src: string
  url: string
  appStoreLink?: string
  googlePlayLink?: string
  customLink?: string
  customLinkIcon?: string
}

export default function HomepageProduct() {
  return (
    <div className={styles.listitem}>
      <img
        src={""}
        alt={name}
        className={styles.image}
        width="96"
        height="96"
      />
      {/* <a href={url} className={styles.listitemlink}> */}
      <h4 className={styles.header}>
        <InlineText name="name" />
      </h4>
      {/* </a> */}
      <div className={styles.paragraphgroup}>
        <p className={styles.paragraph}>
          <InlineText name="description" />
        </p>
        <img src={""} alt="" />
      </div>
    </div>
  )
}

export const homepageProductBlock = {
  Component: ({ index }) => (
    <BlocksControls index={index}>
      <HomepageProduct />
    </BlocksControls>
  ),
  template: {
    label: "Product Template",
    defaultItem: (): HomepageProductType => ({
      name: "",
      description: "",
      src: "",
      url: "",
    }),
    fields: [],
  },
}
