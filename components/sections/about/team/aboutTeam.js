import Image from "next/image"
import styles from "./aboutTeam.module.scss"

const team = [
  {
    id: "member_one",
    name: "Sergio Garcia Gallego",
    position: "Founding partner",
    role: "Creative and Technical",
    imageSrc: "/placeholder.jpg",
    imageAlt: "",
    altImageSrc: "/placeholder_2.jpg",
    altImageAlt: "",
  },
  {
    id: "member_two",
    name: "Stefania-Cristina Gheorghe",
    position: "Founding partner",
    role: "Marketing",
    imageSrc: "/placeholder.jpg",
    imageAlt: "",
    altImageSrc: "/placeholder_2.jpg",
    altImageAlt: "",
  },
]

export default function AboutTeam() {
  return (
    <section className={styles.wrapper}>
      <h2 className="space">Meet the team</h2>
      <div className={`space ${styles.grid}`}>
        {team.map(member => (
          <article key={member.id} className={styles.card}>
            <div className={styles.container}>
              <Image
                src={member.imageSrc}
                alt={member.imageAlt}
                width={300}
                height={400}
              />
              <Image 
                src={member.altImageSrc}
                alt={member.altImageAlt}
                width={300}
                height={400}
                className={styles.altImage}
              />
            </div>
            <h3>{member.name}</h3>
            <p>{member.position}, {member.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}