import styles from "./intro.module.scss"
import Subtitle from "@/components/atoms/subtitle/subtitle"
import CtaLight from "@/components/atoms/cta/ctaLight"

export default function Intro({
  element,
  subtitle, 
  children, 
  intro, 
  ctaHref, 
  cta
}) {
  const Element = element || "div"

  return (
    <Element className={`
      space 
      ${subtitle ? styles.wrapperMin : styles.wrapperMax}
    `}>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <h1>{children}</h1>
      {intro && <p>{intro}</p>}
      {(cta && ctaHref) && <CtaLight href={ctaHref}>{cta}</CtaLight>}
    </Element>
  )
}