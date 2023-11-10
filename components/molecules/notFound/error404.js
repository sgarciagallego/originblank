import Cta from "@/components/atoms/cta/ctaLight"
import styles from "./error404.module.scss"

export const metadata = {
  title: "Origin Blank | Page not Found",
  description: "",
}

export default function Error404() {
  return (
    <main className={styles.wrapper}>
      <div className={`container ${styles.center}`}>
        <h1>We went blank.</h1>
        <p>It seems like we&apos;ve travelled a bit too far outside the box. Let&apos;s help you get back to us.</p>
        <Cta href="/">Back to home</Cta>
      </div>
    </main>
  )
}