import { useCMS } from "tinacms"
import { BlocksControls, InlineText, InlineField } from "react-tinacms-inline"

import styles from "./styles/HomepageSectionHeader.module.sass"

export interface HomepageSectionHeaderType {
  title: string
}

export default function HomepageSectionHeader() {
  const cms = useCMS()

  return (
    <InlineField name="title">
      {({ input }) => {
        if (cms.enabled) {
          return (
            <input
              type="text"
              {...input}
              className={styles.headline}
              placeholder="Enter title..."
            />
          )
        } else {
          return <h2 className={styles.headline}>{input.value}</h2>
        }
      }}
    </InlineField>
  )
}

export const homepageSectionHeaderBlock = {
  Component: ({ index }) => (
    <div className={styles.blockContainer}>
      <BlocksControls index={index} focusRing={{ offset: 8 }}>
        <HomepageSectionHeader />
      </BlocksControls>
    </div>
  ),
  template: {
    label: "Section Header Template",
    defaultItem: (): HomepageSectionHeaderType => ({
      title: "",
    }),
    fields: [],
  },
}
