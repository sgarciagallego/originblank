import Link from "next/link"
import styles from "./hyperlink.module.scss"

export default function Hyperlink({ href, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Link className={styles.hyperlink}>
        {children}
      </Link>
    </Link>
  )
}