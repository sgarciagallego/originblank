import Hyperlink from "@/components/atoms/hyperlink/hyperlink"
import styles from "./homeAbout.module.scss"

const content = {
  aboutUs: "At Origin Blank, we exist to aid brands, big and small, to reach their people. Experience is everything to a person, and we take pleasure in supplying meaningful change through design, digital experience, and strategy, resulting in a bond between customer and company like never before.",
  link: "Who we are",
}

export default function HomeAbout() {
  return (
    <section className={`space ${styles.wrapper}`}>
      <div className={styles.box}>
        <p className="large">{content.aboutUs}</p>
        <Hyperlink href="/about">{content.link}</Hyperlink>
      </div>
    </section>

  )
}
