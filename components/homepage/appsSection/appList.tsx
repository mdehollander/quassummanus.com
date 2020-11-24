import AppItem from "./appItem"

import styles from "./styles/appList.module.sass"

export default function AppList({ apps }) {
  let listItems = apps.map((data, i) => <AppItem key={i} {...data} />)

  return <ul className={styles.list}>{listItems}</ul>
}
