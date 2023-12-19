import Statement from "@/components/molecules/statement/statement"

const content = {
  aboutUs: "At Origin Blank, we motion the connection between brands and people. Our passion for design, digital experience, and strategy cultivates bonds that resonate with customers and experiences that adapt with growth.",
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
