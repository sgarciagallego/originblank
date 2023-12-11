import Label from "@/components/atoms/label/label"
import styles from "./tags.module.scss"

export default function ServiceTags({ services }) {
  return (
    <div className={styles.wrapper}>
      {services.map((item, index) => (
        <Label key={index}>{item}</Label>
      ))}
    </div>
  )
}