import Image from "next/image"
import styles from "./homeWork.module.scss"
import Link from "next/link"
import ServiceTags from "@/components/molecules/tags/services/tags"

const cards = [
  {
    id: "card_one",
    href: "",
    image: [
      "/placeholder.jpg",
      "description",
      320,
      180,
    ],
    project: "",
    desc: "",
    provided: [],
  },
  {
    id: "card_two",
    href: "/work/purple-beard",
    image: [
      "/placeholder.jpg",
      "description",
      1200,
      900,
    ],
    project: "Purple Beard",
    desc: "Revitalising one of the UK's leading alternative education innovators.",
    provided: [
      "Brand strategy",
      "Visual identity",
      "Web design",
      "Web development",
    ],
  },
  {
    id: "card_three",
    href: "",
    image: [
      "/placeholder.jpg",
      "description",
      800,
      600,
    ],
    project: "Vasave",
    desc: "",
    provided: [
      "Web design",
      "Web development"
    ],
  },
  {
    id: "card_four",
    href: "",
    image: [
      "/placeholder.jpg",
      "description",
      400,
      300,
    ],
    project: "Restored Eden Physiotherapy",
    desc: "",
    provided: [
      "Web design",
      "Web development"
    ],
  },
]

export default function HomeWork() {
  return (
    <section className={`space ${styles.wrapper}`}>
      {cards.map((card) => (
        <Link key={card.id} href={card.href} className={styles.card}>
          <div className={styles.constrain}>
            <Image
              src={card.image[0]}
              alt={card.image[1]}
              width={card.image[2]}
              height={card.image[3]}
              quality={100}
            />
          </div>
          {card.project !== '' && <h2>{card.project}</h2>}
          {card.desc !== '' && <p>{card.desc}</p>}
          {card.provided.length > 0 && <ServiceTags services={card.provided} />}
        </Link>
      ))}
    </section>
  )
}
