import styles from "./label.module.scss"

export default function Label({ children }) {
  return (
    <div 
      role="listitem" 
      className={styles.label}
    ><small>
      {children}
    </small></div>
  )
}
