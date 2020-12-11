import Router from "next/router"
import {
  InlineText,
  InlineTextarea,
  InlineField,
  BlocksControls,
  InlineImage,
  Block,
  BlockComponentProps,
} from "react-tinacms-inline"
import { useCMS } from "tinacms"
import DownloadOnAppStore from "../../common/downloadOnAppStore"

import styles from "./styles/homepageProduct.module.sass"

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

export default function HomepageProduct({ data, index }: BlockComponentProps) {
  const cms = useCMS()

  const handleGoToProductPage = () => {
    if (cms.disabled) {
      Router.push(data.url)
    }
  }

  return (
    <div className={styles.productContainer}>
      <div onClick={handleGoToProductPage}>
        <InlineImage
          name="src"
          parse={media => `/logos/${media.filename}`}
          uploadDir={() => "/public/logos"}
          previewSrc={fieldValue => cms.media.previewSrc(`public${fieldValue}`)}
          alt="product-logo"
          focusRing={false}
          className={styles.image}
        />
      </div>
      <div>
        {/* Product Name Field */}
        <h3 className={styles.header} onClick={handleGoToProductPage}>
          <InlineText
            name="name"
            placeholder="Product Name"
            focusRing={false}
          />
        </h3>

        {/* Product Description Field */}
        <p className={styles.paragraph} onClick={handleGoToProductPage}>
          <InlineTextarea
            name="description"
            placeholder="Product Description"
            focusRing={false}
          />
        </p>

        {/* AppStore + Google Play links */}
        <div className={styles.appStoreLinksContainer}>
          {data.appStoreLink && <DownloadOnAppStore href={data.appStoreLink} />}
        </div>
      </div>
    </div>
  )
}

export const homepageProductBlock: Block = {
  Component: props => (
    <div className={styles.blockContainer}>
      <BlocksControls index={props.index} focusRing={{ offset: 8 }}>
        <HomepageProduct {...props} />
      </BlocksControls>
    </div>
  ),
  template: {
    label: "Product Template",
    defaultItem: (): HomepageProductType => ({
      name: "",
      description: "",
      src: "",
      url: "",
    }),
    fields: [
      {
        name: "url",
        label: "Product Page Link",
        component: "text",
      },
      {
        name: "appStoreLink",
        label: "AppStore Link",
        component: "text",
      },
      {
        name: "googlePlayLink",
        label: "Google Play Link",
        component: "text",
      },
    ],
  },
}
