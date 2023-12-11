import Label from "@/components/atoms/label/label"
import styles from "./tags.module.scss"

const services = [
  "Value alignment",
  "Voice and messaging",
  "Visual foundations",
  "Logo design",
  "Photography",
  "Web design",
  "Web development",
  "User experience",
  "Accessibility",
]

export default function ServiceTags() {
  return (
    <section className={`${styles.wrapper}`}>
      {services.map((item, index) => (
        <Label key={index}>{item}</Label>
      ))}
    </section>
  )
}