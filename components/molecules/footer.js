import Link from "next/link"
import styles from "./footer.module.scss"
import WordMark from "../atoms/vectors/wordmark"
import Vector from "../atoms/vector"

export default function Footer() {
  return (
    <div className={styles.parent}>
      <footer className={`container ${styles.footer}`}>
        <div className={styles.fullWidth}>
          <WordMark />
          <Link 
            href=""
            className={styles.btn}
          >
            Start a project
            <Vector name="arrowRight" />
          </Link>
        </div>
        <div className={styles.fullWidth}>
          <ul>
            <li>© 2023 Origin Blank. All rights reserved.</li>
            <li><Link href="">Accessibility</Link></li>
            <li><Link href="">Privacy Policy</Link></li>
          </ul>
          <ul>
            <li><Link 
              href=""
              target="_blank"
              rel="nofollow"
            >
              Facebook
            </Link></li>
            <li><Link 
              href="https://www.instagram.com/originblank/"
              target="_blank"
              rel="nofollow"
            >
              Instagram
            </Link></li>
            <li><Link 
              href=""
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}