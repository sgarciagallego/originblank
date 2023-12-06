import Hyperlink from "@/components/atoms/hyperlink/hyperlink"
import styles from "./homeAbout.module.scss"

export default function HomeAbout() {
  return (
    <section className={`space ${styles.wrapper}`}>
      <p>Hello</p>
      <Hyperlink href="/about">Who we are</Hyperlink>
    </section>

  )
}
