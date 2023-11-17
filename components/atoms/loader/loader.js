import styles from "./loader.module.scss"

export default function Loader() {
  return (
    <main className={`container ${styles.wrapper}`}>
      <span className={styles.loader}></span>
    </main>
  )
}
