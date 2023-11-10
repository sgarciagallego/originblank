import Link from "next/link"
import styles from "./ctaLight.module.scss"

export default function CtaLight({ href, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Link className={styles.button}>
        {children}
      </Link>
    </Link>
  )
}