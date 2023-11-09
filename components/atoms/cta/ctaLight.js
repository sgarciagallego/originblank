import Link from "next/link"
import styles from "./ctaLight.module.scss"
import Vector from "../vector"

export default function CtaLight({ href, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Link className={styles.button}>
        {children}
        <Vector name="arrowRight" />
      </Link>
    </Link>
  )
}