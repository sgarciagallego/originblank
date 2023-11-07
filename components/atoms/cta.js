import Link from "next/link"
import styles from "./cta.module.scss"

export default function CTA({ href, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Link className={styles.button}>
        {children}
      </Link>
    </Link>
  )
}