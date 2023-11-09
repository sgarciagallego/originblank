import Link from "next/link"
import styles from "./footer.module.scss"
import WordMark from "../../atoms/vectors/wordmark"
import CtaDark from "@/components/atoms/cta/ctaDark"

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <footer className="container">
        <div className={styles.identity}>
          <WordMark />
          <CtaDark href="">Start a project</CtaDark>
        </div>
        <section className={styles.map}>
          <div className={styles.navigate}>
            <h2>Navigate</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/packages">Packages</Link></li>
            </ul>
          </div>
          <div className={styles.findUs}>
            <h2>Find us</h2>
            <p>Are you feeling a face-to-face is more efficient? Hit us up, and let's make it happen!</p>
          </div>
          <div className={styles.contact}>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="mailto:hello@originblank.com">hello@originblank.com</a>
              </li>
              <li>
                <a href="tel:+44 7900658494">+44 7900 658 494</a>
              </li>
            </ul>
          </div>
        </section>
        <div className={styles.critical}>
          <div className={styles.legal}>
            <ul>
              <li>© 2023 Origin Blank. All rights reserved.</li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/accessibility">Accessibility</Link></li>
            </ul>
          </div>
          <div className={styles.socials}>
            <ul>
              <li><Link href="">Instagram</Link></li>
              <li><Link href="">Facebook</Link></li>
              <li><Link href="">Linkedin</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}