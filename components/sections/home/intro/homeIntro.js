"use client"

import { useState, useEffect } from "react"
import styles from "./homeIntro.module.scss"
import Intro from "@/components/molecules/intro/intro"
import LineVector from "@/components/atoms/vectors/line"

export default function HomeIntro() {
  const keyword = "Elevate"
  const [isTriggered, setIsTriggered] = useState(false)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const transitionDuration = 0.6

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const triggerOffset = document.getElementById("trigger").offsetTop

      if (scrollPosition > triggerOffset && scrollPosition > lastScrollPosition) {
        setIsTriggered(true)
      } else if (scrollPosition <= triggerOffset) {
        setIsTriggered(false)
      }

      setLastScrollPosition(scrollPosition)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollPosition])

  const getTransformStyles = (index) => {
    const transition = `transform ${transitionDuration}s ease`

    if (isTriggered) {
      return {
        transform: `translateY(-${Math.pow(index, 1.75) * 0.25}rem) rotate(-${index * 6}deg)`,
        transition,
      }
    } else {
      return {
        transform: "none",
        transition,
      }
    }
  }

  return (
    <>
      <div id="trigger" style={{ height: "0", position: "absolute", top: "0" }}></div>
      <Intro>
        <span>
          {keyword.split("").map((char, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                ...getTransformStyles(index),
              }}
            >
              {char}
            </span>
          ))}
          {keyword.length > 0 && " "}
        </span>
        your brand.
        <br />
        You{" "}
        <span className={`${styles.underline}`} style={getTransformStyles(0)}>
          deserve
          <LineVector />
        </span>{" "}it.
      </Intro>
    </>
  )
}