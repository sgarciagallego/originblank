import Link from "next/link"
import styles from "./footer.module.scss"
import WordMark from "../../atoms/vectors/wordmark"
import CtaDark from "@/components/atoms/cta/ctaDark"

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <footer className="space">
        <div className={styles.identity}>
          <WordMark />
          <CtaDark href="/contact">Start a project</CtaDark>
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
            <h2>Rendezvous</h2>
            <p>Are you feeling a face-to-face is more efficient? Hit us up, and let&apos;s make it happen!</p>
          </div>
          <div className={styles.contact}>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="mailto:hello@originblank.com">hello@originblank.com</a>
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
              <li>
                <Link 
                  href="https://www.instagram.com/originblank/" 
                  target="_blank"
                  rel="nofollow"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.linkedin.com/company/originblank"
                  target="_blank"
                  rel="nofollow"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}