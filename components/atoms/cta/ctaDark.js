import Link from "next/link"
import styles from "./ctaDark.module.scss"

export default function CtaDark({ href, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Link className={styles.button}>
        {children}
      </Link>
    </Link>
  )
}