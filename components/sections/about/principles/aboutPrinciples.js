import Subtitle from "@/components/atoms/subtitle/subtitle"
import styles from "./aboutPrinciples.module.scss"

const purpose = [
  "Our Purpose",
  "To create experiences designed to scale"
]

const values = [
  "Our Values",
  {
    id: "value_one",
    heading: "Environment-conscious",
    desc: "Because we care about our home and what we leave for our children, we are partnering with 1% for the Planet, reinforcing our commitment to a greener future by investing 1% of our total gross income in worthwhile environmental initiatives.",
  },
  {
    id: "value_two",
    heading: "Operational transparency",
    desc: "We believe in open and genuine communication, providing clients with a clear view of how we work, pioneering a new level of clarity and accountability.",
  },
  {
    id: "value_three",
    heading: "Build to scale",
    desc: "We understand that brands aren’t static entities, and we strongly believe that your brand must scale in parallel to your growth.",
  },
  {
    id: "value_four",
    heading: "All about connections",
    desc: "We wholeheartedly dedicate ourselves to each and every brand, ensuring client satisfaction. After all, a happy client is a returning client!",
  },
]

export default function AboutPrinciples() {
  return (
    <section className={`space ${styles.wrapper}`}>
      <div className={styles.purpose}>
        <Subtitle>{purpose[0]}</Subtitle>
        <h2>{purpose[1]}</h2>
      </div>
      <Subtitle>{values[0]}</Subtitle>
      {values.slice(1).map(value => (
        <article key={value.id} className={styles.card}>
          <h3>{value.heading}</h3>
          <p>{value.desc}</p>
        </article>
      ))}
    </section>
  )
}