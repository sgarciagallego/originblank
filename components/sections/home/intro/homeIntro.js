import styles from "./homeIntro.module.scss"
import Intro from "@/components/molecules/intro/intro"
import LineVector from "@/components/atoms/vectors/line"

export default function HomeIntro() {
  const keyword = "Elevate"

  return (
    <>
      <Intro>
        <span>
          {keyword.split("").map((char, index) => (
            <span key={index} style={{ 
              display: "inline-block", 
              transform: `translateY(-${Math.pow(index, 1.75) * 0.25}rem) rotate(-${index * 6}deg)`,
            }}>{char}</span>
          ))}
          {keyword.length > 0 && " "}
        </span>
        your brand.<br />
        You <span className={styles.underline}>
          deserve 
          <LineVector />
        </span> it.
      </Intro>
    </>
  )
}