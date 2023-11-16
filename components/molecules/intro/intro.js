import styles from "./intro.module.scss"

export default function Intro({ subtitle, children }) {
  return (
    <section className={`
      container 
      ${subtitle ? styles.wrapperMin : styles.wrapperMax}
    `}>
      {subtitle && <div role="doc-subtitle">{subtitle}</div>}
      <h1>{children}</h1>
    </section>
  )
}