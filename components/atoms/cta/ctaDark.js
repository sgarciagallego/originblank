import Link from "next/link"
import styles from "./ctaDark.module.scss"
import Vector from "../vector"

export default function CtaDark({ href, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Link className={styles.button}>
        {children}
        <Vector name="arrowRight" />
      </Link>
    </Link>
  )
}