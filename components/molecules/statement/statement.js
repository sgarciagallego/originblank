import styles from "./statement.module.scss"
import Subtitle from "@/components/atoms/subtitle/subtitle"
import Hyperlink from "@/components/atoms/hyperlink/hyperlink"

export default function Statement({ element, subtitle, children, linkHref, link }) {
  const Element = element || "div"

  return (
    <Element className={`space ${styles.wrapper}`}>
      <div className={styles.box}>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <p className="large">{children}</p>
        {(linkHref && link) && <Hyperlink href={linkHref}>{link}</Hyperlink>}
      </div>
    </Element>
  )
}