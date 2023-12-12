import Statement from "@/components/molecules/statement/statement"

const content = {
  aboutUs: "At Origin Blank, we exist to aid brands, big and small, to reach their people. Experience is everything to a person, and we take pleasure in supplying meaningful change through design, digital experience, and strategy, resulting in a bond between customer and company like never before.",
}

export default function HomeAbout() {
  return (
    <Statement 
      element="section" 
      linkHref="/about" 
      link="Who we are"
    >
      {content.aboutUs}
    </Statement>
  )
}
