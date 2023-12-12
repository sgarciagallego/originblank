import styles from "./homeOfferings.module.scss"
import Accordion from "@/components/molecules/accordion/accordion"

const offerings = [
  {
    header: "Strategy and Alignment",
    description: "This is a description.",
    listName: "Expertise",
    list: [
      "Market and consumer insight",
      "Brand strategy",
      "Brand architecture",
      "Brand alignment",
      "Brand positioning",
      "Messaging and communications"
    ],
    active: false,
  },
  {
    header: "Purpose-driven Design",
    description: "This is a description.",
    listName: "Expertise",
    list: [
      "Brand design",
      "Design systems and guidelines",
      "Human-centered design",
      "Logo design",
      "Experience design",
      "Brand assets"
    ],
    active: false,
  },
  {
    header: "Digital experience",
    description: "This is a description.",
    listName: "Expertise",
    list: [
      "Wireframes and prototyping",
      "Website design",
      "UX/UI design",
      "Accessibility testing",
      "Technical SEO",
      "Information architecture",
      "Conversion optimisation",
      "Website development",
      "Latest technologies",
      "CMS integration",
    ],
    active: false,
  },
]

export default function HomeOfferings() {
  return (
    <main className={`space ${styles.wrapper}`}>
      <h2>What we do</h2>
      <p>Unleashing the extraordinary through unwavering passion and self-expression. Every project we take on is a journey of transformation and evolution, crafting unique concepts that redefine experiences for your people.</p>
      {offerings.map((offering, index) => (
        <Accordion
          key={index}
          header={offering.header}
          description={offering.description}
          listName={offering.listName}
          list={offering.list}
          active={offering.active}
        />
      ))}
    </main>
  )
}