'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./navbar.module.scss"
import Vector from "../../atoms/vector"

export default function Navbar() {
  const [viewportWidth, setViewportWidth] = useState(0)
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth)
    }

    updateViewportWidth()

    window.addEventListener("resize", updateViewportWidth)

    return () => {
      window.removeEventListener("resize", updateViewportWidth)
    }
  })

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible)
  }

  return (
    <header className={`space ${styles.parent}`}>
      <Link href="/" aria-label="Home">
        <Vector name="wordmark" />
      </Link>
      {viewportWidth < 768 ? (
        <>
          <button
            className={`
              ${styles.hamburger}
              ${mobileMenuVisible ? styles.active : ""}
            `}
            onClick={toggleMobileMenu}
            aria-label="Hamburger menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {mobileMenuVisible && (
            <nav className={styles.mobileContainer}>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/packages">Packages</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          )}
        </>
      ) : (
        <nav className={styles.container}>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/packages">Packages</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}