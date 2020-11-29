import { InlineField } from "react-tinacms-inline"
import { useCMS } from "tinacms"

import styles from "./styles/homepageHeroText.module.sass"

export default function HomepageHeroText() {
  const cms = useCMS()

  return (
    <>
      <InlineField name="title">
        {({ input }) => {
          if (cms.enabled) {
            return <input type="text" {...input} className={styles.header} />
          } else {
            return <h1 className={styles.header}>{input.value}</h1>
          }
        }}
      </InlineField>

      <InlineField name="subtitle">
        {({ input }) => {
          if (cms.enabled) {
            return <textarea className={styles.paragraph} {...input} />
          } else {
            return <p className={styles.paragraph}>{input.value}</p>
          }
        }}
      </InlineField>
    </>
  )
}
