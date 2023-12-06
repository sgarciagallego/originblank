import CtaLight from "@/components/atoms/cta/ctaLight"
import styles from "./intro.module.scss"

export default function Intro({
  subtitle, 
  children, 
  intro, 
  ctaHref, 
  cta
}) {
  return (
    <section className={`
      space 
      ${subtitle ? styles.wrapperMin : styles.wrapperMax}
    `}>
      {subtitle && <div role="doc-subtitle">{subtitle}</div>}
      <h1>{children}</h1>
      {intro && <p>{intro}</p>}
      {(cta && ctaHref) && <CtaLight href={ctaHref}>{cta}</CtaLight>}
    </section>
  )
}